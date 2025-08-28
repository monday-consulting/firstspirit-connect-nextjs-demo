import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { connectHTTP } from "./transport";

export type CacheValue = { ts: number; value: ToolResultBlockParam["content"] };

export type Core = ReturnType<typeof createCore>;

export const createCore = () => {
  let mcp: { client: Client; close: () => void } | null = null;

  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;

  const systemPrompt = getDefaultSystemPrompt();
  const ensure = () => {
    if (!connected || !mcp) throw new Error("Not connected to MCP server");
  };

  const connectToMCPServer = async (serverUrl: string) => {
    const handles = await connectHTTP(serverUrl);
    mcp = handles;

    const [{ tools: t }, { resources: r }, { prompts: p }] = await Promise.all([
      mcp.client.listTools(),
      mcp.client.listResources(),
      mcp.client.listPrompts(),
    ]);
    tools = t;
    resources = r;
    prompts = p;
    connected = true;
  };

  const readResource = async (uri: string) => {
    ensure();
    const result = await mcp?.client.readResource({ uri });
    return result?.contents ?? [];
  };

  const executeTool = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: args = {} } = params;

    console.log("[SDK→MCP] callTool", name, args);
    const res = await mcp?.client.callTool({ name, arguments: args });

    const content: ToolResultBlockParam["content"] = Array.isArray(res?.content)
      ? res.content
      : [{ type: "text", text: "" }];

    const isError = !!res?.isError;
    console.log("[MCP→SDK] result", name, isError ? "ERROR" : "OK");

    return { content, isError };
  };

  const callMcp = async (name: string, args: unknown) => {
    const { content, isError } = await executeTool({
      name,
      arguments: args as Record<string, unknown>,
    });
    return { content, isError };
  };

  return {
    // lifecycle/config
    connectToMCPServer,
    isConnected: () => connected,
    getSystemPrompt: () => systemPrompt,

    // mcp ops
    readResource,

    getPrompt: async (params: Prompt) => {
      ensure();
      //@ts-expect-error
      return mcp?.client.getPrompt({ name: params.name, arguments: params.arguments || {} });
    },

    // tools
    executeTool,
    callMcp,

    // info
    getAvailableTools: () => tools.slice(),
    getAvailableResources: () => resources.slice(),
    getAvailablePrompts: () => prompts.slice(),
  };
};
