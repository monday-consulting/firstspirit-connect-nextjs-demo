import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const orderProduct = (server: McpServer) => {
  server.prompt(
    "order-product",
    "Orders the product that best fits the user.",
    {
      locale: z.enum(["de-DE", "en-GB"]).optional(),
    },
    async ({ locale }) => {
      const language = locale ?? "de-DE";

      const messageDe = `
Bitte wähle das passende Produkt basierend auf den gegebenen Benutzerdaten aus und erstelle eine Beispielrechnung (Mock Invoice) mit folgenden Feldern:

- Produktname  
- Preis pro Stück  
- Bestellnummer  
- Stückzahl  
- Gesamtpreis

Die Ausgabe soll so aussehen, als wäre es eine echte Bestellung.
      `.trim();

      const messageEn = `
Please select the most suitable product based on the provided user data and generate a mock invoice with the following fields:

- Product name  
- Price per unit  
- Order number  
- Quantity  
- Total price

The output should look like a real order.
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
