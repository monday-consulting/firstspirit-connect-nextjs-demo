import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const searchProducts = (server: McpServer) => {
  server.prompt(
    "search-products",
    "Searches for products based on user input.",
    {
      product: z.string(),
      locale: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },

    async ({ product, locale }) => {
      const lang = locale ?? "de-DE";

      const messageDe = `

      Suche nach Produkten, die mit dem folgenden Nutzereingabeparameter übereinstimmen:

      **${product}**

      Gib nur relevante Produkte aus und begründe ggf. die Auswahl. Wenn nichts gefunden wurde, gib einen entsprechenden Hinweis.
      `.trim();

      const messageEn = `

      Search for products that match the following user input:

      **${product}**

      Return only relevant products and explain your selection if needed. If nothing is found, provide an appropriate message.
      `.trim();

      return {
        messages: [
          {
            role: "assistant",
            content: {
              type: "text",
              text: lang === "en-GB" ? messageEn : messageDe,
            },
          },
        ],
      };
    }
  );
};
