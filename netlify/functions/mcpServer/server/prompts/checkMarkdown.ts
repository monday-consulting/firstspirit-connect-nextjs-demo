import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";

export const checkMarkdown = (server: McpServer) => {
  server.prompt(
    "check-markdown",
    "Evaluate markdown content based on the structure.",
    {
      locale: z.union([z.enum(["de-DE", "en-GB"]), z.literal("")]).optional(),
    },
    async ({ locale }) => {
      const lang = locale ?? "de-DE";

      const messageEn = `
      Analyze the following Markdown text only in terms of its structure, not its content or language quality.

      Evaluate whether the Markdown formatting is clear, unambiguous, and consistent for LLM processing:
      
      - Are headings, paragraphs, and list items used correctly and in a comprehensible way?
      - Are there unclear or duplicated Markdown annotations?
      - Are semantic units (e.g., headlines, texts, CTAs, links) clearly separated from one another?
      - Are there places where additional structuring (e.g., through blank lines, subheadings, or formatting) would improve readability?
      - Is the Markdown machine-readable, allowing for clear content mapping (e.g., between image and description)?
      
      Return the original Markdown content and insert comments directly within the text (using ⚠️ Note: ... ⚠️) wherever structural improvements are needed.`;

      const messageDe = `
      Analysiere den folgenden Markdown-Text ausschließlich im Hinblick auf **seine Struktur**, nicht seinen inhaltlichen oder sprachlichen Gehalt.

      Beurteile, ob die Markdown-Formatierung für eine LLM-Verarbeitung klar, eindeutig und konsistent ist:
          
      - Werden Überschriften, Absätze und Listenelemente korrekt und nachvollziehbar verwendet?
      - Gibt es unklare oder doppelte Markdown-Auszeichnungen?
      - Sind semantische Einheiten (z. B. Headlines, Texte, CTAs, Links) klar voneinander getrennt?
      - Gibt es Stellen, an denen zusätzliche Strukturierung (z. B. durch Leerzeilen, Zwischenüberschriften oder Formatierungen) die Lesbarkeit verbessern würde?
      - Ist das Markdown maschinenlesbar, um eine klare Content-Zuordnung (z. B. zwischen Bild und Beschreibung) zu ermöglichen?
          
          Gib den ursprünglichen Markdown-Inhalt zurück und kommentiere direkt im Text (mit ⚠️ Hinweis: ... ⚠️), wo strukturelle Verbesserungen nötig sind.
      `;
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: (lang === "en-GB" ? messageEn : messageDe).trim(),
            },
          },
        ],
      };
    }
  );
};
