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
 * @param locale - Current locale to filter tools/resources/prompts
 * @returns Promise resolving to MCP initialization response with tools, resources, prompts, and connection status
 */
export const mcpInit = async (locale: string): Promise<McpInitResponse> => {
  console.log(`[MCP Client] Starting MCP initialization for locale: ${locale}`);
  const startTime = performance.now();

  const defaultResponse: McpInitResponse = {
    tools: [],
    resources: [],
    prompts: [],
    connected: false,
    cached: false,
  };

  try {
    const url = new URL("/api/mcp/chat/stream", window.location.origin);
    url.searchParams.set("locale", locale);

    console.log(`[MCP Client] Fetching MCP capabilities from server`);
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      // In dev mode, 404 is expected during initial server startup
      if (res.status === 404 && process.env.NODE_ENV === "development") {
        console.log(
          "[MCP Client] MCP server not ready yet (404) - this is normal during dev startup. Will return empty capabilities."
        );
        return defaultResponse;
      }

      const errorText = await res.text().catch(() => "Unknown error");
      const errorMessage = `[MCP Client] MCP initialization failed: HTTP ${res.status} ${res.statusText} - ${errorText.slice(0, 400)}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const raw = await res.text();
    if (!raw.trim()) {
      console.warn("[MCP Client] MCP initialization returned empty response");
      return defaultResponse;
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error("[MCP Client] Failed to parse MCP initialization response:", parseError);
      throw new Error(
        `Invalid JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}`
      );
    }

    // Validate and normalize the response structure
    if (typeof parsed !== "object" || parsed === null) {
      console.error("[MCP Client] MCP initialization response is not an object:", parsed);
      return defaultResponse;
    }

    const response = parsed as Record<string, unknown>;
    const result = {
      tools: Array.isArray(response.tools) ? response.tools : [],
      resources: Array.isArray(response.resources) ? response.resources : [],
      prompts: Array.isArray(response.prompts) ? response.prompts : [],
      connected: Boolean(response.connected),
      cached: Boolean(response.cached),
    };

    const duration = Math.round(performance.now() - startTime);
    console.log(
      `[MCP Client] MCP initialization completed in ${duration}ms - Tools: ${result.tools.length}, Resources: ${result.resources.length}, Prompts: ${result.prompts.length}, Connected: ${result.connected}`
    );

    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[MCP Client] MCP initialization failed:", errorMessage);
    return defaultResponse;
  }
};
