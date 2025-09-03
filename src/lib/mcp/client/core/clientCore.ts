import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { createMcpClient } from "./transport";

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
    const handles = await createMcpClient(serverUrl);
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

  const executeResource = async (resourceUri: string) => {
    ensure();
    const startTimestamp = Date.now();

    try {
      const result = await mcp?.client.readResource({ uri: resourceUri });
      const contents = result?.contents ?? [];
      const duration = `${Date.now() - startTimestamp}ms`;

      const contentsJsonString = JSON.stringify(contents);
      const contentByteLength =
        typeof Buffer !== "undefined"
          ? Buffer.byteLength(contentsJsonString, "utf8")
          : new TextEncoder().encode(contentsJsonString).length;

      console.log("[MCP→SDK] Read Resource: ", {
        resourceUri,
        duration,
        itemCount: Array.isArray(contents) ? contents.length : 0,
        contentBytes: contentByteLength,
      });

      return contents;
    } catch (error) {
      const duration = `${Date.now() - startTimestamp}ms`;
      console.warn("[MCP→SDK] Read Resource Error: ", {
        resourceUri,
        duration,
        errorMessage: String(error),
      });
      throw error;
    }
  };

  const executeTool = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: argumentMap = {} } = params;
    const startTimestamp = Date.now();

    try {
      const result = await mcp?.client.callTool({ name, arguments: argumentMap });

      const content: ToolResultBlockParam["content"] = Array.isArray(result?.content)
        ? result.content
        : [{ type: "text", text: "" }];

      const isError = !!result?.isError;
      const duration = `${Date.now() - startTimestamp}ms`;

      const contentJsonString = JSON.stringify(content);
      const contentByteLength =
        typeof Buffer !== "undefined"
          ? Buffer.byteLength(contentJsonString, "utf8")
          : new TextEncoder().encode(contentJsonString).length;

      const logLabel = "[MCP → SDK] Tool Response: ";

      (isError ? console.warn : console.log)(logLabel, {
        toolName: name,
        duration,
        isError,
        argumentKeys: Object.keys(argumentMap),
        contentBytes: contentByteLength,
      });

      return { content, isError };
    } catch (error) {
      const duration = `${Date.now() - startTimestamp}ms`;
      console.warn("[MCP→SDK] Tool Response Error:", {
        toolName: name,
        duration,
        errorMessage: String(error),
      });
      throw error;
    }
  };

  const executePrompt = async (params: Prompt) => {
    ensure();
    const promptName = params.name;
    const promptArguments = params.arguments || {};
    const startTimestamp = Date.now();

    try {
      const result = await mcp?.client.getPrompt({
        name: promptName,
        arguments: promptArguments,
      });
      const duration = `${Date.now() - startTimestamp}ms`;
      console.log("[MCP → SDK] getPrompt", { promptName, duration });
      return result;
    } catch (error) {
      const duration = `${Date.now() - startTimestamp}ms`;
      console.warn("[MCP → SDK] getPrompt error", {
        promptName,
        duration,
        errorMessage: String(error),
      });
      throw error;
    }
  };

  return {
    // Lifecycle/Config
    connectToMCPServer,
    isConnected: () => connected,
    getSystemPrompt: () => systemPrompt,

    // Execution
    executeResource,
    executePrompt,
    executeTool,

    // Capabilities Info
    getAvailableTools: () => tools.slice(),
    getAvailableResources: () => resources.slice(),
    getAvailablePrompts: () => prompts.slice(),
  };
};
