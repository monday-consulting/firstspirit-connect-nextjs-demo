import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import { createAnthropic } from "@ai-sdk/anthropic";
import type { Prompt, PromptMessage, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  InvalidToolInputError,
  type ModelMessage,
  NoSuchToolError,
  generateText,
  stepCountIs,
} from "ai";
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
};

export const createMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  prompts,
  options,
  usedUserPrompt,
}: CreateMessageProps) => {
  const [resourcesUsed] = await Promise.all([selectResourcesToLoad({ options, resources, core })]);

  const system = createSystemPrompt({
    sysPreset,
    tools,
  });

  const resourceMessages: ModelMessage[] = resourcesUsed.map((res) => ({
    role: "system",
    content: `RESOURCE (${res.uri}):\n${toJSONSafe(res.content)}`,
  }));

  const claude = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  let usedPrompt: Prompt[] = [];
  let injectedPromptMessages: ModelMessage[] = [];

  if (usedUserPrompt) {
    const readyPrompt = await core.getPrompt(usedUserPrompt);
    //@ts-expect-error: TODO:
    const usedPrompts: ModelMessage[] = processUsedPrompts(
      readyPrompt?.messages as PromptMessage[]
    );
    injectedPromptMessages = usedPrompts;
    usedPrompt = [usedUserPrompt];
  }

  const finalMessages: ModelMessage[] = [
    ...chatMessages,
    ...injectedPromptMessages,
    ...resourceMessages,
  ];

  const mcpTools = processTools(tools, (name, args) => core.callMcp(name, args));

  try {
    const result = await generateText({
      model: claude("claude-sonnet-4-20250514"),
      tools: mcpTools,
      messages: finalMessages,
      temperature: 0,
      system,
      stopWhen: stepCountIs(5),
    });

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
