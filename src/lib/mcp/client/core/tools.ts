import type { Tool as MCPTool } from "@modelcontextprotocol/sdk/types.js";
import { type JSONSchema7, jsonSchema, type StepResult, type ToolSet, tool } from "ai";

export const processTools = (
  toolsFromMcp: MCPTool[],
  // biome-ignore lint/suspicious/noExplicitAny: We don't know what the LLM will return
  executeTool: (name: string, args: unknown) => Promise<any>
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
          console.log(`[SDK → MCP] Calling MCP tool: ${t.name} with args:`, args);
          return executeTool(t.name, args);
        },
      }),
    ] as const;
  });

  return Object.fromEntries(entries);
};

export const getUsedTools = (steps: StepResult<ToolSet>[]) => {
  return steps.flatMap((step) => {
    const blocks = step.content || [];
    return blocks
      .filter((block) => block.type === "tool-result")
      .map((result) => {
        const call = blocks.find(
          (call) => call.type === "tool-call" && call.toolCallId === result.toolCallId
        );

        return {
          step: step.finishReason ?? "step",
          toolCallId: result.toolCallId,
          name: result.toolName,
          arguments: call?.type === "tool-call" ? call?.input : {},
          output: result.output?.value ?? result.output?.content ?? result.output ?? null,
          isError: result.output?.isError,
        };
      });
  });
};
