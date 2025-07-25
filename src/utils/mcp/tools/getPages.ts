import type { Locale } from "@/i18n/config.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fetchPageEndpoints } from "../helper/createEndpointFetcher";

export const getPagesTool = (server: McpServer, locale: Locale) => {
  server.tool(
    `get-all-pages-${locale}`,
    "Get all pages Name-Uri for the given Locale and returned as List",
    {
      title: "Get all pages",
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
    async () => {
      const endpoints = await fetchPageEndpoints(locale);

      return {
        content: [
          {
            type: "text",
            text: endpoints.map((p) => `- ${p.name}`).join("\n"),
          },
        ],
      };
    }
  );
};
