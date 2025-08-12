import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const checkMarkdown = (server: McpServer) => {
  server.prompt(
    "check-markdown",
    "Analysiert Markdown-Inhalte auf Klarheit und Struktur.",
    async () => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `
          Analysiere den folgenden Markdown-Text ausschließlich im Hinblick auf **seine Struktur**, nicht seinen inhaltlichen oder sprachlichen Gehalt.

          Beurteile, ob die Markdown-Formatierung für eine LLM-Verarbeitung klar, eindeutig und konsistent ist:
          
          - Werden Überschriften, Absätze und Listenelemente korrekt und nachvollziehbar verwendet?
          - Gibt es unklare oder doppelte Markdown-Auszeichnungen?
          - Sind semantische Einheiten (z. B. Headlines, Texte, CTAs, Links) klar voneinander getrennt?
          - Gibt es Stellen, an denen zusätzliche Strukturierung (z. B. durch Leerzeilen, Zwischenüberschriften oder Formatierungen) die Lesbarkeit verbessern würde?
          - Ist das Markdown maschinenlesbar, um eine klare Content-Zuordnung (z. B. zwischen Bild und Beschreibung) zu ermöglichen?
          
          Gib den ursprünglichen Markdown-Inhalt zurück und kommentiere direkt im Text (mit ⚠️ Hinweis: ... ⚠️), wo strukturelle Verbesserungen nötig sind.
      `.trim(),
            },
          },
        ],
      };
    }
  );
};
