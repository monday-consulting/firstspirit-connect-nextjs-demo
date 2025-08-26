import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export const optimizeDescription = (server: McpServer) => {
  server.prompt(
    "optimize-description",
    "Optimizes or generates a description for a page or product – tailored to a specific target audience.",
    {
      uri: z.string(),
      resourceType: z.string().optional(),
      audience: z.string(),
      locale: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },
    async ({ uri, resourceType, audience, locale }) => {
      const lang = locale ?? "de-DE";

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
              text: lang === "en-GB" ? messageEn : messageDe,
            },
          },
        ],
      };
    }
  );
};
