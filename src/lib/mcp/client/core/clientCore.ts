import Anthropic from "@anthropic-ai/sdk";
import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { connectHTTP } from "./transport";

export type CacheEntry = { ts: number; value: ToolResultBlockParam["content"] };

export const createCore = (anthropicApiKey: string, customSystemPrompt?: string) => {
  const anthropic = new Anthropic({ apiKey: anthropicApiKey, maxRetries: 2, timeout: 20000 });
  let mcp: { client: Client; close: () => void };

  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;
  let systemPrompt = customSystemPrompt || getDefaultSystemPrompt();
  let ready = false;
  let warmedUp = false;

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
    //TODO: Implement prompts (with params)
    prompts = [];
    connected = true;

    if (!warmedUp && tools.length) {
      warmedUp = true;

      // Execute only a few tools at a time to avoid overwhelming the server
      const batch = 3;
      for (let i = 0; i < tools.length; i += batch) {
        const slice = tools.slice(i, i + batch);
        await Promise.allSettled(slice.map((t) => executeTool({ name: t.name, arguments: {} })));
      }
    }

    ready = true;
  };

  const ensure = () => {
    if (!connected || !mcp) throw new Error("Not connected to MCP server");
  };

  const readResource = async (uri: string) => {
    ensure();
    const res = await mcp?.client.readResource({ uri });
    return res?.contents ?? [];
  };

  const executeToolRaw = async (params: CallToolRequest["params"]) => {
    const { name, arguments: args } = params;
    ensure();

    return mcp?.client.callTool({ name, arguments: args });
  };

  const executeTool = async (params: CallToolRequest["params"]) => {
    console.log;
    const { name, arguments: args } = params;
    console.log("1. [executeToolCached] called with", name, args);
    ensure();

    const hit = cacheGet(name, args);

    console.log("2. [executeToolCached] cache hit:", hit);
    if (hit) return hit;

    const res = await executeToolRaw({ name, arguments: args });
    if (res && Array.isArray(res.content)) {
      cacheSet(name, args, res.content);

      console.log("Actual 'Cache'-Map", cache);
      return res;
    }
    return [];
  };

  const isConnected = () => {
    return connected;
  };
  const setSystemPrompt = (p: string) => {
    systemPrompt = p;
  };
  const getSystemPrompt = () => {
    return systemPrompt;
  };
  const getAvailableTools = () => {
    return tools.slice();
  };
  const getAvailableResources = () => {
    return resources.slice();
  };
  const getAvailablePrompts = () => {
    return prompts.slice();
  };

  return {
    anthropic,
    // lifecycle/config
    connectToMCPServer,
    isConnected,
    setSystemPrompt,
    getSystemPrompt,
    // mcp ops
    readResource,
    // biome-ignore lint/suspicious/noExplicitAny: Should be implemented in the future
    getPrompt: async (name: string, args?: any) => {
      ensure();
      return mcp?.client.getPrompt({ name, arguments: args || {} });
    },
    // tools (with cache)
    executeTool, // cached
    executeToolRaw, // not cached

    // info
    getAvailableTools,
    getAvailableResources,
    getAvailablePrompts,
  };
};
