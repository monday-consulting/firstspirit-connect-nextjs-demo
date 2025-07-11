import { Effect, Schema } from "effect";
import { PromptMessage } from "@effect/ai/McpSchema";
import { TextContent } from "@effect/ai/McpSchema";
import { McpServer } from "@effect/ai";

const ParamsSchema = Schema.Struct({
  message: Schema.String,
});

// Prompt definition
export const CypherAlpha = McpServer.prompt({
  name: "Cypher Alpha LLM",
  description: "Send message to OpenRouter cypher-alpha:free LLM and return the response.",
  parameters: ParamsSchema,
  content: ({ message }) =>
    Effect.tryPromise({
      try: async () => {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY ?? ""}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openrouter/cypher-alpha:free",
            messages: [{ role: "user", content: message }],
          }),
        });

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content ?? "No response from LLM";

        return [
          PromptMessage.make({
            role: "assistant",
            content: TextContent.make({ text }),
          }),
        ];
      },
      catch: (error) => new Error(`❌ Failed to fetch from OpenRouter: ${String(error)}`),
    }),
});

export const ClaudeSonnet35 = McpServer.prompt({
  name: "Claude 3.5 Sonnet",
  description: "Send a message to Claude 3.5 Sonnet via Anthropic API and return the response.",
  parameters: ParamsSchema,
  content: ({ message }) =>
    Effect.tryPromise({
      try: async () => {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1024,
            messages: [
              {
                role: "user",
                content: message,
              },
            ],
          }),
        });

        const data = await response.json();
        const text = data.content?.[0]?.text ?? "No response from Claude 3.5 Sonnet";

        return [
          PromptMessage.make({
            role: "assistant",
            content: TextContent.make({ text }),
          }),
        ];
      },
      catch: (error) => new Error(`❌ Failed to fetch from Claude: ${String(error)}`),
    }),
});

export const ClaudeSonnet4 = McpServer.prompt({
  name: "Claude 4.0 Sonnet",
  description: "Send a message to Claude 4.0 Sonnet via Anthropic API and return the response.",
  parameters: ParamsSchema,
  content: ({ message }) =>
    Effect.tryPromise({
      try: async () => {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "x-api-key": process.env.ANTHROPIC_API_KEY ?? "",
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            messages: [
              {
                role: "user",
                content: message,
              },
            ],
          }),
        });
        const data = await response.json();
        const text = data.content?.[0]?.text ?? "No response from Claude 4.0 Sonnet";

        return [
          PromptMessage.make({
            role: "assistant",
            content: TextContent.make({ text }),
          }),
        ];
      },
      catch: (error) => new Error(`❌ Failed to fetch from Claude: ${String(error)}`),
    }),
});
