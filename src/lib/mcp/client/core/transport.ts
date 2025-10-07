import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

export type MCPHandles = {
  client: Client;
  close: () => void;
};

/**
 * Creates and connects an MCP client to the specified server URL
 * @param serverUrl - The URL of the MCP server to connect to
 * @returns Promise resolving to MCP client handles with client instance and close function
 * @throws Error if the URL is invalid or connection fails
 */
export async function createMcpClient(serverUrl: string): Promise<MCPHandles> {
  if (!serverUrl || typeof serverUrl !== "string") {
    throw new Error("Server URL must be a non-empty string");
  }

  const base = serverUrl.replace(/\/$/, "");
  let url: URL;

  try {
    url = new URL(base);
  } catch (error) {
    throw new Error(
      `Invalid URL "${serverUrl}": ${error instanceof Error ? error.message : String(error)}`
    );
  }

  let transport: StreamableHTTPClientTransport;
  let client: Client;

  try {
    transport = new StreamableHTTPClientTransport(new URL(url));
    client = new Client(
      { name: "mcp-client", version: "1.0.0" },
      { capabilities: { sampling: {} } }
    );

    await client.connect(transport);
    console.log("[MCP Client] Connected successfully to:", serverUrl);
  } catch (error) {
    throw new Error(
      `Failed to connect to MCP server at "${serverUrl}": ${error instanceof Error ? error.message : String(error)}`
    );
  }

  return {
    client,
    close: () => {
      try {
        transport.close?.();
        console.log("[MCP Client] Transport closed successfully");
      } catch (error) {
        console.warn(
          "[MCP Client] Failed to close transport:",
          error instanceof Error ? error.message : String(error)
        );
      }
    },
  };
}
