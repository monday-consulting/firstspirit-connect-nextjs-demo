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
import type {
  FirstSpiritInlinePageUnion8F4Ef8C0,
  FirstSpiritInlineSectionUnion638Da777,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritSection,
  Maybe,
} from "@/gql/generated/graphql";
import { templates } from "@/gql/documents/mcp";

// ====================================================================
// NETLIFY FUNCTION HANDLER
// ====================================================================

/**
 * Main Netlify function handler for MCP server
 * Handles incoming HTTP requests and delegates to MCP server
 */
export default async (req: Request): Promise<Response> => {
  try {
    // Only accept POST requests
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    // Convert web request to Node.js format
    const { req: nodeReq, res: nodeRes } = toReqRes(req);

    // Create and configure MCP server
    const server = createMcpServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });

    // Connect server to transport
    await server.connect(transport);

    // Process the request
    const body = await req.json();
    await transport.handleRequest(nodeReq, nodeRes, body);

    // Clean up on connection close
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
// MCP SERVER CONFIGURATION
// ====================================================================

/**
 * Creates and configures the MCP server with resource handlers
 * Registers resource handlers for all supported locales
 */
function createMcpServer(): McpServer {
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

  // Register resource handlers for each locale
  for (const locale of locales) {
    registerLocaleResource(server, locale);
  }

  return server;
}

/**
 * Registers a resource handler for a specific locale
 * Creates resource templates for page content retrieval
 */
