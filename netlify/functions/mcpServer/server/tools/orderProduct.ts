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
    async ({ product, street, city, postalCode }) => {
      console.log(`[MCP Server] Executing orderProduct tool - Product: ${product}, City: ${city}`);

      const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

      const messageDe = `
WICHTIG: Erstelle JETZT sofort eine vollständige Beispielrechnung und zeige sie dem Nutzer an!

Lade zuerst die Produktdaten für "${product}" aus den verfügbaren Ressourcen, um Preis und Produkt-ID zu erhalten.

Dann erstelle eine professionelle Rechnung mit HTML und inline CSS-Styling (wie eine echte Rechnung aussehen würde):
- Bestellnummer: ${orderNumber}
- Datum: ${new Date().toLocaleDateString("de-DE")}
- Produkt: ${product}
- Lieferadresse: ${street ? `${street}, ${postalCode} ${city}` : "[vom Nutzer erfragen]"}

Verwende eine Tabelle für die Artikel mit Spalten: Produkt-ID, Produktname, Preis pro Stück, Stückzahl, Gesamtpreis.
Füge inline <style> Tags für professionelles Design hinzu (Rahmen, Hintergrundfarben, Schriftarten).
Zeige die Rechnung VOLLSTÄNDIG formatiert an.
      `.trim();

      const messageEn = `
IMPORTANT: Create and display a complete mock invoice to the user NOW!

First, load the product data for "${product}" from the available resources to get price and product ID.

Then create a professional invoice using HTML with inline CSS styling (like a real invoice would look):
- Order Number: ${orderNumber}
- Date: ${new Date().toLocaleDateString("en-GB")}
- Product: ${product}
- Delivery Address: ${street ? `${street}, ${postalCode} ${city}` : "[ask user for address]"}

Use a table for items with columns: Product ID, Product Name, Price per Unit, Quantity, Total Price.
Add inline <style> tags for professional design (borders, background colors, fonts).
Display the invoice FULLY formatted.
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
