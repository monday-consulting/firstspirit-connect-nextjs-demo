import type { Locale } from "@/i18n/config";
import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ListResourcesResult } from "@modelcontextprotocol/sdk/types.js";
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
        const endpoints = await endpointsPromise;
        return {
          resources: endpoints
            .filter((e) => e.content)
            .map((e) => ({
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
      const endpoints = await endpointsPromise;
      const match = endpoints.find((e) => e.uri === decodedRoute);
      if (!match || !match.content) {
        throw new Error(`Page not found for route: ${decodedRoute}`);
      }

      return {
        contents: [
          {
            uri: `fs://page/${locale}/${route}/`,
            text: match.content,
            mimeType: "text/markdown",
          },
        ],
      };
    }
  );
};
