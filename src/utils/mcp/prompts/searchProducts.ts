import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const searchProducts = (server: McpServer) => {
  server.prompt(
    "search-products",
    "Searches for products based on user input.",
    {
      product: z.string(),
      locale: z.enum(["de-DE", "en-GB"]).optional(),
    },

    async ({ product, locale }) => {
      const language = locale ?? "de-DE";

      const messageDe = `
Du hast Zugriff auf alle geladenen Ressourcen im Projektkontext.

Wenn die Ressourcen noch nicht vorhanden sind, rufe zuerst das Tool \`get-all-resources-de-DE\` auf. 

Durchsuche die geladenen Ressourcen nach Produkten, die mit dem folgenden Nutzereingabeparameter übereinstimmen:

**${product}**

Gib nur relevante Produkte aus und begründe ggf. die Auswahl. Wenn nichts gefunden wurde, gib einen entsprechenden Hinweis.
      `.trim();

      const messageEn = `
You have access to all loaded resources in the project context.

If the resources are not yet available, first call the tool \`get-all-resources-en-GB\`.

Search the loaded resources for products that match the following user input:

**${product}**

Return only relevant products and explain your selection if needed. If nothing is found, provide an appropriate message.
      `.trim();

      return {
        messages: [
          {
            role: "assistant",
            content: {
              type: "text",
              text: language ? messageDe : messageEn,
            },
          },
        ],
      };
    }
  );
};
