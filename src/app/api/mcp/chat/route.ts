import { NextResponse } from "next/server";
import { type Core, createCore } from "@/lib/mcp/client/core/clientCore";
import { createMessage } from "@/lib/mcp/client/core/createMessage";
import { pickPreset } from "@/lib/mcp/client/core/prompts";

/**
 * Module-scoped map of locale-specific cores
 * This persists only for the lifetime of a warm function instance
 */
const coresByLocale: Map<string, Core> = new Map();

/**
 * Shared promises to de-duplicate concurrent connect attempts per locale
 * Ensures we only perform one connect at a time per locale
 */
const connectPromises: Map<string, Promise<void>> = new Map();

// Lazily create or return the core instance for a specific locale
const getCore = (locale: string): Core => {
  if (!coresByLocale.has(locale)) {
    coresByLocale.set(locale, createCore());
  }

  const core = coresByLocale.get(locale);
  if (!core) throw new Error(`Failed to create core for locale: ${locale}`);

  return core;
};

// Ensure the core is connected to the MCP server with locale parameter
const ensureConnected = async (core: Core, locale: string) => {
  if (core.isConnected()) return true;

  const baseUrl = process.env.MCP_SERVER_URL?.trim();
  if (!baseUrl) throw new Error("MCP_SERVER_URL not set");

  // Append locale as query parameter to the server URL
  const url = `${baseUrl}?locale=${encodeURIComponent(locale)}`;

  if (!connectPromises.has(locale)) {
    const promise = core.connectToMCPServer(url).finally(() => {
      // Always clear the promise so a future reconnect can be attempted
      connectPromises.delete(locale);
    });
    connectPromises.set(locale, promise);
  }

  // Await the shared connection attempt (or the existing in-flight one)
  const promise = connectPromises.get(locale);
  if (promise) {
    await promise;
  }

  // Report final connection state
  return core.isConnected();
};

/**
 * GET handler:
 * - Ensures connection to the MCP server for the specified locale
 * - Returns currently available tools/resources/prompts (server filters by locale)
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale") || "en-GB";

    const core = getCore(locale);
    await ensureConnected(core, locale);

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
 * - Calls createMessage to run the LLM with MCP tools/resources/prompts (server filters by locale)
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
      locale = "en-GB",
    } = body || {};

    const core = getCore(locale);
    await ensureConnected(core, locale);

    // Choose the system prompt: either a user-provided preset or the default from core
    const sysPreset = customSystemPrompt ? pickPreset(customSystemPrompt) : core.getSystemPrompt();

    // Execute the chat turn (server already filtered by locale, so we get locale-specific items)
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
