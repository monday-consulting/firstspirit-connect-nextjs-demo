import Anthropic from "@anthropic-ai/sdk";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { connectHTTP } from "./transport";

export const createCore = (anthropicApiKey: string, customSystemPrompt?: string) => {
  const anthropic = new Anthropic({ apiKey: anthropicApiKey, maxRetries: 2, timeout: 20000 });
  let mcp: { client: Client; close: () => void } | null = null;

  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;
  let systemPrompt = customSystemPrompt || getDefaultSystemPrompt();

  const connectToMCPServer = async (serverUrl: string) => {
    try {
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
    } catch (error) {
      connected = false;
      console.error("Failed to connect to MCP server:", error);
      throw new Error(
        `Failed to connect to MCP server: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  const ensure = () => {
    if (!connected || !mcp) throw new Error("Not connected to MCP server");
  };

  async function readResource(uri: string) {
    ensure();
    const res = await mcp?.client.readResource({ uri });
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (res as any)?.contents ?? res;
  }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function getPrompt(name: string, args?: any) {
    ensure();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (mcp as any)?.client.getPrompt({ name, arguments: args || {} });
  }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function executeTool(name: string, args: any) {
    ensure();
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (mcp as any)?.client.callTool({ name, arguments: args });
  }

  function isConnected() {
    return connected;
  }
  function setSystemPrompt(p: string) {
    systemPrompt = p;
  }
  function getSystemPrompt() {
    return systemPrompt;
  }
  function getAvailableTools() {
    return tools.slice();
  }
  function getAvailableResources() {
    return resources.slice();
  }
  function getAvailablePrompts() {
    return prompts.slice();
  }

  return {
    anthropic,
    // lifecycle/config
    connectToMCPServer,
    isConnected,
    setSystemPrompt,
    getSystemPrompt,
    // mcp ops
    readResource,
    getPrompt,
    executeTool,
    // info
    getAvailableTools,
    getAvailableResources,
    getAvailablePrompts,
  };
};
