import { createAnthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";
import type { ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Prompt, PromptMessage, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  InvalidToolInputError,
  type ModelMessage,
  NoSuchToolError,
  stepCountIs,
  streamText,
} from "ai";
import type { ModelId } from "@/components/features/McpChat/AvailableModels";
import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import type { ResourceUseRecord } from "../utils/selectResourcesToLoad";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import type { Core } from "./clientCore";
import { createSystemPrompt, toJSONSafe } from "./createSystemPrompt";
import { processUsedPrompts } from "./prompts";
import { processTools } from "./tools";

export type StreamingChunk = {
  type: "text" | "tool_start" | "tool_result" | "complete";
  content?: string;
  toolName?: string;
  toolArgs?: unknown;
  toolResult?: unknown;
};

export type StreamingCallbacks = {
  onProgress: (chunk: StreamingChunk) => Promise<void>;
  onToolUse: (toolUse: ToolUseBlock) => Promise<void>;
  onResourceUse: (resourceUse: ResourceUseRecord) => Promise<void>;
  onComplete: (result: {
    response: string;
    toolsUsed: ToolUseBlock[];
    resourcesUsed: ResourceUseRecord[];
    promptsUsed: Prompt[];
  }) => Promise<void>;
};

export type CreateStreamingMessageProps = {
  core: Core;
  sysPreset: string;
  chatMessages: ModelMessage[];
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  options?: ChatWithToolsOptions;
  usedUserPrompt?: Prompt;
  selectedModel?: ModelId;
} & StreamingCallbacks;

export const createStreamingMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  options,
  usedUserPrompt,
  selectedModel,
  onProgress,
  onToolUse,
  onResourceUse,
  onComplete,
}: CreateStreamingMessageProps) => {
  const resourcesUsed = await selectResourcesToLoad({ options, resources, core });

  // Notify about resource usage
  for (const resource of resourcesUsed) {
    await onResourceUse(resource);
  }

  const system = createSystemPrompt({
    sysPreset,
    tools,
  });

  const resourceMessages: ModelMessage[] = resourcesUsed.map((res) => ({
    role: "user",
    content: `RESOURCE (${res.uri}):\n${toJSONSafe(res.content)}`,
  }));

  const timedFetch: typeof fetch = async (input, init) => {
    const url = typeof input === "string" && input;
    const method = init?.method ?? "GET";
    const start = performance.now();

    const res = await fetch(input, init);
    const ms = Math.round(performance.now() - start);

    const serverMs = res.headers.get("x-process-time");

    console.log(
      `[LLM] ${method} ${url} -> ${res.status} in ${ms}ms`,
      serverMs ? `(server: ${serverMs}ms)` : ""
    );

    return res;
  };

  const claude = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY, fetch: timedFetch });

  const openai = createOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
    fetch: timedFetch,
  });

  let usedPrompt: Prompt[] = [];
  let injectedPromptMessages: ModelMessage[] = [];

  if (usedUserPrompt) {
    const promptResult = await core.executePrompt(usedUserPrompt);
    //@ts-expect-error:
    const usedPrompts: ModelMessage[] = processUsedPrompts(
      promptResult?.messages as PromptMessage[]
    );
    injectedPromptMessages = usedPrompts;
    usedPrompt = [usedUserPrompt];
  }

  const messages: ModelMessage[] =
    injectedPromptMessages.length && chatMessages.length
      ? [
          ...chatMessages.slice(0, -1),
          {
            role: "user",
            content: injectedPromptMessages
              .map((message) => String(message.content ?? ""))
              .join("\n\n"),
          },
        ]
      : chatMessages;

  const finalMessages = [...messages, ...resourceMessages];

  //@ts-expect-error
  const mcpTools = processTools(tools, (name, args) => core.executeTool({ name, arguments: args }));

  try {
    console.log(`Using LLM-Model: ${selectedModel}`);

    let fullResponse = "";
    let allToolsUsed: ToolUseBlock[] = [];

    if (selectedModel === "claude-sonnet-4-20250514") {
      const result = await streamText({
        model: claude("claude-sonnet-4-20250514"),
        tools: mcpTools,
        messages: finalMessages.slice(-5),
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });

      for await (const delta of result.fullStream) {
        switch (delta.type) {
          case "text-delta":
            fullResponse += delta.text;
            await onProgress({
              type: "text",
              content: delta.text,
            });
            break;

          case "tool-call":
            await onProgress({
              type: "tool_start",
              toolName: delta.toolName,
              toolArgs: delta.input,
            });
            break;

          case "tool-result":
            await onProgress({
              type: "tool_result",
              toolName: delta.toolName,
              toolResult: delta.output,
            });
            break;
        }
      }

      const steps = (await result.steps) ?? [];
      // Convert steps to ToolUseBlock format
      allToolsUsed = steps.flatMap(
        (step) =>
          step.toolCalls?.map((call) => ({
            id: call.toolCallId || `tool-${Date.now()}`,
            type: "tool_use" as const,
            name: call.toolName,
            input: call.input,
          })) || []
      );
    } else {
      const result = await streamText({
        //@ts-expect-error
        model: openai.chat(selectedModel),
        tools: mcpTools,
        messages: finalMessages.slice(-5),
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });

      for await (const delta of result.fullStream) {
        switch (delta.type) {
          case "text-delta":
            fullResponse += delta.text;
            await onProgress({
              type: "text",
              content: delta.text,
            });
            break;

          case "tool-call":
            await onProgress({
              type: "tool_start",
              toolName: delta.toolName,
              toolArgs: delta.input,
            });
            break;

          case "tool-result":
            await onProgress({
              type: "tool_result",
              toolName: delta.toolName,
              toolResult: delta.output,
            });
            break;
        }
      }

      const steps = (await result.steps) ?? [];
      // Convert steps to ToolUseBlock format
      allToolsUsed = steps.flatMap(
        (step) =>
          step.toolCalls?.map((call) => ({
            id: call.toolCallId || `tool-${Date.now()}`,
            type: "tool_use" as const,
            name: call.toolName,
            input: call.input,
          })) || []
      );
    }

    // Notify about each tool use
    for (const tool of allToolsUsed) {
      await onToolUse(tool);
    }

    await onComplete({
      response: fullResponse,
      toolsUsed: allToolsUsed,
      resourcesUsed,
      promptsUsed: usedPrompt,
    });
  } catch (error) {
    let errorResponse = "";

    if (NoSuchToolError.isInstance(error)) {
      errorResponse = "No Tool found for this request.";
    } else if (InvalidToolInputError.isInstance(error)) {
      errorResponse = "Invalid Tool input. Please try again.";
    } else {
      errorResponse = `Unexpected error: ${error instanceof Error ? error.message : ""}`;
    }

    await onComplete({
      response: errorResponse,
      toolsUsed: [],
      resourcesUsed,
      promptsUsed: usedPrompt,
    });
  }
};
