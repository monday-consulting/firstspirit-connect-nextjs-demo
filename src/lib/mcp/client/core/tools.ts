import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { type JSONSchema7, jsonSchema, tool } from "ai";

export const processTools = (
  toolsFromMcp: Tool[],
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  callMcp: (name: string, args: unknown) => Promise<any>
) => {
  const entries = toolsFromMcp.map((t) => {
    return [
      t.name,
      tool({
        description: t.description,
        inputSchema: t.inputSchema
          ? jsonSchema(t.inputSchema as JSONSchema7)
          : jsonSchema({ type: "object", properties: {} }),

        execute: async (args) => {
          console.log(`Calling MCP tool: ${t.name} with args:`, args);
          return callMcp(t.name, args);
        },
      }),
    ] as const;
  });

  return Object.fromEntries(entries);
};
