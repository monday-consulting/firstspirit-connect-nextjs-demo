import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";

export type McpInitResponse = {
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  connected: boolean;
  cached: boolean;
};

export const mcpInit = async (): Promise<McpInitResponse> => {
  try {
    const res = await fetch("/api/mcp/chat", { method: "GET" });
    const raw = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} – ${raw?.slice(0, 400)}`);

    if (!raw) {
      return { tools: [], resources: [], prompts: [], connected: false, cached: false };
    }

    const parsed = JSON.parse(raw);
    // Validate the response structure
    return {
      tools: Array.isArray(parsed.tools) ? parsed.tools : [],
      resources: Array.isArray(parsed.resources) ? parsed.resources : [],
      prompts: Array.isArray(parsed.prompts) ? parsed.prompts : [],
      connected: Boolean(parsed.connected),
      cached: Boolean(parsed.cached),
    };
  } catch (error) {
    console.error("MCP initialization failed:", error);
    return { tools: [], resources: [], prompts: [], connected: false, cached: false };
  }
};
