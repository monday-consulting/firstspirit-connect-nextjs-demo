import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import type { Prompt, PromptMessage, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { type CoreMessage, generateText, type LanguageModel, streamText } from "ai";

// Compatibility type alias
type ModelMessage = CoreMessage;

import type { ModelId } from "@/components/features/McpChat/AvailableModels";
import { MODEL_IDS } from "@/components/features/McpChat/AvailableModels";
import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import { LOCALE_TO_LANGUAGE } from "@/i18n/config";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import type { Core } from "./clientCore";
import { createSystemPrompt, toJSONSafe } from "./createSystemPrompt";
import { processUsedPrompts } from "./prompts";
import { processTools } from "./tools";

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
  locale?: string;
};

/**
 * Creates an AI-powered streaming chat response with MCP tool integration
 * This function streams text chunks as they arrive from the LLM, providing real-time feedback
 * @param props - Configuration object containing core, messages, tools, and options
 * @param props.core - MCP core instance for tool/resource execution
 * @param props.sysPreset - System prompt preset or custom prompt text
 * @param props.chatMessages - Conversation history messages
 * @param props.tools - Available MCP tools for the AI to use
 * @param props.resources - Available MCP resources to load as context
 * @param props.prompts - Available MCP prompt templates
 * @param props.options - Chat options like resource selection and auto-loading
 * @param props.usedUserPrompt - Optional user-selected prompt template to inject
 * @param props.selectedModel - AI model to use (Claude or OpenAI variants)
 * @param props.locale - User's locale for language-specific responses
 * @returns Promise resolving to a StreamTextResult that can be consumed for real-time streaming
 */
export const streamMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  options,
  usedUserPrompt,
  selectedModel,
  locale,
}: CreateMessageProps) => {
  // Load relevant resources based on user options and query context
  const resourcesUsed = await selectResourcesToLoad({ options, resources, core });

  // Create system prompt with tool descriptions for the AI
  const system = createSystemPrompt({
    sysPreset,
    tools,
    locale,
  });

  // Convert loaded resources into chat messages for context injection
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

  // Initialize AI model clients with timing instrumentation
  const claude = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY, fetch: timedFetch });
  const openai = createOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
    fetch: timedFetch,
  });
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    fetch: timedFetch,
  });

  let usedPrompt: Prompt[] = [];
  let injectedPromptMessages: ModelMessage[] = [];

  // Execute and inject user-selected prompt templates
  if (usedUserPrompt) {
    const promptResult = await core.executePrompt(usedUserPrompt);
    const usedPrompts = processUsedPrompts(
      promptResult?.messages as PromptMessage[]
    ) as ModelMessage[];

    injectedPromptMessages = usedPrompts;
    usedPrompt = [usedUserPrompt];
  }

  // Ensure a model is selected
  if (!selectedModel) {
    console.error("[MCP Client] No model selected!");
    throw new Error("No model selected. Please select a model and try again.");
  }

  // Merge chat history with injected prompt messages
  const messages: ModelMessage[] =
    injectedPromptMessages.length && chatMessages.length
      ? [
          ...chatMessages.slice(0, -1),
          {
            role: "user",
            content: [
              ...injectedPromptMessages.map((message) => String(message.content ?? "")),
              chatMessages[chatMessages.length - 1]?.content ?? "",
            ].join("\n\n"),
          },
        ]
      : chatMessages;

  // Combine all messages: chat + prompts + resources
  const finalMessages = [...messages, ...resourceMessages];

  // Convert MCP tools into AI SDK format with execution callbacks
  const mcpTools = processTools(tools, (name, args) =>
    core.executeTool({
      name,
      arguments: args as { [x: string]: unknown } | undefined,
    })
  );

  // Select the appropriate model
  let model: LanguageModel;
  if (selectedModel === MODEL_IDS.CLAUDE) {
    model = claude(MODEL_IDS.CLAUDE);
  } else if (selectedModel === MODEL_IDS.GEMINI) {
    model = google(MODEL_IDS.GEMINI);
  } else {
    model = openai.chat(selectedModel);
  }

  // Call streamText with tools - they will execute automatically
  // In AI SDK v5, tool execution is automatic when tools have execute functions
  const stream = streamText({
    model,
    tools: mcpTools,
    messages: finalMessages.slice(-5),
    temperature: 0,
    system,
  });

  // Helper function to continue after tool execution
  // AI SDK v5 doesn't automatically continue after tools, so we manually call the LLM again
  const continueAfterTools = async (previousMessages: ModelMessage[]) => {
    const result = await generateText({
      model,
      messages: previousMessages,
      temperature: 0,
      system,
    });

    return result.text || "";
  };

  return {
    stream,
    resourcesUsed,
    promptsUsed: usedPrompt,
    continueAfterTools,
    model,
    system,
  };
};
