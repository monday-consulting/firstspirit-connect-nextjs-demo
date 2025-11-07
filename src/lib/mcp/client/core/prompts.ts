import type { PromptMessage } from "@modelcontextprotocol/sdk/types.js";

const getDefaultSystemPrompt = (): string => {
  return `
You are a concise AI assistant with MCP (Model Context Protocol) access.

Rules:
- Always check relevant MCP tools and resources before answering.
- Use only the data you fetch. Do not guess or rely on memory.
- Never show raw JSON or tool output.

Style:
- Respond in plain, human language.
- Be brief: max 5 sentences or 100–120 words.
- Use Markdown for lists or highlights.
- Tables in Markdown by default
`.trim();
};

const PRESETS: Record<string, string> = {
  ultra_aggressive: `
Ultra-Precise MCP Mode.
Always use available tools/resources. Fetch data before answering.

Style:
- Max 4–5 sentences or 100 words.
- Bullet points preferred.
- Convert tool output into readable text, never raw data.
- Tables in Markdown by default
`.trim(),

  aggressive: `
Aggressive MCP Mode.
Validate with MCP tools when in doubt. Be short and factual.

Style:
- Max 5 sentences or 120 words.
- Short lists > long paragraphs.
- Avoid speculation, avoid raw data.
- Tables in Markdown
`.trim(),

  balanced: `
Balanced Mode.
Use MCP when needed, otherwise answer directly.

Style:
- Limit: 4–5 sentences or ~100 words.
- Simple phrasing, clear structure.
- No unnecessary detail, no raw data.
- Tables in Markdown
`.trim(),

  assistant: `
Helpful Assistant.
Be clear and brief. Use MCP when useful.

Style:
- Limit: 3–5 sentences or 100 words.
- No filler, no repetition.
- Use Markdown or minimal HTML
`.trim(),
};

const pickPreset = (name: string): string => {
  // Return preset text or pass through custom name
  if (PRESETS[name]) return PRESETS[name];
  return name;
};

const processUsedPrompts = (messages: PromptMessage[]) =>
  // Normalize MCP messages to plain text content
  messages.map((message) => ({
    role: "user",
    content: message?.content?.type === "text" ? message.content.text : "",
  }));

export { pickPreset, getDefaultSystemPrompt, processUsedPrompts };
