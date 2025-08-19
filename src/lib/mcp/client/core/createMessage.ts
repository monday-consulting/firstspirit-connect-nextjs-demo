import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import type { Message, MessageParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { selectPromptsToLoad } from "../utils/selectPromptsToLoad";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import { createSystemPrompt } from "./createSystemPrompt";
import { CreateToolResponse } from "./createToolResponse";
import type { Core } from "./singleton";

export type CreateMessageProps = {
  core: Core;
  sysPreset: string;
  chatMessages: MessageParam[];
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  options?: ChatWithToolsOptions;
};

export const createMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  prompts,
  options,
}: CreateMessageProps) => {
  const [resourcesUsed, promptsUsed] = await Promise.all([
    selectResourcesToLoad({ options, resources, core }),
    selectPromptsToLoad({ messages: chatMessages, prompts, core, options }),
  ]);

  const system = createSystemPrompt({
    sysPreset,
    tools,
    resources,
    prompts,
    resourcesUsed,
    promptsUsed,
  });

  // Prepare chat messages and map MCP tools
  const possibleTools = tools.map((t) => ({
    name: t.name,
    description: t.description,
    input_schema: t.inputSchema,
  }));

  // First request
  let response: Message;
  try {
    response = await core.anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      system,
      tools: possibleTools.length ? possibleTools : undefined,
      messages: chatMessages,
      max_tokens: 1500,
      temperature: 0,
    });
  } catch (error) {
    console.error("First request failed:", error);
    return {
      response: "Sorry, I couldn't generate a response.",
      toolsUsed: [],
      resourcesUsed,
      promptsUsed,
    };
  }

  // After the first response, we need to handle tool uses
  const { finalResponse, usedTools } = await CreateToolResponse({
    response,
    system,
    chatMessages,
    possibleTools,
    core,
  });

  return {
    response: finalResponse.trim(),
    toolsUsed: usedTools,
    resourcesUsed,
    promptsUsed,
  };
};
