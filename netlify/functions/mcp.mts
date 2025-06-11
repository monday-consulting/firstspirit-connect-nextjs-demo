import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { toFetchResponse, toReqRes } from "fetch-to-node";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type {
  ReadResourceResult,
  JSONRPCError,
  ListResourcesResult,
} from "@modelcontextprotocol/sdk/types.js";
import { getNavigationStructure } from "@/gql/documents/navigation";
import type { Locale } from "next-intl";
import { stripNavigationFiles } from "@/utils/links";
import { locales } from "@/i18n/config";
import { getPageContentByRoute } from "@/gql/documents/pageContent";

// ====================================================================
// NETLIFY HANDLER - Entry Point
// ====================================================================

export default async (req: Request): Promise<Response> => {
  try {
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const { req: nodeReq, res: nodeRes } = toReqRes(req);
    const server = createMcpServer();

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
  } catch (error: any) {
    console.error("MCP error:", error);
    return createErrorResponse(error);
  }
};

export const config = {
  path: "/mcp",
};

// ====================================================================
// MCP SERVER SETUP
// ====================================================================

function createMcpServer(): McpServer {
  const server = new McpServer(
    {
      name: "acme-devtool-server",
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
    registerLocaleResource(server, locale);
  }

  return server;
}

function registerLocaleResource(server: McpServer, locale: Locale): void {
  server.resource(
    `Get Page ${locale}`,
    new ResourceTemplate(`fs://${locale}/{route}/`, {
      list: async (): Promise<ListResourcesResult> => {
        try {
          const endpoints = await getNavigationEndpoints(locale);

          const resources = endpoints.map((endpoint) => {
            const flatRoute = endpoint.replace(/\//g, "--");

            return {
              name: `Page ${locale} ${endpoint}`,
              uri: `fs://${locale}/${flatRoute}/`,
              description: `Page content for ${locale}/${endpoint}`,
            };
          });

          return { resources };
        } catch (error) {
          console.error(`Error listing resources for locale ${locale}:`, error);
          return { resources: [] };
        }
      },
      complete: {
        route: async (routeString: string) => {
          try {
            const routes = await getNavigationEndpoints(locale);
            const flatRoutes = routes.map((route) => route.replace(/\//g, "--"));

            return flatRoutes.filter((route) =>
              route?.toLowerCase().includes(routeString.toLowerCase())
            );
          } catch (error) {
            console.error(`Error completing routes for locale ${locale}:`, error);
            return [];
          }
        },
      },
    }),
    async (uri, { route }) => {
      try {
        return await getPageResource(uri, locale, route);
      } catch (error) {
        console.error("Error getting page resource:", error);
        throw new Error(`Failed to get resource for ${uri}: ${error}`);
      }
    }
  );
}

async function getPageResource(
  uri: URL,
  locale: Locale,
  route: string | string[]
): Promise<ReadResourceResult> {
  let routeString: string;

  if (Array.isArray(route)) {
    routeString = route.join("/");
  } else {
    routeString = route;
  }

  if (!routeString) {
    throw new Error("Route parameter is required");
  }

  const originalRoute = routeString.replace(/--/g, "/");

  console.log(`Processing route: ${routeString} -> ${originalRoute} for locale: ${locale}`);

  const pageContent = await getPageContent(locale, originalRoute);

  return {
    contents: [
      {
        uri: `fs://${locale}/${routeString}/`,
        text: JSON.stringify(pageContent, null, 2),
        mimeType: "application/json",
      },
    ],
  };
}

function createErrorResponse(error: Error): Response {
  const errorMessage = error instanceof Error ? error.message : "Internal server error";

  return new Response(
    JSON.stringify({
      jsonrpc: "2.0",
      error: {
        code: -32603,
        message: errorMessage,
      },
      id: "",
    } satisfies JSONRPCError),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

// ====================================================================
// DATA PROCESSING - Navigation & Content
// ====================================================================

async function getNavigationEndpoints(locale: Locale): Promise<string[]> {
  try {
    const structure = await getNavigationStructure(locale);
    const routes = extractRoutesFromStructure(structure);
    return routes;
  } catch (error) {
    console.error(`Error getting navigation for locale ${locale}:`, error);
    return [];
  }
}

function extractRoutesFromStructure(structure: any): string[] {
  const routes: string[] = [];

  if (!structure || !Array.isArray(structure)) {
    return routes;
  }

  const processNavigationItem = (item: any) => {
    if (item?.seoRoute) {
      const cleanRoute = stripNavigationFiles(item.seoRoute);
      if (cleanRoute) {
        const normalizedRoute = cleanRoute.replace(/^\/|\/$/g, "");
        if (normalizedRoute) {
          routes.push(normalizedRoute);
        }
      }
    }
    if (item?.structureChildren && Array.isArray(item.structureChildren)) {
      for (const child of item.structureChildren) {
        processNavigationItem(child);
      }
    }
  };

  for (const layerA of structure) {
    if (layerA?.navigationItem) {
      processNavigationItem(layerA.navigationItem);
      if (layerA.structureChildren && Array.isArray(layerA.structureChildren)) {
        for (const layerB of layerA.structureChildren) {
          if (layerB?.navigationItem) {
            processNavigationItem(layerB.navigationItem);
            if (layerB.structureChildren && Array.isArray(layerB.structureChildren)) {
              for (const layerC of layerB.structureChildren) {
                if (layerC?.navigationItem) {
                  processNavigationItem(layerC.navigationItem);
                }
              }
            }
          }
        }
      }
    }
  }

  return [...new Set(routes)];
}

async function getPageContent(locale: Locale, route: string) {
  if (!route) {
    throw new Error("Route is required");
  }
  const validRoute =
    route.startsWith("/") && route.endsWith("/") ? route : `/${route.replace(/^\/|\/$/g, "")}/`;

  return await getPageContentByRoute(locale, validRoute);
}
