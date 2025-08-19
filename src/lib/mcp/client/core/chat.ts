export type McpChatRequest = {
  messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
  useResources?: string[];
  // biome-ignore lint/suspicious/noExplicitAny: Should be implemented in the future
  usePrompts?: Array<{ name: string; args?: any }>;
  customSystemPrompt?: string;
  autoLoadAllResources?: boolean;
  autoApplyRelevantPrompts?: boolean;
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
