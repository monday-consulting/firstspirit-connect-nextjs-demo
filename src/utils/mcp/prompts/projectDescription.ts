import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const projectDescription = (server: McpServer) => {
  server.prompt(
    "generate-project-description",
    "Generates a description based on loaded resources.",
    {
      locale: z.enum(["de-DE", "en-GB"]).optional(),
    },
    async ({ locale }) => {
      const language = locale ?? "de-DE";

      const messageDe = `
Du hast Zugriff auf alle geladenen Ressourcen im Projektkontext.

Wenn die Ressourcen noch nicht vorhanden sind, rufe zuerst das Tool \`get-all-resources-de-DE\` auf.

Beschreibe anschließend die Inhalte der Webseite anhand dieser Daten so, als würdest du sie einem interessierten Nutzer erklären. Nutze klare, prägnante Sprache.
      `.trim();

      const messageEn = `
You have access to all loaded resources in the project context.

If the resources are not yet available, first call the tool \`get-all-resources-en-GB\`.

Then describe the content of the website based on these resources as if you were explaining it to an interested user. Use clear and concise language.
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
