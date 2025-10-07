import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";

export type McpInitResponse = {
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  connected: boolean;
  cached: boolean;
};

/**
 * Initializes MCP client by fetching available capabilities from the server
 * @returns Promise resolving to MCP initialization response with tools, resources, prompts, and connection status
 */
export const mcpInit = async (): Promise<McpInitResponse> => {
  const defaultResponse: McpInitResponse = {
    tools: [],
    resources: [],
    prompts: [],
    connected: false,
    cached: false,
  };

  try {
    const res = await fetch("/api/mcp/chat", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "Unknown error");
      const errorMessage = `MCP initialization failed: HTTP ${res.status} ${res.statusText} - ${errorText.slice(0, 400)}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const raw = await res.text();
    if (!raw.trim()) {
      console.warn("MCP initialization returned empty response");
      return defaultResponse;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error("Failed to parse MCP initialization response:", parseError);
      throw new Error(
        `Invalid JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}`
      );
    }

    // Validate and normalize the response structure
    if (typeof parsed !== "object" || parsed === null) {
      console.error("MCP initialization response is not an object:", parsed);
      return defaultResponse;
    }

    const response = parsed as Record<string, unknown>;
    return {
      tools: Array.isArray(response.tools) ? response.tools : [],
      resources: Array.isArray(response.resources) ? response.resources : [],
      prompts: Array.isArray(response.prompts) ? response.prompts : [],
      connected: Boolean(response.connected),
      cached: Boolean(response.cached),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("MCP initialization failed:", errorMessage);
    return defaultResponse;
  }
};
