import type { Locale } from "@/i18n/config.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { fetchPageEndpoints, fetchProductEndpoints } from "../helper/createEndpointFetcher";

export const getAllResourcesTool = (server: McpServer, locale: Locale) => {
  server.tool(
    `get-all-resources-${locale}`,
    "Get all resources for the given Locale and returned as List",
    {
      title: "Get all resources",
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
      readOnlyHint: true,
    },
    async () => {
      const pageEndpoints = await fetchPageEndpoints(locale);
      const productEndpoints = await fetchProductEndpoints(locale);

      const combined = [
        ...pageEndpoints.map((p) => ({ ...p, type: "Page" })),
        ...productEndpoints.map((p) => ({ ...p, type: "Product" })),
      ];

      const formattedResources = combined.map((p) => {
        const nameLine = p.type === "Page" ? `\n\nName/Uri: ${p.name}` : "";
        return `\n=== RESOURCE START === Type: ${p.type}${nameLine}\n\n${p.content.trim()}\n\n=== RESOURCE END ===`;
      });

      return {
        content: [
          {
            type: "text",
            text: formattedResources.join("\n\n"),
          },
        ],
      };
    }
  );
};
