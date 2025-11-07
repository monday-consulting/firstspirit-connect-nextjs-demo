import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { Locale } from "@/i18n/config";
import { fetchProductEndpoints } from "../helper/createEndpointFetcher";

export const orderProductTool = (server: McpServer, locale: Locale) => {
  server.tool(
    `order-product-${locale}`,
    "Generate a mock order. Returns ONLY JSON (schema.org/Order).",
    { product: z.string(), street: z.string(), city: z.string(), postalCode: z.string() },
    {
      title: "Order a product",
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
      readOnlyHint: false,
    },
    async ({ product, street, city, postalCode }) => {
      const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
      const orderDate = new Date().toISOString();
      const addressCountry = String(locale).toLowerCase().includes("de") ? "DE" : "GB";

      const endpoints = await fetchProductEndpoints(locale);
      const normalize = (Value: string) => Value.trim().toLowerCase();

      const endpoint = (endpoints as any[]).find(
        (e) => normalize(String(e?.name ?? "")) === normalize(product)
      );

      const hasError = !endpoint;

      const priceText =
        extractPriceText(String(endpoint?.content ?? "")) ??
        extractPriceText(String(endpoint?.description ?? "")) ??
        null;

      const orderJson = {
        "@context": "https://schema.org",
        "@type": "Order",
        hasError,
        orderNumber,
        orderDate,
        orderStatus: "https://schema.org/OrderProcessing",
        shippingAddress: {
          "@type": "PostalAddress",
          streetAddress: street,
          postalCode,
          addressLocality: city,
          addressCountry,
        },
        orderedItem: {
          "@type": "OrderItem",
          orderItemNumber: "1",
          orderQuantity: 1,
          orderedItem: { "@type": "Product", name: product, sku: product },
        },
        acceptedOffer: {
          "@type": "Offer",
          price: priceText ?? 0,
          priceCurrency: "€",
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Product", name: product, sku: product },
          eligibleQuantity: { "@type": "QuantitativeValue", value: 1 },
        },
      };

      const jsonText = JSON.stringify(orderJson);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(jsonText)}`;

      return {
        content: [
          {
            type: "resource",
            resource: { uri: dataUri, text: jsonText, mimeType: "application/json" },
          },
        ],
      };
    }
  );
};

const extractPriceText = (markdown: string): string => {
  // 1) Get from table
  const tableCell = markdown.match(
    /\|\s*(?:\*\*?\s*Price\s*\*?\*?|Price)\s*\|\s*([^|\n\r]+)\|?/i
  )?.[1];
  // 2) Get from key-value pair
  const keyValue = markdown.match(/(?:\*\*\s*Price\s*\*\*|Price)\s*:\s*([^\n\r]+)/i)?.[1];

  // 3) Extract price pattern from candidates
  const candidates = [tableCell, keyValue, markdown];
  for (const candidate of candidates) {
    if (!candidate) continue;
    const match = candidate.match(/(\d{1,3}(?:\.\d{3})*,\d{2})/);
    if (match) return match[1]; //  "199,00"
  }
  return "";
};
