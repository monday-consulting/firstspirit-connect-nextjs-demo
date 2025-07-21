import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { JSONRPCError } from "@modelcontextprotocol/sdk/types.js";
import { PageRoutes } from "@/utils/mcp/layers/pageLayer";

import { ProductRoutes } from "@/utils/mcp/layers/productLayer";
import { locales } from "@/i18n/config";

// Netlify serverless function handler which handles all inbound requests
export default async (req: Request) => {
  try {
    // for stateless MCP, we'll only use the POST requests that are sent
    // with event information for the init phase and resource/tool requests
    if (req.method === "POST") {
      // Convert the Request object into a Node.js Request object
      const { req: nodeReq, res: nodeRes } = toReqRes(req);
      const server = getServer();

      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      await server.connect(transport);

      const body = await req.json();
      await transport.handleRequest(nodeReq, nodeRes, body);

      nodeRes.on("close", () => {
        console.log("Request closed");
        transport.close();
        server.close();
      });

      return toFetchResponse(nodeRes);
    }

    return new Response("Method not allowed", { status: 405 });
  } catch (error) {
    console.error("MCP error:", error);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
        },
        id: "",
      } satisfies JSONRPCError),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

function getServer(): McpServer {
  // initialize our MCP Server instance that we will
  // attach all of our functionality and data.
  const server = new McpServer(
    {
      name: "firstspirit-connect-mcp-server",
      version: "1.0.0",
    },
    {
      capabilities: {
        resources: {
          subscribe: false,
          listChanged: false,
        },
      },
    }
  );

  for (const locale of locales) {
    PageRoutes(server, locale);
    ProductRoutes(server, locale);
  }

  return server;
}
