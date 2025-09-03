import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

export type MCPHandles = {
  client: Client;
  close: () => void;
};

export async function createMcpClient(serverUrl: string): Promise<MCPHandles> {
  const base = serverUrl.replace(/\/$/, "");
  let url: URL;
  try {
    url = new URL(base);
  } catch {
    throw new Error(`connectHTTP: invalid URL "${serverUrl}"`);
  }
  const transport = new StreamableHTTPClientTransport(new URL(url));
  const client = new Client(
    { name: "claude-mcp-client", version: "1.0.0" },
    { capabilities: { sampling: {} } }
  );

  await client.connect(transport);

  console.log("Client connected with:", serverUrl);

  return {
    client,
    close: () => {
      try {
        transport.close?.();
      } catch {}
    },
  };
}
