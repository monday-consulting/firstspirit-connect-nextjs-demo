import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export const optimizeDescription = (server: McpServer) => {
  server.prompt(
    "optimize-description",
    "Optimizes or generates a description for a page or product – tailored to a specific target audience.",
    {
      uri: z.string(),
      resourceType: z.enum(["page", "product", "Page", "Product"]).optional(),
      audience: z.string(),
      language: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },
    async ({ uri, resourceType, audience, language }) => {
      const lang = language ?? "de-DE";

      const messageDe = `
Du hast Zugriff auf alle geladenen Ressourcen. Falls die Ressourcen noch nicht geladen wurden, dann nutze das Tool \`get-all-resources-de-DE\`. Bitte finde die Resource mit folgendem Namen/URI:

**${uri}**

Passe deren Beschreibung so an, dass sie ideal für folgende Zielgruppe formuliert ist:

**${audience}**

Falls du den passenden Inhalt gefunden hast, formuliere daraus eine angepasste Beschreibung – kurz, ansprechend, zielgruppengerecht.

Ressourcentyp: ${resourceType ?? "unbekannt"}
      `.trim();

      const messageEn = `
You have access to all loaded resources. If the resources haven't been loaded yet, use the tool \`get-all-resources-en-GB\`. Please find the resource with the following name or URI:

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
