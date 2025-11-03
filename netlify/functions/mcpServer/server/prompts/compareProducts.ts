import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { defaultLocale, type Locale } from "@/i18n/config.js";

export const compareProducts = (server: McpServer, locale: Locale) => {
  const isGerman = locale !== defaultLocale;

  server.prompt(
    isGerman ? "Produkte vergleichen" : "Compare products",
    isGerman
      ? "Vergleicht Produkte basierend auf Benutzereingaben (Produktnamen oder Kategorie)."
      : "Compares products based on user input (product names or category).",
    {
      category: z
        .string()
        .optional()
        .describe(isGerman ? "Kategorie" : "Category"),
      firstProduct: z
        .string()
        .optional()
        .describe(isGerman ? "Erstes Produkt" : "First product"),
      secondProduct: z
        .string()
        .optional()
        .describe(isGerman ? "Zweites Produkt" : "Second product"),
    },
    async ({ firstProduct, secondProduct, category }) => {
      const linesDe: string[] = [];
      const linesEn: string[] = [];

      if (category) {
        linesDe.push(
          `Vergleiche Produkte aus der Kategorie **${category}** anhand von Preis, Funktionen und Kompatibilität.`
        );
        linesEn.push(
          `Compare products from the **${category}** category based on price, features, and compatibility.`
        );
      }

      if (firstProduct && secondProduct) {
        linesDe.push(
          `Vergleiche **${firstProduct}** mit **${secondProduct}** anhand ihrer Merkmale wie Preis, Funktionen, Kompatibilität.`
        );
        linesEn.push(
          `Compare **${firstProduct}** with **${secondProduct}** based on their characteristics such as price, features, and compatibility.`
        );
      }

      if (linesDe.length === 0) {
        linesDe.push(
          "Es wurden keine konkreten Produkte oder Kategorien angegeben. Suche bitte nach relevanten Produkten in den geladenen Ressourcen und wähle zwei geeignete Beispiele aus."
        );
        linesEn.push(
          "No specific products or categories were provided. Please search the loaded resources for relevant products and select two suitable examples to compare."
        );
      }

      const messageDe = `

      ${linesDe.join("\n\n")}

      Stelle den Vergleich tabellarisch oder klar strukturiert dar. Gib am Ende eine Empfehlung ab, welches Produkt für den typischen Anwendungsfall am besten geeignet ist.
      `.trim();

      const messageEn = `
      
      ${linesEn.join("\n\n")}

      Present the comparison in a table or clear structure. At the end, provide a recommendation for which product is best suited for the typical use case.
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
