import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { defaultLocale, type Locale } from "@/i18n/config.js";

export const searchProducts = (server: McpServer, locale: Locale) => {
  const isGerman = locale !== defaultLocale;

  server.prompt(
    isGerman ? "Produkte suchen" : "Search products",
    isGerman
      ? "Sucht nach Produkten basierend auf Benutzereingaben."
      : "Searches for products based on user input.",
    {
      product: z.string().describe(isGerman ? "Suchbegriff" : "Search term"),
    },

    async ({ product }) => {
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
              text: isGerman ? messageDe : messageEn,
            },
          },
        ],
      };
    }
  );
};
