import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import QuickLRU from "quick-lru";
import { getDefaultSystemPrompt } from "./prompts";
import { connectHTTP } from "./transport";

export type CacheValue = { ts: number; value: ToolResultBlockParam["content"] };
let lruInstance: QuickLRU<string, CacheValue> | undefined;

const getLru = () => {
  if (!lruInstance) {
    lruInstance = new QuickLRU<string, CacheValue>({ maxSize: 500 });
  }
  return lruInstance;
};

const defaultTtlMs = 60 * 60 * 1000; // 1h

const keyFor = (name: string, args: unknown) => `tool:${name}:${args ?? {}}`;

export type Core = ReturnType<typeof createCore>;

export const createCore = () => {
  let mcp: { client: Client; close: () => void } | null = null;

  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;

  const systemPrompt = getDefaultSystemPrompt();
  const lru = getLru();

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

    // Prewarm
    Promise.allSettled(
      tools.map(async (tool) => {
        try {
          const properties = tool.inputSchema?.properties;
          if (
            properties &&
            typeof properties === "object" &&
            Object.keys(properties).length === 0
          ) {
            await executeTool({ name: tool.name, arguments: {} });
          }
        } catch (error) {
          console.warn("Prewarm failed:", error);
        }
      })
    );
  };

  const readResource = async (uri: string) => {
    ensure();
    const result = await mcp?.client.readResource({ uri });
    return result?.contents ?? [];
  };

  // Without cache
  const executeToolRaw = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: args = {} } = params;
    return mcp?.client.callTool({ name, arguments: args });
  };

  // IN-Memory (LRU)
  const executeTool = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: args = {} } = params;
    const key = keyFor(name, args);
    const cachedEntry = lru.get(key);

    if (cachedEntry) {
      console.log("[MCP-Tool execution]: Cache Hit for Entry:", cachedEntry);
      const isExpired = Date.now() - cachedEntry.ts > defaultTtlMs;
      if (!isExpired) {
        return { content: cachedEntry.value, isError: false as const };
      }
      lru.delete(key);
    }

    const result = await executeToolRaw({ name, arguments: args });
    const content: ToolResultBlockParam["content"] = Array.isArray(result?.content)
      ? result?.content
      : [{ type: "text", text: "" }];
    lru.set(key, { ts: Date.now(), value: content });
    return { content, isError: !!result?.isError };
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
    executeToolRaw,
    callMcp,

    // info
    getAvailableTools: () => tools.slice(),
    getAvailableResources: () => resources.slice(),
    getAvailablePrompts: () => prompts.slice(),
  };
};