function registerLocaleResource(server: McpServer, locale: Locale): void {
  server.resource(
    `Get Page ${locale}`,
    new ResourceTemplate(`${process.env.MCP_RESOURCE_URL}${locale}/{route}/`, {
      // List all available resources for this locale
      list: async (): Promise<ListResourcesResult> => {
        try {
          const endpoints = await getNavigationEndpoints(locale);

          const resources = endpoints.map((endpoint) => {
            const flatRoute = endpoint.replace(/\//g, "--");
            return {
              name: `${endpoint}`,
              uri: `${process.env.MCP_RESOURCE_URL}${locale}/${flatRoute}/`,
              description: `Page content for ${locale}/${endpoint}`,
            };
          });

          return { resources };
        } catch (error) {
          console.error(`Error listing resources for locale ${locale}:`, error);
          return { resources: [] };
        }
      },

      // Auto-complete functionality for route parameters
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

    // Resource handler - returns markdown content for requested page
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

/**
 * Retrieves and processes page content for a specific route and locale
 * Converts FirstSpirit page data to markdown format
 */
async function getPageResource(
  uri: URL,
  locale: Locale,
  route: string | string[]
): Promise<ReadResourceResult> {
  // Normalize route parameter
  let routeString: string;
  if (Array.isArray(route)) {
    routeString = route.join("/");
  } else {
    routeString = route;
  }

  if (!routeString) {
    throw new Error("Route parameter is required");
  }

  // Convert flat route back to original format
  const originalRoute = routeString.replace(/--/g, "/");
  console.log(`Processing route: ${routeString} -> ${originalRoute} for locale: ${locale}`);

  // Get page content and convert to markdown
  const pageContent = await turnPageContentIntoMarkdown(locale, originalRoute);

  return {
    contents: [
      {
        uri: `${process.env.MCP_RESOURCE_URL}${locale}/${routeString}/`,
        text: pageContent,
        mimeType: "text/markdown",
      },
    ],
  };
}

/**
 * Creates a standardized error response for failed requests
 */
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
// NAVIGATION PROCESSING
// ====================================================================

/**
 * Retrieves all available navigation endpoints for a given locale
 * Extracts routes from the navigation structure
 */
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

/**
 * Recursively extracts routes from navigation structure
 * Handles nested navigation items up to 3 levels deep
 */
function extractRoutesFromStructure(structure: any): string[] {
  const routes: string[] = [];

  if (!structure || !Array.isArray(structure)) {
    return routes;
  }

  /**
   * Processes a single navigation item and its children
   * Extracts seoRoute and processes nested structureChildren
   */
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

    // Recursively process children
    if (item?.structureChildren && Array.isArray(item.structureChildren)) {
      for (const child of item.structureChildren) {
        processNavigationItem(child);
      }
    }
  };

  // Process navigation structure (3 levels: A -> B -> C)
  for (const layerA of structure) {
    if (layerA?.navigationItem) {
      processNavigationItem(layerA.navigationItem);

      // Process layer B
      if (layerA.structureChildren && Array.isArray(layerA.structureChildren)) {
        for (const layerB of layerA.structureChildren) {
          if (layerB?.navigationItem) {
            processNavigationItem(layerB.navigationItem);

            // Process layer C
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

  // Return unique routes only
  return [...new Set(routes)];
}

// ====================================================================
// CONTENT PROCESSING & MARKDOWN GENERATION
// ====================================================================

/**
 * Retrieves page content from FirstSpirit by route and locale
 * Ensures proper route formatting with leading and trailing slashes
 */
async function getPageContent(locale: Locale, route: string): Promise<FirstSpiritPage> {
  if (!route) {
    throw new Error("Route is required");
  }

  // Normalize route format
  const validRoute =
    route.startsWith("/") && route.endsWith("/") ? route : `/${route.replace(/^\/|\/$/g, "")}/`;

  return (await getPageContentByRoute(locale, validRoute)) as FirstSpiritPage;
}

/**
 * Main function to convert FirstSpirit page content to markdown
 * Orchestrates the entire conversion process
 */
async function turnPageContentIntoMarkdown(locale: Locale, route: string): Promise<string> {
  const pageContent: FirstSpiritPage = await getPageContent(locale, route);
  return processFirstSpiritPage(pageContent.data, pageContent);
}

/**
 * Processes a FirstSpirit page and converts it to markdown
 * Handles different page types and their content structure
 */
function processFirstSpiritPage(
  pageData: FirstSpiritInlinePageUnion8F4Ef8C0,
  pageContent: Maybe<FirstSpiritPage>
): string {
  const pageMarkdown: string[] = [];

  // Process page header based on type
  if (pageData.__typename === "FirstSpiritStandard") {
    pageMarkdown.push(templates.standardPage(pageData));
  }

  // Process page body content
  if (pageContent?.pageBodies) {
    pageMarkdown.push(processFirstSpiritPageBodies(pageContent.pageBodies));
  }

  return pageMarkdown.join("");
}

/**
 * Processes page body sections and converts them to markdown
 * Handles different section types including references and datasets
 */
function processFirstSpiritPageBodies(pageBodies: Maybe<FirstSpiritPageBody>[]): string {
  const pageBodyMarkdown: string[] = [];

  for (const pageBody of pageBodies) {
    for (const child of pageBody?.children || []) {
      // Handle regular sections
      if (child?.__typename === "FirstSpiritSection") {
        pageBodyMarkdown.push(sectionProcessing(child));
      }

      // Handle content references (nested pages)
      else if (child.__typename === "FirstSpiritContent2Section") {
        // Handle content references (nested pages)
        if (child.fsReferences) {
          for (const reference of child.fsReferences) {
            // TODO: get Pages in FS Reference
            // pageBodyMarkdown.push(processFirstSpiritPage(reference?.ref?.data, reference?.ref));
          }
        }
      }

      // Handle datasets
      else if (child.__typename === "FirstSpiritDataset") {
        // TODO: Implement dataset processing
      }
    }
  }

  return pageBodyMarkdown.join("");
}

/**
 * Processes different types of FirstSpirit sections
 * Uses template functions to generate appropriate markdown
 */
function processFirstSpiritInlineSectionUnion(
  section: FirstSpiritInlineSectionUnion638Da777
): string {
  // TODO: Section Types abbilden --> es wäre schon praktisch, wenn sich das generieren lassen würde

  switch (section.__typename) {
    case "FirstSpiritTeaser":
      return templates.teaser(section);

    case "FirstSpiritAccordion":
      // Process nested accordion items
      if (section.stAccordion) {
        for (const accordionItem of section.stAccordion) {
          if (accordionItem) {
            return sectionProcessing(accordionItem);
          }
        }
      }
      return templates.accordion(section);

    case "FirstSpiritSmartlivingNews":
      // Process nested news content
      if (section.ttContent) {
        for (const contentItem of section.ttContent) {
          if (contentItem) {
            return sectionProcessing(contentItem);
          }
        }
      }
      return templates.smartLivingNews(section);

    case "FirstSpiritSteps":
      // Process nested step items
      if (section.stSteps) {
        for (const stepItem of section.stSteps) {
          if (stepItem) {
            return sectionProcessing(stepItem);
          }
        }
      }
      return templates.steps(section);

    default:
      // Return empty string for unknown section types
      return "";
  }
}

/**
 * Processes a FirstSpirit section and its nested subsections
 * Handles both section data and nested section hierarchies
 */
function sectionProcessing(section: FirstSpiritSection): string {
  const sectionMarkdown: string[] = [];

  // Process section data
  if (section.data) {
    sectionMarkdown.push(processFirstSpiritInlineSectionUnion(section.data));
  }

  // Process nested subsections
  if (section.section) {
    for (const subsection of section.section) {
      if (subsection) {
        sectionMarkdown.push(sectionProcessing(subsection));
      }
    }
  }

  return sectionMarkdown.join("");
}
