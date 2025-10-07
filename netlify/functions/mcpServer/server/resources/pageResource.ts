import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ListResourcesResult } from "@modelcontextprotocol/sdk/types.js";
import type { Locale } from "@/i18n/config";
import { decodeRoute, encodeRoute } from "../firstSpirit/extractStructureRoutes";
import { fetchPageEndpoints } from "../helper/createEndpointFetcher";

/**
 * Registers a dynamic page route template for a given locale in the MCP server.
 *
 * This function:
 * 1. Fetches all available page endpoints for the provided locale.
 * 2. Creates a resource template under the URI pattern `fs://page/{locale}/{route}/`.
 * 3. Allows the MCP editor to list available page routes (via `list`) and perform auto-complete (via `complete.route`).
 * 4. Resolves a requested route to its content and returns it as Markdown.
 */
export const PageRoutes = (server: McpServer, locale: Locale) => {
  const endpointsPromise = fetchPageEndpoints(locale);

  server.resource(
    `page-template-${locale}`,
    new ResourceTemplate(`fs://page/${locale}/{route}/`, {
      list: async (): Promise<ListResourcesResult> => {
        console.log(`[MCP Server] Listing page resources for locale: ${locale}`);
        const endpoints = await endpointsPromise;
        const availablePages = endpoints.filter((e) => e.content);

        console.log(
          `[MCP Server] Found ${availablePages.length} available pages for locale: ${locale}`
        );

        return {
          resources: availablePages.map((e) => ({
            name: `Page ${locale} ${e.name}`,
            uri: `fs://page/${locale}/${encodeRoute(e.uri)}/`,
            description: e.description,
            mimeType: "text/markdown",
          })),
        };
      },
      complete: {
        route: async (input: string) => {
          const endpoints = await endpointsPromise;

          return endpoints
            .map((e) => encodeRoute(e.uri))
            .filter((route) => route.toLowerCase().includes(input.toLowerCase()));
        },
      },
    }),
    async (_uri, { route }) => {
      const decodedRoute = decodeURIComponent(decodeRoute(typeof route === "string" ? route : ""));
      console.log(
        `[MCP Server] Retrieving page content for route: ${decodedRoute} (locale: ${locale})`
      );

      const endpoints = await endpointsPromise;
      const match = endpoints.find((e) => e.uri === decodedRoute);

      if (!match || !match.content) {
        console.error(`[MCP Server] Page not found for route: ${decodedRoute} (locale: ${locale})`);
        throw new Error(`[MCP Server] Page not found for route: ${decodedRoute}`);
      }

      const contentLength = match.content.length;
      console.log(
        `[MCP Server] Successfully retrieved page content for route: ${decodedRoute} (${contentLength} chars)`
      );

      return {
        contents: [
          {
            uri: `${route}/${locale}/`,
            text: match.content,
            mimeType: "text/markdown",
          },
        ],
      };
    }
  );
};
