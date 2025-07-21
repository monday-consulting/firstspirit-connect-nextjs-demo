import type { Locale } from "@/i18n/config.js";
import { getProductEndpoints } from "../services/productService";
import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ListResourcesResult } from "@modelcontextprotocol/sdk/types.js";
import { decodeRoute, encodeRoute } from "../firstSpirit/extractRoutes";
import { createEndpointFetcher } from "../helper/createEndpointFetcher";

export const ProductRoutes = (server: McpServer, locale: Locale) => {
  const getEndpoints = createEndpointFetcher(locale, getProductEndpoints);

  server.resource(
    `product-template-${locale}`,
    new ResourceTemplate(`fs://product/${locale}/{route}/`, {
      list: async (): Promise<ListResourcesResult> => {
        const endpoints = await getEndpoints();
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
          const endpoints = await getEndpoints();

          return endpoints
            .map((e) => encodeRoute(e.uri))
            .filter((route) => route.toLowerCase().includes(input.toLowerCase()));
        },
      },
    }),
    async (_uri, { route }) => {
      const decodedRoute = decodeURIComponent(decodeRoute(typeof route === "string" ? route : ""));
      const endpoints = await getEndpoints();
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
