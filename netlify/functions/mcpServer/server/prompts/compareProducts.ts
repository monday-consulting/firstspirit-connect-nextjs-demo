import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const compareProducts = (server: McpServer) => {
  server.prompt(
    "compare-products",
    "Compares products based on user input (product names or category).",
    {
      category: z.string().optional(),
      firstProduct: z.string().optional(),
      secondProduct: z.string().optional(),
      locale: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },
    async ({ locale, firstProduct, secondProduct, category }) => {
      const language = locale ?? "de-DE";

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
Du hast Zugriff auf alle geladenen Ressourcen im Projektkontext.

Wenn noch keine Ressourcen geladen sind, nutze das Tool \`get-all-resources-de-DE\`.

${linesDe.join("\n\n")}

Stelle den Vergleich tabellarisch oder klar strukturiert dar. Gib am Ende eine Empfehlung ab, welches Produkt für den typischen Anwendungsfall am besten geeignet ist.
      `.trim();

      const messageEn = `
You have access to all loaded resources in the project context.

If no resources have been loaded yet, use the tool \`get-all-resources-en-GB\`.

${linesEn.join("\n\n")}

Present the comparison in a table or clear structure. At the end, provide a recommendation for which product is best suited for the typical use case.
      `.trim();

      return {
        messages: [
          {
            role: "assistant",
            content: {
              type: "text",
              text: language === "en-GB" ? messageEn : messageDe,
            },
          },
        ],
      };
    }
  );
};
