import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const projectDescription = (server: McpServer) => {
  server.prompt(
    "generate-project-description",
    "Generates a description based on loaded resources.",
    {
      locale: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },
    async ({ locale }) => {
      const lang = locale ?? "de-DE";

      const messageDe = `

      Beschreibe die Inhalte der Webseite anhand dieser Daten so, als würdest du sie einem interessierten Nutzer erklären. Nutze klare, prägnante Sprache.
      `.trim();

      const messageEn = `

      Describe the content of the website based on these resources as if you were explaining it to an interested user. Use clear and concise language.
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
