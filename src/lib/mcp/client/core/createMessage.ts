import type { ChatWithToolsOptions } from "@/components/features/McpChat/ChatConversation";
import { createAnthropic } from "@ai-sdk/anthropic";
import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { type ModelMessage, generateText, stepCountIs } from "ai";
import { selectPromptsToLoad } from "../utils/selectPromptsToLoad";
import { selectResourcesToLoad } from "../utils/selectResourcesToLoad";
import type { Core } from "./clientCore";
import { createSystemPrompt } from "./createSystemPrompt";
import { processTools } from "./tools";

export type CreateMessageProps = {
  core: Core;
  sysPreset: string;
  chatMessages: ModelMessage[];
  tools: Tool[];
  resources: Resource[];
  prompts: Prompt[];
  options?: ChatWithToolsOptions;
};

export const createMessage = async ({
  core,
  sysPreset,
  chatMessages,
  tools,
  resources,
  prompts,
  options,
}: CreateMessageProps) => {
  const [resourcesUsed, promptsUsed] = await Promise.all([
    selectResourcesToLoad({ options, resources, core }),
    selectPromptsToLoad({ messages: chatMessages, prompts, core, options }),
  ]);

  const system = createSystemPrompt({
    sysPreset,
    tools,
    resources,
    prompts,
    resourcesUsed,
    promptsUsed,
  });

  const claude = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const mcpTools = processTools(tools, (name, args) => core.callMcp(name, args));

  const result = await generateText({
    model: claude("claude-sonnet-4-20250514"),
    tools: mcpTools,
    messages: chatMessages,
    system,
    stopWhen: stepCountIs(5),
  });

  const steps = await result.steps;

  const toolsUsed = steps.flatMap((s) => {
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

  console.log("Used tool(s):", JSON.stringify(toolsUsed, null, 2));

  return {
    response: result.text,
    toolsUsed,
    resourcesUsed,
    promptsUsed,
  };
};
