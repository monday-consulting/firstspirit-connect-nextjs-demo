import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import type { Prompt, PromptMessage, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  type GenerateTextResult,
  generateText,
  InvalidToolInputError,
  type ModelMessage,
  NoSuchToolError,
  stepCountIs,
} from "ai";
import type { ModelId } from "@/components/features/McpChat/AvailableModels";
import { MODEL_IDS } from "@/components/features/McpChat/AvailableModels";
import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import type { Core } from "./clientCore";
import { createSystemPrompt, toJSONSafe } from "./createSystemPrompt";
import { processUsedPrompts } from "./prompts";
import { getUsedTools, processTools } from "./tools";
import { createMistral, mistral } from "@ai-sdk/mistral";

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
 * Creates an AI-powered chat response with MCP tool integration
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
 * @returns Promise resolving to response text and usage metadata
 */
export const createMessage = async ({
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
  const sessionId = Math.random().toString(36).substr(2, 9);
  console.log(
    `[MCP Client] Starting message creation [${sessionId}] - Model: ${selectedModel}, Tools: ${tools.length}, Resources: ${resources.length}`
  );

  // Load relevant resources based on user options and query context
  console.log(`[MCP Client] Loading resources [${sessionId}]`);
  const resourcesUsed = await selectResourcesToLoad({ options, resources, core });
  console.log(`[MCP Client] Loaded ${resourcesUsed.length} resources [${sessionId}]`);

  // Create system prompt with tool descriptions for the AI
  console.log(`[MCP Client] Creating system prompt [${sessionId}]`);
  const system = createSystemPrompt({
    sysPreset,
    tools,
    locale,
  });
  console.log(`[MCP Client] System prompt created (${system.length} chars) [${sessionId}]`);

  // Convert loaded resources into chat messages for context injection
  const resourceMessages: ModelMessage[] = resourcesUsed.map((res) => ({
    role: "user",
    content: `RESOURCE (${res.uri}):\n${toJSONSafe(res.content)}`,
  }));

  /**
   * Fetch wrapper that logs API call timing and performance metrics
   * @param input - Fetch request input (URL or Request object)
   * @param init - Fetch request options
   * @returns Promise resolving to Response with timing logged
   */
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

  const mistral = createMistral({ apiKey: process.env.MISTRAL_API_KEY, fetch: timedFetch });

  const mistralClient = mistral(MODEL_IDS.MISTRAL);

  let usedPrompt: Prompt[] = [];
  let injectedPromptMessages: ModelMessage[] = [];

  // Execute and inject user-selected prompt templates
  if (usedUserPrompt) {
    console.log(`[MCP Client] Processing user prompt: ${usedUserPrompt.name} [${sessionId}]`);
    const promptResult = await core.executePrompt(usedUserPrompt);
    const usedPrompts = processUsedPrompts(
      promptResult?.messages as PromptMessage[]
    ) as ModelMessage[];

    injectedPromptMessages = usedPrompts;
    usedPrompt = [usedUserPrompt];
    console.log(
      `[MCP Client] User prompt processed, generated ${usedPrompts.length} messages [${sessionId}]`
    );
  } else {
    console.log(`[MCP Client] No user prompt selected [${sessionId}]`);
  }

  // Ensure a model is selected
  if (!selectedModel) {
    console.error("[MCP Client] No model selected!");

    return {
      response: "No model selected. Please select a model and try again.",
      toolsUsed: [],
      resourcesUsed,
      promptsUsed: usedPrompt,
    };
  }

  // Merge chat history with injected prompt messages
  const messages: ModelMessage[] =
    injectedPromptMessages.length && chatMessages.length
      ? [
          // Keep all messages except the last user message
          ...chatMessages.slice(0, -1),
          {
            role: "user",
            // Combine prompt content with the last user message
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
  console.log(`[MCP Client] Processing ${tools.length} tools for AI model [${sessionId}]`);
  const mcpTools = processTools(tools, (name, args) =>
    core.executeTool({
      name,
      arguments: args as { [x: string]: unknown } | undefined,
    })
  );

  console.log(
    `[MCP Client] Final message count: ${finalMessages.length} (chat: ${messages.length}, resources: ${resourceMessages.length}) [${sessionId}]`
  );



  try {
    let result: GenerateTextResult<typeof mcpTools, unknown>;
    console.log(`[MCP Client] Executing AI model: ${selectedModel} [${sessionId}]`);
    const aiStartTime = performance.now();

    // Route to appropriate AI model with tool support
    if (selectedModel === MODEL_IDS.CLAUDE) {
      result = await generateText({
        model: claude(MODEL_IDS.CLAUDE),
        tools: mcpTools,
        messages: finalMessages.slice(-5), // Last 5 messages for token efficiency
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });
    } else if (selectedModel === MODEL_IDS.GEMINI) {
      result = await generateText({
        model: google(MODEL_IDS.GEMINI),
        tools: mcpTools,
        messages: finalMessages.slice(-5),
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });
    }
      else if (selectedModel === MODEL_IDS.MISTRAL) {
        result = await generateText({
          model: mistralClient,
          tools: mcpTools,
          messages: finalMessages.slice(-5),
          temperature: 0,
          system,
          stopWhen: stepCountIs(5),
        });
    } else {
      result = await generateText({
        model: openai.chat(selectedModel),
        tools: mcpTools,
        messages: finalMessages.slice(-5),
        temperature: 0,
        system,
        stopWhen: stepCountIs(5),
      });
    }

    const aiDuration = performance.now() - aiStartTime;
    console.log(
      `[MCP Client] AI model execution completed in ${Math.round(aiDuration)}ms [${sessionId}]`
    );

    // Extract tool usage from generation steps
    const steps = result.steps ?? [];
    const toolsUsed = getUsedTools(steps);

    console.log(
      `[MCP Client] Message creation completed [${sessionId}] - Tools used: ${toolsUsed.length}, Response length: ${result.text.length} chars`
    );
    // Return response with usage metadata
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
