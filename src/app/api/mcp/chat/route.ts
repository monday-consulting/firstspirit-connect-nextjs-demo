import { NextResponse } from "next/server";
import { type Core, createCore } from "@/lib/mcp/client/core/clientCore";
import { createMessage } from "@/lib/mcp/client/core/createMessage";
import { pickPreset } from "@/lib/mcp/client/core/prompts";

/**
 * Module-scoped singleton for the MCP "core"
 * This persists only for the lifetime of a warm function instance
 */
let coreSingleton: Core | null = null;

/**
 * Shared promise to de-duplicate concurrent connect attempts
 * Ensures we only perform one connect at a time per instance
 */
let connectPromise: Promise<void> | null = null;

// Lazily create or return the current core instance
const getCore = (): Core => {
  if (coreSingleton === null) {
    coreSingleton = createCore();
  }
  return coreSingleton;
};

// Ensure the core is connected to the MCP server
const ensureConnected = async (core: Core) => {
  if (core.isConnected()) return true;

  const url = process.env.MCP_SERVER_URL?.trim();
  if (!url) throw new Error("MCP_SERVER_URL not set");

  if (!connectPromise) {
    connectPromise = core.connectToMCPServer(url).finally(() => {
      // Always clear the promise so a future reconnect can be attempted
      connectPromise = null;
    });
  }

  // Await the shared connection attempt (or the existing in-flight one)
  await connectPromise;

  // Report final connection state
  return core.isConnected();
};

/**
 * GET handler:
 * - Ensures connection to the MCP server
 * - Returns currently available tools/resources/prompts and connection status
 */
export async function GET() {
  try {
    const core = getCore();
    await ensureConnected(core);

    return NextResponse.json({
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      connected: core.isConnected(),
    });
  } catch (error) {
    return NextResponse.json(
      { tools: [], resources: [], prompts: [], connected: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * POST handler:
 * - Accepts chat payload + options from the client
 * - Ensures connection and constructs a system preset
 * - Calls createMessage to run the LLM with MCP tools/resources/prompts
 * - Returns the model response plus metadata about used/available capabilities
 */
export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const {
      messages,
      customSystemPrompt,
      useResources,
      autoLoadAllResources,
      usedUserPrompt,
      selectedModel,
    } = body || {};

    const core = getCore();
    await ensureConnected(core);

    // Choose the system prompt: either a user-provided preset or the default from core
    const sysPreset = customSystemPrompt ? pickPreset(customSystemPrompt) : core.getSystemPrompt();

    // Execute the chat turn
    const result = await createMessage({
      core,
      sysPreset,
      chatMessages: messages,
      tools: core.getAvailableTools(),
      resources: core.getAvailableResources(),
      prompts: core.getAvailablePrompts(),
      usedUserPrompt,
      options: { useResources, autoLoadAllResources },
      selectedModel,
    });

    // Return the model response and a snapshot of used + available capabilities
    return NextResponse.json({
      response: result.response,
      toolsUsed: result.toolsUsed,
      resourcesUsed: result.resourcesUsed,
      promptsUsed: result.promptsUsed,
      availableTools: core.getAvailableTools(),
      availableResources: core.getAvailableResources(),
      availablePrompts: core.getAvailablePrompts(),
      connectedServers: core.isConnected() ? ["default"] : [],
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
