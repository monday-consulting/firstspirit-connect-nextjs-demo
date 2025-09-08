import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { Locale } from "@/i18n/config";

export const orderProductTool = (server: McpServer, locale: Locale) => {
  server.tool(
    `order-product-${locale}`,
    "Generate a mock order/invoice for the best fitting product.",
    {
      product: z.string(),
      street: z.string(),
      city: z.string(),
      postalCode: z.string(),
    },
    {
      title: "Order a product",
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
      readOnlyHint: false,
    },
    async () => {
      const messageDe = `
Bitte wähle das passende Produkt basierend auf den gegebenen Benutzerdaten aus und erstelle eine Beispielrechnung (Mock Invoice) mit folgenden Feldern:

- Produkt-ID - Falls möglich
- Produktname  
- Preis pro Stück  
- Bestellnummer  
- Stückzahl  
- Gesamtpreis

Die Ausgabe soll so aussehen, als wäre es eine echte Bestellung. (Mit CSS & HTML-Formatierung)
      `.trim();

      const messageEn = `
Please select the most suitable product based on the provided user data and generate a mock invoice with the following fields:

- Product ID - If possible
- Product name  
- Price per unit  
- Order number  
- Quantity  
- Total price

The output should look like a real order. (With CSS & HTML formatting)
      `.trim();

      return {
        content: [
          {
            type: "text",
            text: locale === "en-GB" ? messageEn : messageDe,
          },
        ],
      };
    }
  );
};
