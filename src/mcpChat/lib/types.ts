import type { TextResourceContents } from "@modelcontextprotocol/sdk/types.js";

export type ResourceUseRecord = {
  uri: string;
  content: TextResourceContents[];
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type PromptUseRecord = { name: string; args: any; content: any };

export type ChatWithToolsOptions = {
  useResources?: string[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  usePrompts?: Array<{ name: string; args?: any }>;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
};
