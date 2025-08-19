import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { connectHTTP } from "./transport";

export type Core = ReturnType<typeof createCore>;
export type CacheEntry = { ts: number; value: ToolResultBlockParam["content"] };

export const createCore = () => {
  let mcp: { client: Client; close: () => void } | null = null;

  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;
  const systemPrompt = getDefaultSystemPrompt();

  const cache = new Map<string, CacheEntry>();
  const defaultTtl = 3_600_000; // 1 hour

  const keyFor = (name: string, args: unknown) => `${name}:${JSON.stringify(args)}`;

  const cacheGet = (name: string, args: unknown) => {
    const key = keyFor(name, args);
    const cachedEntry = cache.get(key);
    if (!cachedEntry) return null;
    if (defaultTtl > 0 && Date.now() - cachedEntry.ts > defaultTtl) {
      cache.delete(key);
      return null;
    }
    return cachedEntry.value;
  };

  const cacheSet = (name: string, args: unknown, value: ToolResultBlockParam["content"]) => {
    cache.set(keyFor(name, args), { ts: Date.now(), value });
  };

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
    //TODO:
    prompts = [];
    connected = true;

    Promise.allSettled(
      tools.map(async (tool) => {
        try {
          await executeTool({ name: tool.name, arguments: {} });
        } catch (error) {
          console.warn("Prewarm failed:", error);
        }
      })
    );
  };

  const readResource = async (uri: string) => {
    ensure();
    const res = await mcp?.client.readResource({ uri });
    return res?.contents ?? [];
  };

  // Without cache
  const executeToolRaw = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: args = {} } = params;
    return mcp?.client.callTool({ name, arguments: args });
  };

  const executeTool = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: args } = params;

    const hit = cacheGet(name, args);
    if (hit) return { content: hit, isError: false as const };

    const res = await executeToolRaw({ name, arguments: args });
    const content = Array.isArray(res?.content) ? res.content : [{ type: "text", text: "" }];

    cacheSet(name, args, content);
    return { content, isError: !!res?.isError };
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
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    getPrompt: async (name: string, args?: any) => {
      ensure();
      return mcp?.client.getPrompt({ name, arguments: args || {} });
    },

    // tools
    executeTool,
    executeToolRaw,
    callMcp,

    // info
    getAvailableTools: () => tools.slice(),
    getAvailableResources: () => resources.slice(),
    getAvailablePrompts: () => prompts.slice(),
  };
};
