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
Erstelle eine kurze, realistisch aussehende Rechnung als HTML mit inline CSS.

Pflichtangaben:
- Bestellnummer: ${orderNumber}
- Datum: $${new Date().toLocaleDateString("de-DE")}
- Produkt: ${product}
- Adresse: ${street}, ${postalCode} ${city}

Anforderungen:
- Verwende <style> für sauberes Design (Rahmen, Farben, Schrift).
- Nutze <table> für Artikeldaten (Produkt-ID, Name, Preis/Stk, Menge, Gesamt).
- Kein <pre>, keine Markdown-Codeblöcke.
- Kompakter HTML-Output ohne Kommentare oder überflüssige Texte.
          `.trim();

      const messageEn = `
IMPORTANT: Create and dispCreate a concise, realistic invoice in HTML with inline CSS.

Include:
- Order No: ${orderNumber}
- Date: ${new Date().toLocaleDateString("en-GB")}
- Product: ${product}
- Address: ${street}, ${postalCode} ${city}

Rules:
- Use <style> for layout (borders, fonts, colors).
- Use <table> for items (Product ID, Name, Unit Price, Qty, Total).
- No <pre> or Markdown.
- Compact HTML only, no comments or explanations.
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
