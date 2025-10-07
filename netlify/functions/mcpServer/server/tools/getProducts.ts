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
      console.log(`[MCP Server] Executing getProducts tool for locale: ${locale}`);
      const startTime = performance.now();

      const endpoints = await fetchProductEndpoints(locale);

      const duration = Math.round(performance.now() - startTime);
      console.log(
        `[MCP Server] getProducts completed in ${duration}ms - Found ${endpoints.length} products for locale: ${locale}`
      );

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
