import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.js";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { CallToolRequest, Prompt, Resource, Tool } from "@modelcontextprotocol/sdk/types.js";
import { getDefaultSystemPrompt } from "./prompts";
import { createMcpClient } from "./transport";

export type CacheValue = { ts: number; value: ToolResultBlockParam["content"] };

export type Core = ReturnType<typeof createCore>;

/**
 * Creates an MCP (Model Context Protocol) client core instance
 * @returns Core instance with methods for connecting to MCP servers and executing tools/resources/prompts
 */
export const createCore = () => {
  // MCP client connection handle
  let mcp: { client: Client; close: () => void } | null = null;

  // Available capabilities from the MCP server
  let tools: Tool[] = [];
  let resources: Resource[] = [];
  let prompts: Prompt[] = [];
  let connected = false;

  const systemPrompt = getDefaultSystemPrompt();

  // Ensure connection exists before operations
  const ensure = () => {
    if (!connected || !mcp) throw new Error("Not connected to MCP server");
  };

  /**
   * Connects to an MCP server and loads available capabilities
   * @param serverUrl - URL of the MCP server to connect to
   */
  const connectToMCPServer = async (serverUrl: string) => {
    // Establish connection to MCP server
    mcp = await createMcpClient(serverUrl);

    // Load all available capabilities in parallel
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

  /**
   * Reads content from an MCP resource
   * @param resourceUri - URI of the resource to read
   * @returns Promise resolving to resource contents
   */
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

  /**
   * Executes an MCP tool with given parameters
   * @param params - Tool execution parameters (name and arguments)
   * @returns Promise resolving to tool result with content and error status
   */
  const executeTool = async (params: CallToolRequest["params"]) => {
    ensure();
    const { name, arguments: argumentMap = {} } = params;
    const startTimestamp = Date.now();

    try {
      const result = await mcp?.client.callTool({ name, arguments: argumentMap });

      // Normalize tool result content to expected format
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

  /**
   * Executes an MCP prompt template with given arguments
   * @param params - Prompt parameters including name and arguments
   * @returns Promise resolving to prompt result with generated messages
   */
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
    // Connection lifecycle and configuration
    connectToMCPServer,
    isConnected: () => connected,
    getSystemPrompt: () => systemPrompt,

    // MCP capability execution
    executeResource,
    executePrompt,
    executeTool,

    // Available capabilities (returns copies to prevent mutation)
    getAvailableTools: () => tools.slice(),
    getAvailableResources: () => resources.slice(),
    getAvailablePrompts: () => prompts.slice(),
  };
};
