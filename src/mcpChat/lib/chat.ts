import type { ChatWithToolsOptions, ResourceUseRecord, PromptUseRecord } from "./types";
import { pickPreset } from "./prompts";
import type { MessageParam, ToolUseBlock } from "@anthropic-ai/sdk/resources/messages.mjs";

import { createMessage } from "../utils/createMessage";

export const buildChat = (core: ReturnType<typeof import("./clientCore").createCore>) => {
  const chatWithTools = async (
    messages: MessageParam[],
    options?: ChatWithToolsOptions
  ): Promise<{
    response: string;
    toolsUsed: ToolUseBlock[];
    resourcesUsed: ResourceUseRecord[];
    promptsUsed: PromptUseRecord[];
  }> => {
    // Collect resource and prompt context (auto-select + load)
    try {
      if (!Array.isArray(messages)) {
        console.error("[chatWithTools] invalid messages payload");
        return { response: "Invalid request.", toolsUsed: [], resourcesUsed: [], promptsUsed: [] };
      }
      const chatMessages = messages.filter((m) => m?.role === "user" || m?.role === "assistant");
      if (chatMessages.length === 0) {
        return {
          response: "No messages to process.",
          toolsUsed: [],
          resourcesUsed: [],
          promptsUsed: [],
        };
      }

      const resources = core.getAvailableResources();
      const prompts = core.getAvailablePrompts();
      const tools = core.getAvailableTools();

      //  Build the final system prompt (preset/custom + lists of tools/resources/prompts + loaded context)
      const sysPreset = options?.customSystemPrompt
        ? pickPreset(options.customSystemPrompt)
        : core.getSystemPrompt();

      return await createMessage({
        core,
        sysPreset,
        chatMessages,
        messages,
        tools,
        resources,
        prompts,
        options,
      });
    } catch (error) {
      console.error("Error in chatWithTools:", error);
      return {
        response: "An error occurred while processing your request.",
        toolsUsed: [],
        resourcesUsed: [],
        promptsUsed: [],
      };
    }
  };
  return chatWithTools;
};
