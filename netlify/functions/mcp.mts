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
  FirstSpiritNavigationItem,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritSection,
  FirstSpiritSmartlivingProduct,
  FirstSpiritStructureItem,
  Maybe,
} from "@/gql/generated/graphql";
import { templates } from "@/gql/documents/mcp";
import { getAllProducts, getProductDetail } from "@/gql/documents/products";

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
  } catch (error) {
    console.error("MCP error:", error);
    return createErrorResponse(error as Error);
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
  server.resource(
    `Get Product ${locale}`,
    new ResourceTemplate(`${process.env.MCP_RESOURCE_URL}${locale}/dataset/{slug}/`, {
      list: async (): Promise<ListResourcesResult> => {
        const productEndpoints = await getProductEndpoints(locale);
        const resources = productEndpoints.map((slug) => ({
          name: slug.slug.replace(/_/g, "-"),
          uri: `${process.env.MCP_RESOURCE_URL}${locale}/dataset/${slug.slug.replace(/_/g, "-")}/`,
          description: `Product detail page: ${slug.slug}`,
        }));
        return { resources };
      },

      // Auto-complete functionality for route parameters
      complete: {
        slug: async (input: string) => {
          const productEndpoints = await getProductEndpoints(locale);
          const flatRoutes = productEndpoints.map((route) =>
            route.slug.replace(/\//g, "--").replace(/_/g, "-")
          );
          return flatRoutes.filter((s) => s.toLowerCase().includes(input.toLowerCase()));
        },
      },
    }),

    // Resource handler - returns markdown content for requested product
    async (uri, { slug }) => {
      try {
        let decodedSlug = "";

        if (typeof slug === "string") {
          decodedSlug = slug.replace(/--/g, "/").replace(/-(?=[^/-]*$)/, "_");
        } else {
          throw new Error("Expected slug to be a string");
        }

        const productEndpoints = await getProductEndpoints(locale);
        const product = productEndpoints.find((p) => p.slug === decodedSlug);

        if (!product?.fsId) {
          throw new Error("Product fsId is undefined");
        }

        const content = await turnProductContentIntoMarkdown(locale, product.fsId);

        return {
          contents: [
            {
              uri: `${process.env.MCP_RESOURCE_URL}${locale}/dataset/${slug}/`,
              mimeType: "text/markdown",
              text: `${content}`,
            },
          ],
        };
      } catch (error) {
        console.error("Product handler failed:", error);
        throw new Error(`Product not found: ${slug}`);
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

  const safeRoute = decodeURIComponent(routeString || "").replace(/\.\./g, ""); // Decode and sanitize route input
  return {
    contents: [
      {
        uri: `${process.env.MCP_RESOURCE_URL}${locale}/${safeRoute}/`,
        mimeType: "text/markdown",
        text: pageContent,
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
 * Retrieves all available navigation and product endpoints for a given locale
 * Extracts routes from the navigation and product structure
 */
async function getNavigationEndpoints(locale: Locale): Promise<string[]> {
  try {
    const structure = await getNavigationStructure(locale);
    const routes = extractRoutesFromStructure(structure as FirstSpiritStructureItem[]);
    return routes;
  } catch (error) {
    console.error(`Error getting navigation for locale ${locale}:`, error);
    return [];
  }
}

async function getProductEndpoints(locale: Locale): Promise<{ slug: string; fsId: string }[]> {
  try {
    const structure = await getAllProducts(locale);

    return extractRoutesFromProducts(structure);
  } catch (error) {
    console.error(`Error getting navigation for locale ${locale}:`, error);
    return [];
  }
}

/**
 * Recursively extracts routes from navigation structure
 * Handles nested navigation items up to 3 levels deep
 */
function extractRoutesFromStructure(structure: FirstSpiritStructureItem[]): string[] {
  const routes: string[] = [];
  if (!structure || !Array.isArray(structure)) {
    return routes;
  }

  /**
   * Processes a single navigation item and its children
   * Extracts seoRoute and processes nested structureChildren
   */
  const processNavigationItem = (item: FirstSpiritNavigationItem | FirstSpiritStructureItem) => {
    if ("seoRoute" in item && item.seoRoute) {
      const cleanRoute = stripNavigationFiles(item.seoRoute);
      if (cleanRoute) {
        const normalizedRoute = cleanRoute.replace(/^\/|\/$/g, "");
        if (normalizedRoute) {
          routes.push(normalizedRoute);
        }
      }
    }

    // Recursively process children
    if ("structureChildren" in item && Array.isArray(item.structureChildren)) {
      for (const child of item.structureChildren) {
        if (child) {
          processNavigationItem(child);
        }
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

function extractRoutesFromProducts(
  structure: { route: string; fsId: string }[]
): { slug: string; fsId: string }[] {
  const routes: { slug: string; fsId: string }[] = [];

  for (const item of structure) {
    if (item?.route && typeof item.route === "string") {
      const cleanRoute = item.route
        .replace(/^\/|\/$/g, "") // Trim leading/trailing slashes
        .replace(/\.html$/, ""); // Remove .html extension

      if (cleanRoute && item.fsId) {
        routes.push({
          slug: cleanRoute.replace(/^(products|produkte)\//, ""),
          fsId: item.fsId,
        });
      }
    }
  }

  return routes;
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

  // Decode uri to get umlaut
  const decodedRoute = decodeURIComponent(route);

  // Normalize route format
  const validRoute =
    decodedRoute.startsWith("/") && decodedRoute.endsWith("/")
      ? decodedRoute
      : `/${decodedRoute.replace(/^\/|\/$/g, "")}/`;

  return (await getPageContentByRoute(locale, validRoute)) as FirstSpiritPage;
}

/**
 * Main function to convert FirstSpirit page and product content to markdown
 * Orchestrates the entire conversion process
 */
async function turnPageContentIntoMarkdown(locale: Locale, route: string): Promise<string> {
  const pageContent: FirstSpiritPage = await getPageContent(locale, route);
  return processFirstSpiritPage(pageContent.data, pageContent);
}

async function turnProductContentIntoMarkdown(locale: Locale, id: string): Promise<string> {
  // @ts-expect-error
  const productDetail: FirstSpiritSmartlivingProduct = await getProductDetail(locale, id);
  return processFirstSpiritInlineSectionUnion(productDetail);
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
  switch (section.__typename) {
    case "FirstSpiritTeaser":
      return templates.teaser(section);

    case "FirstSpiritStage":
      return templates.stage(section);

    case "FirstSpiritTextImage":
      return templates.textImage(section);

    case "FirstSpiritProductCategoryTeaser":
      return templates.productCategoryTeaser(section);

    case "FirstSpiritAccordion":
      return templates.accordion(section);

    case "FirstSpiritSteps":
      return templates.steps(section);

    case "FirstSpiritFeatures":
      return templates.features(section);

    case "FirstSpiritGoogleMaps":
      return templates.googleMaps(section);

    case "FirstSpiritNewsOverview":
      return templates.newsOverview(section);

    case "FirstSpiritSmartlivingNews":
      return templates.smartLivingNews(section);

    case "FirstSpiritSmartlivingLocation":
      return templates.smartLivingLocation(section);

    case "FirstSpiritTable":
      return templates.table(section);

    case "FirstSpiritSmartlivingProduct":
      return templates.smartLivingProduct(section);
    default:
      console.warn("⚠️ Unhandled section type:", section.__typename);
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
