import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import type { Prompt, PromptMessage, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import type { ModelId } from "@/components/features/McpChat/AvailableModels";
import {
  type GenerateTextResult,
  InvalidToolInputError,
  type ModelMessage,
  NoSuchToolError,
  generateText,
  stepCountIs,
} from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createOpenAI } from "@ai-sdk/openai";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import type { Core } from "./clientCore";
import { createSystemPrompt, toJSONSafe } from "./createSystemPrompt";
import { processUsedPrompts } from "./prompts";
import { getUsedTools, processTools } from "./tools";

export type CreateMessageProps = {
  core: Core;
  sysPreset: string;
  chatMessages: ModelMessage[];
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  options?: ChatWithToolsOptions;
  usedUserPrompt?: Prompt;
  selectedModel?: ModelId;
};

export const createMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  options,
  usedUserPrompt,
  selectedModel,
}: CreateMessageProps) => {
  const [resourcesUsed] = await Promise.all([selectResourcesToLoad({ options, resources, core })]);

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

    // optional: Server-Processtime
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
    let result: GenerateTextResult<typeof mcpTools, unknown>;
    console.log(`Using LLM-Model: ${selectedModel}`);

    if (selectedModel === "claude-sonnet-4-20250514") {
      // Generate a response with tool use enabled.
      // The AI SDK runs a loop: model proposes a tool call → SDK validates and executes it → result is fed back → repeat → final text.
      result = await generateText({
        model: claude("claude-sonnet-4-20250514"), // Select the model via the provider adapter.
        tools: mcpTools, // Tool registry: name → { parameters (JSON Schema), description, execute() }.
        messages: finalMessages.slice(-5), // Provide only the recent context to control token usage.
        temperature: 0, // Deterministic planning and stable tool calling.
        system, // System prompt: instructions, rules, and tool affordances.
        stopWhen: stepCountIs(5), // Hard stop after 5 steps (reasoning turns or tool calls) to cap cost/latency.
      });
    } else {
      result = await generateText({
        //@ts-expect-error
        model: openai.chat(selectedModel),
        tools: mcpTools,
        messages: finalMessages,
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });
    }

    const steps = (await result.steps) ?? [];

    const toolsUsed = getUsedTools(steps);

    return {
      response: result.text,
      toolsUsed,
      resourcesUsed,
      promptsUsed: usedPrompt,
    };
  } catch (error) {
    if (NoSuchToolError.isInstance(error)) {
      return {
        response: "No Tool found for this request.",
        toolsUsed: [],
        resourcesUsed,
        promptsUsed: usedPrompt,
      };
    }
    if (InvalidToolInputError.isInstance(error)) {
      return {
        response: "Invalid Tool input. Please try again.",
        toolsUsed: [],
        resourcesUsed,
        promptsUsed: usedPrompt,
      };
    }

    return {
      response: `Unexpected error: ${error instanceof Error ? error.message : ""}`,
      toolsUsed: [],
      resourcesUsed,
      promptsUsed: usedPrompt,
    };
  }
};
