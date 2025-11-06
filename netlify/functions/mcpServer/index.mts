import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import type { Locale } from "@/i18n/config";
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
 * Module-scoped map of locale-specific MCP server instances
 * Ensures one server instance per locale exists across function invocations
 */
const serversByLocale: Map<string, McpServer> = new Map();

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
  const requestId = Math.random().toString(36).substr(2, 9);
  console.log(
    `[MCP Server] Incoming request [${requestId}] - Method: ${req.method}, URL: ${req.url}`
  );

  try {
    // Only accept POST requests for MCP protocol calls
    if (!isAllowedMethod(req.method)) {
      console.warn(`[MCP Server] Method not allowed [${requestId}] - ${req.method}`);
      return createMethodNotAllowedResponse();
    }

    // Extract locale from URL query params
    const url = new URL(req.url);
    const locale = url.searchParams.get("locale") || "en-GB";
    console.log(`[MCP Server] Request locale: ${locale} [${requestId}]`);

    // Process the MCP request through the protocol stack
    console.log(`[MCP Server] Processing MCP request [${requestId}]`);
    const response = await processMcpRequest(req, locale);
    console.log(`[MCP Server] Request completed successfully [${requestId}]`);
    return response;
  } catch (error) {
    console.error("[MCP Server] MCP Server Error:", error);
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
 * 2. Initializes or retrieves the MCP server instance for the locale
 * 3. Sets up the streaming transport layer
 * 4. Processes the JSON-RPC request
 * 5. Returns the response
 *
 * @param req - The incoming HTTP request
 * @param locale - The locale for this request
 * @returns Promise<Response> - The processed MCP response
 */
async function processMcpRequest(req: Request, locale: string): Promise<Response> {
  // Convert web Request to Node.js request/response for MCP SDK compatibility
  const { req: nodeRequest, res: nodeResponse } = toReqRes(req);

  // Get or initialize the MCP server instance for this locale
  const server = getOrCreateServer(locale);

  // Create streaming transport layer for HTTP-MCP bridge
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  // Connect server to transport layer
  await server.connect(transport);

  // Parse the incoming JSON-RPC request body
  const requestBody = await req.json();
  const method = requestBody?.method || "unknown";
  const id = requestBody?.id || "no-id";

  console.log(
    `[MCP Server] Processing JSON-RPC call - Method: ${method}, ID: ${id}, Request Body: ${JSON.stringify(requestBody)}`
  );

  // Process the JSON-RPC call through the transport layer
  // This routes to appropriate MCP handlers (tools, resources, prompts)
  await transport.handleRequest(nodeRequest, nodeResponse, requestBody);

  console.log(`[MCP Server] JSON-RPC call completed - Method: ${method}, ID: ${id}`);

  // Handle connection cleanup when request closes
  nodeResponse.on("close", () => {
    console.log("[MCP Server] MCP request connection closed");
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
 * Gets the existing MCP server instance for a locale or creates a new one
 *
 * This function implements per-locale server instances.
 * Each locale gets its own server with only the components for that locale,
 * ensuring clean separation and no duplicate items.
 *
 * @param locale - The locale to get/create server for
 * @returns McpServer - The MCP server instance for the locale
 */
function getOrCreateServer(locale: string): McpServer {
  // Validate and normalize locale
  const validLocale = (locale === "de-DE" ? "de-DE" : "en-GB") as Locale;

  // Return existing instance if already created for this locale
  const existingServer = serversByLocale.get(validLocale);
  if (existingServer) {
    console.log(`[MCP Server] Using existing server instance for locale: ${validLocale}`);
    return existingServer;
  }

  console.log(
    `[MCP Server] Creating new server instance for locale: ${validLocale} - ${SERVER_NAME} v${SERVER_VERSION}`
  );

  // Create new MCP server instance with configuration
  const server = new McpServer(
    {
      name: `${SERVER_NAME}-${validLocale}`,
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

  console.log(`[MCP Server] Registering components for locale: ${validLocale}`);
  registerLocaleSpecificComponents(server, validLocale);
  console.log(`[MCP Server] Server initialization completed for locale: ${validLocale}`);

  serversByLocale.set(validLocale, server);
  return server;
}

/**
 * Registers MCP components for a specific locale (resources, tools, and prompts)
 *
 * This function registers:
 * - Page and product resources
 * - Content retrieval and manipulation tools
 * - Localized prompt templates
 *
 * @param server - The MCP server instance to register components on
 * @param locale - The locale to register components for
 */
function registerLocaleSpecificComponents(server: McpServer, locale: Locale): void {
  // Register content resources
  PageRoutes(server, locale);
  ProductRoutes(server, locale);

  // Register interactive tools
  getAllResourcesTool(server, locale);
  getProductsTool(server, locale);
  getPagesTool(server, locale);
  orderProductTool(server, locale);

  // Register prompt templates
  checkMarkdown(server, locale);
  optimizeDescription(server, locale);
  projectDescription(server, locale);
  compareProducts(server, locale);
  searchProducts(server, locale);
}
