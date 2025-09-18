import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { JSONRPCError } from "@modelcontextprotocol/sdk/types.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { locales } from "@/i18n/config";
import { checkMarkdown } from "./server/prompts/checkMarkdown";
import { compareProducts } from "./server/prompts/compareProducts";
import { optimizeDescription } from "./server/prompts/optimizeDescription";
import { projectDescription } from "./server/prompts/projectDescription";
import { searchProducts } from "./server/prompts/searchProducts";
import { PageRoutes } from "./server/resources/pageResource";
import { ProductRoutes } from "./server/resources/productResource";
import { getAllResourcesTool } from "./server/tools/getAllResources";
import { getPagesTool } from "./server/tools/getPages";
import { getProductsTool } from "./server/tools/getProducts";
import { orderProductTool } from "./server/tools/orderProduct";

// Module-scoped singleton MCP server instance
let serverSingleton: McpServer | null = null;

export default async (req: Request) => {
  try {
    // for stateless MCP, we'll only use the POST requests that are sent
    // with event information for the init phase and resource/tool requests
    if (req.method === "POST") {
      // Convert the Request object into a Node.js Request object
      const { req: nodeReq, res: nodeRes } = toReqRes(req);
      const server = getServer();

      // Transport layer: bridge between HTTP and MCP (JSON-RPC)
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      await server.connect(transport);

      // Read the incoming JSON-RPC frame (contains method/params/id)
      const body = await req.json();

      // Let the transport handle the JSON-RPC call.
      // Under the hood it routes to the right MCP handlers (tools/list, tools/call, resources/read...)
      await transport.handleRequest(nodeReq, nodeRes, body);

      nodeRes.on("close", () => {
        console.log("Request closed");
        // Close only the per-request transport; keep the singleton server alive
        transport.close();
      });

      // Convert the Node response back to a Fetch Response (Netlify expects Fetch Response)
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
  if (serverSingleton) return serverSingleton;

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
    //Resources
    PageRoutes(server, locale);
    ProductRoutes(server, locale);

    //Tools
    getAllResourcesTool(server, locale);
    getProductsTool(server, locale);
    getPagesTool(server, locale);
    orderProductTool(server, locale);
  }
  //Prompts
  checkMarkdown(server);
  optimizeDescription(server);
  projectDescription(server);
  compareProducts(server);
  searchProducts(server);

  serverSingleton = server;
  return serverSingleton;
}
