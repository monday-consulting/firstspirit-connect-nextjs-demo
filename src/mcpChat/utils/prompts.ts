import type { MessageParam } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Prompt } from "@modelcontextprotocol/sdk/types.js";
import type { ChatWithToolsOptions, PromptUseRecord } from "../lib";

export type CoreReader = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  getPrompt: (name: string, args?: any) => Promise<any[]>;
};

export type SelectResourcesToLoadProps = {
  messages: MessageParam[];
  prompts: Prompt[];
  core: CoreReader;
  options?: ChatWithToolsOptions;
};

export const selectPromptsToLoad = async ({
  messages,
  prompts,
  core,
  options,
}: SelectResourcesToLoadProps) => {
  const promptsUsed: PromptUseRecord[] = [];
  const shouldAutoApplyPrompts = options?.autoApplyRelevantPrompts !== false;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const promptsToLoad: Array<{ name: string; args?: any }> = options?.usePrompts
    ? [...options.usePrompts]
    : [];
  if (shouldAutoApplyPrompts && prompts.length > 0) {
    const last = messages[messages.length - 1];
    const userContent = typeof last?.content === "string" ? last.content.toLowerCase() : "";
    for (const p of prompts) {
      const kws = [p.name.toLowerCase(), ...(p.description?.toLowerCase().split(" ") || [])];
      const relevant =
        kws.some((k) => k.length > 3 && userContent.includes(k)) ||
        p.name.includes("summary") ||
        p.name.includes("advisory");
      if (relevant && !promptsToLoad.some((x) => x.name === p.name))
        promptsToLoad.push({ name: p.name });
    }
  }

  for (const p of promptsToLoad) {
    try {
      const content = await core.getPrompt(p.name, p.args);
      promptsUsed.push({ name: p.name, args: p.args || {}, content });
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.warn(`[MCP] getPrompt failed: ${p.name}`, e);
    }
  }
  return promptsUsed;
};
