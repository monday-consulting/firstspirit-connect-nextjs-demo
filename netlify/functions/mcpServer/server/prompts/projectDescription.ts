import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { defaultLocale, type Locale } from "@/i18n/config.js";

export const projectDescription = (server: McpServer, locale: Locale) => {
  const isGerman = locale !== defaultLocale;

  server.prompt(
    isGerman ? "Projektbeschreibung generieren" : "Generate project description",
    isGerman
      ? "Generiert eine Beschreibung basierend auf geladenen Ressourcen."
      : "Generates a description based on loaded resources.",
    {},
    async () => {
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
              text: isGerman ? messageDe : messageEn,
            },
          },
        ],
      };
    }
  );
};
