import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { defaultLocale, type Locale } from "@/i18n/config.js";

export const optimizeDescription = (server: McpServer, locale: Locale) => {
  const isGerman = locale !== defaultLocale;

  server.prompt(
    isGerman ? "Beschreibung optimieren" : "Optimize description",
    isGerman
      ? "Optimiert oder generiert eine Beschreibung für eine Seite oder ein Produkt – zugeschnitten auf eine bestimmte Zielgruppe."
      : "Optimizes or generates a description for a page or product – tailored to a specific target audience.",
    {
      uri: z.string().describe(isGerman ? "Ressourcen-URI" : "Resource URI"),
      resourceType: z
        .string()
        .optional()
        .describe(isGerman ? "Ressourcentyp" : "Resource type"),
      audience: z.string().describe(isGerman ? "Zielgruppe" : "Target audience"),
    },
    async ({ uri, resourceType, audience }) => {
      const messageDe = `
      
      Finde die Resource mit folgendem Namen/URI:

      **${uri}**

      Passe deren Beschreibung so an, dass sie ideal für folgende Zielgruppe formuliert ist:

      **${audience}**

      Falls du den passenden Inhalt gefunden hast, formuliere daraus eine angepasste Beschreibung – kurz, ansprechend, zielgruppengerecht.

      Ressourcentyp: ${resourceType ?? "unbekannt"}
      `.trim();

      const messageEn = `

      Find the resource with the following name or URI:

      **${uri}**

      Adapt its description so that it is ideally formulated for the following target audience:

      **${audience}**

      If you find the relevant content, rewrite it into a short, engaging, and audience-appropriate description.

      Resource type: ${resourceType ?? "unknown"}
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
