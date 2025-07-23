import type { Locale } from "@/i18n/config.js";

import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ListResourcesResult } from "@modelcontextprotocol/sdk/types.js";
import { decodeRoute, encodeRoute } from "../firstSpirit/extractStructureRoutes";
import { fetchProductEndpoints } from "../helper/createEndpointFetcher";

/**
 * Registers a dynamic product route template for a given locale in the MCP server.
 *
 * This function:
 * 1. Fetches all available product endpoints for the provided locale.
 * 2. Creates a resource template under the URI pattern `fs://product/{locale}/{route}/`.
 * 3. Allows the MCP editor to list available product routes (via `list`) and perform auto-complete (via `complete.route`).
 * 4. Resolves a requested route to its content and returns it as Markdown.
 */
export const ProductRoutes = (server: McpServer, locale: Locale) => {
  const endpointsPromise = fetchProductEndpoints(locale);

  server.resource(
    `product-template-${locale}`,
    new ResourceTemplate(`fs://product/${locale}/{route}/`, {
      list: async (): Promise<ListResourcesResult> => {
        const endpoints = await endpointsPromise;
        return {
          resources: endpoints
            .filter((e) => e.content)
            .map((e) => ({
              name: `Product ${locale} ${e.name}`,
              uri: `fs://product/${locale}/${encodeRoute(e.uri)}/`,
              description: e.description,
              mimeType: "text/plain",
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
        throw new Error(`Product not found: ${decodedRoute}`);
      }

      return {
        contents: [
          {
            uri: `fs://product/${locale}/${route}/`,
            text: match.content,
            mimeType: "text/markdown",
          },
        ],
      };
    }
  );
};
