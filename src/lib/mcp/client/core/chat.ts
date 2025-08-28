import type { ModelId } from "@/components/features/McpChat/AvailableModels";
import type { Prompt } from "@modelcontextprotocol/sdk/types.js";

export type McpChatRequest = {
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  useResources?: string[];
  usedUserPrompt?: Prompt;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
  selectedModel?: ModelId;
};

export const postMcpChat = async (body: McpChatRequest, signal?: AbortSignal) => {
  const res = await fetch("/api/mcp/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};
