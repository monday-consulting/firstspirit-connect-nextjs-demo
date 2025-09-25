import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
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

// Constants
const SERVER_NAME = "firstspirit-connect-mcp-server";
const SERVER_VERSION = "1.0.0";
const JSON_RPC_INTERNAL_ERROR_CODE = -32603;
const ALLOWED_METHODS = ["POST"] as const;

/**
 * Module-scoped singleton MCP server instance
 * Ensures only one server instance exists across function invocations
 */
let serverSingleton: McpServer | null = null;

/**
 * Main Netlify serverless function handler for MCP requests
 *
 * This function serves as the entry point for all MCP protocol interactions.
 * It handles HTTP requests, converts them to MCP protocol calls, and returns
 * appropriate responses.
 *
 * @param req - The incoming HTTP request
 * @returns Promise<Response> - The HTTP response containing MCP protocol data
 */
export default async function handleMcpRequest(req: Request): Promise<Response> {
  try {
    // Only accept POST requests for MCP protocol calls
    if (!isAllowedMethod(req.method)) {
      return createMethodNotAllowedResponse();
    }

    // Process the MCP request through the protocol stack
    return await processMcpRequest(req);
  } catch (error) {
    console.error("MCP Server Error:", error);
    return createInternalErrorResponse(error);
  }
}

/**
 * Checks if the HTTP method is allowed for MCP requests
 *
 * @param method - The HTTP method to check
 * @returns boolean - True if the method is allowed
 */
function isAllowedMethod(method: string): boolean {
  return ALLOWED_METHODS.includes(method as (typeof ALLOWED_METHODS)[number]);
}

/**
 * Processes an incoming MCP request through the protocol stack
 *
 * This function handles the complete MCP request lifecycle:
 * 1. Converts web Request to Node.js request/response objects
 * 2. Initializes or retrieves the MCP server instance
 * 3. Sets up the streaming transport layer
 * 4. Processes the JSON-RPC request
 * 5. Returns the response
 *
 * @param req - The incoming HTTP request
 * @returns Promise<Response> - The processed MCP response
 */
async function processMcpRequest(req: Request): Promise<Response> {
  // Convert web Request to Node.js request/response for MCP SDK compatibility
  const { req: nodeRequest, res: nodeResponse } = toReqRes(req);

  // Get or initialize the MCP server instance
  const server = getOrCreateServer();

  // Create streaming transport layer for HTTP-MCP bridge
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  // Connect server to transport layer
  await server.connect(transport);

  // Parse the incoming JSON-RPC request body
  const requestBody = await req.json();

  // Process the JSON-RPC call through the transport layer
  // This routes to appropriate MCP handlers (tools, resources, prompts)
  await transport.handleRequest(nodeRequest, nodeResponse, requestBody);

  // Handle connection cleanup when request closes
  nodeResponse.on("close", () => {
    console.log("MCP request connection closed");
    transport.close();
  });

  // Convert Node.js response back to web Response for Netlify
  return toFetchResponse(nodeResponse);
}

/**
 * Creates a "Method Not Allowed" HTTP response
 *
 * @returns Response - 405 Method Not Allowed response
 */
function createMethodNotAllowedResponse(): Response {
  return new Response(`Method not allowed. Allowed methods: ${ALLOWED_METHODS.join(", ")}`, {
    status: 405,
    headers: {
      Allow: ALLOWED_METHODS.join(", "),
      "Content-Type": "text/plain",
    },
  });
}

/**
 * Creates an internal server error response for MCP protocol
 *
 * @param error - The error that occurred
 * @returns Response - 500 Internal Server Error response with MCP error format
 */
function createInternalErrorResponse(error: unknown): Response {
  const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

  const mcpError = {
    jsonrpc: "2.0",
    error: {
      code: JSON_RPC_INTERNAL_ERROR_CODE,
      message: `Internal server error: ${errorMessage}`,
    },
    id: null,
  };

  return new Response(JSON.stringify(mcpError), {
    status: 500,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * Gets the existing MCP server instance or creates a new one
 *
 * This function implements the singleton pattern for the MCP server.
 * The server is initialized once and reused across function invocations
 * for better performance and resource management.
 *
 * @returns McpServer - The MCP server instance
 */
function getOrCreateServer(): McpServer {
  // Return existing instance if already created
  if (serverSingleton) {
    return serverSingleton;
  }

  // Create new MCP server instance with configuration
  const server = new McpServer(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
    },
    {
      capabilities: {
        resources: {
          subscribe: false, // No real-time subscriptions
          listChanged: false, // No change notifications
        },
      },
    }
  );

  registerLocaleSpecificComponents(server);
  registerGlobalComponents(server);

  serverSingleton = server;
  return serverSingleton;
}

/**
 * Registers locale-specific MCP components (resources and tools)
 *
 * For each configured locale, this function registers:
 * - Page and product resources
 * - Content retrieval and manipulation tools
 *
 * @param server - The MCP server instance to register components on
 */
function registerLocaleSpecificComponents(server: McpServer): void {
  for (const locale of locales) {
    // Register content
    PageRoutes(server, locale);
    ProductRoutes(server, locale);

    // Register interactive tools
    getAllResourcesTool(server, locale);
    getProductsTool(server, locale);
    getPagesTool(server, locale);
    orderProductTool(server, locale);
  }
}

/**
 * Registers global MCP components (prompts)
 *
 * These prompts are available regardless of locale and provide
 * AI assistance for content optimization and analysis tasks.
 *
 * @param server - The MCP server instance to register components on
 */
function registerGlobalComponents(server: McpServer): void {
  // Register prompt templates
  checkMarkdown(server);
  optimizeDescription(server);
  projectDescription(server);
  compareProducts(server);
  searchProducts(server);
}
