import type { Tool as MCPTool } from "@modelcontextprotocol/sdk/types.js";
import { type JSONSchema7, type StepResult, type ToolSet, jsonSchema, tool } from "ai";

export const processTools = (
  toolsFromMcp: MCPTool[],
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

export const getUsedTools = (steps: StepResult<ToolSet>[]) => {
  return steps.flatMap((s) => {
    const blocks = s.content || [];
    return blocks
      .filter((block) => block.type === "tool-result")
      .map((result) => {
        const call = blocks.find(
          (c) => c.type === "tool-call" && c.toolCallId === result.toolCallId
        );

        return {
          step: s.finishReason ?? "step",
          toolCallId: result.toolCallId,
          name: result.toolName,
          arguments: call?.type === "tool-call" ? call?.input : {},
          output: result.output?.value ?? result.output?.content ?? result.output ?? null,
          isError: result.output?.isError,
        };
      });
  });
};
