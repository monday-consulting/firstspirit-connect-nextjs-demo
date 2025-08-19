import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import type { ModelMessage } from "ai";
import type { Core } from "../core/clientCore";

export type SelectResourcesToLoadProps = {
  messages: ModelMessage[];
  prompts: Prompt[];
  core: Core;
  options?: ChatWithToolsOptions;
};

// biome-ignore lint/suspicious/noExplicitAny: Should be implemented in the future
export type PromptUseRecord = { name: string; args: any; content: any };

export const selectPromptsToLoad = async ({
  messages,
  prompts,
  core,
  options,
}: SelectResourcesToLoadProps) => {
  const promptsUsed: PromptUseRecord[] = [];
  const shouldAutoApplyPrompts = options?.autoApplyRelevantPrompts !== false;
  // biome-ignore lint/suspicious/noExplicitAny: Should be implemented in the future
  const promptsToLoad: Array<{ name: string; args?: any }> = options?.usePrompts
    ? [...options.usePrompts]
    : [];
  if (shouldAutoApplyPrompts && prompts.length > 0) {
    const last = messages[messages.length - 1];
    const userContent = typeof last?.content === "string" ? last.content.toLowerCase() : "";

    for (const prompt of prompts) {
      const kws = [
        prompt.name.toLowerCase(),
        ...(prompt.description?.toLowerCase().split(" ") || []),
      ];
      const relevant =
        kws.some((k) => k.length > 3 && userContent.includes(k)) ||
        prompt.name.includes("summary") ||
        prompt.name.includes("advisory");
      if (relevant && !promptsToLoad.some((loadedPrompt) => loadedPrompt.name === prompt.name))
        promptsToLoad.push({ name: prompt.name });
    }
  }

  for (const prompt of promptsToLoad) {
    try {
      const content = await core.getPrompt(prompt.name, prompt.args);
      promptsUsed.push({ name: prompt.name, args: prompt.args || {}, content });
    } catch (error) {
      console.warn(`[MCP] getPrompt failed: ${prompt.name}`, error);
    }
  }

  return promptsUsed;
};
