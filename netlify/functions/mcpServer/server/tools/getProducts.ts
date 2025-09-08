import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Locale } from "@/i18n/config.js";
import { fetchProductEndpoints } from "../helper/createEndpointFetcher";

export const getProductsTool = (server: McpServer, locale: Locale) => {
  server.tool(
    `get-all-products-${locale}`,
    "Get all products Name-Uri for the given Locale and returned as List",
    {
      title: "Get all products",
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
    async () => {
      const endpoints = await fetchProductEndpoints(locale);

      return {
        content: [
          {
            type: "text",
            text: endpoints.map((p) => `- ${p.name}: ${p.uri}`).join("\n"),
          },
        ],
      };
    }
  );
};
