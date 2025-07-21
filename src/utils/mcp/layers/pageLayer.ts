import type { Locale } from "@/i18n/config";
import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getPageEndpoints } from "../services/pageService";
import type { ListResourcesResult } from "@modelcontextprotocol/sdk/types.js";
import { decodeRoute, encodeRoute } from "../firstSpirit/extractRoutes";
import { createEndpointFetcher } from "../helper/createEndpointFetcher";

export const PageRoutes = (server: McpServer, locale: Locale) => {
  const getEndpoints = createEndpointFetcher(locale, getPageEndpoints);

  server.resource(
    `page-template-${locale}`,
    new ResourceTemplate(`fs://page/${locale}/{route}/`, {
      list: async (): Promise<ListResourcesResult> => {
        const endpoints = await getEndpoints();
        return {
          resources: endpoints
            .filter((e) => e.content)
            .map((e) => ({
              name: `Page ${locale} ${e.name}`,
              uri: `fs://page/${locale}/${encodeRoute(e.uri)}/`,
              description: `Page route for ${locale}/${e.name}`,
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
