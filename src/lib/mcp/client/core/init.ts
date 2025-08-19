import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";

export type McpInitResponse = {
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  connected: boolean;
  cached: boolean;
};

export const mcpInit = async (): Promise<McpInitResponse> => {
  const res = await fetch("/api/mcp/chat", { method: "GET" });
  const raw = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} – ${raw?.slice(0, 400)}`);
  return raw
    ? JSON.parse(raw)
    : { tools: [], resources: [], prompts: [], connected: false, cached: false };
};
