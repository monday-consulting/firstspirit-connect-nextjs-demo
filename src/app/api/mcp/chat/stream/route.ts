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
 * POST handler for streaming chat:
 * - Accepts chat payload + options from the client
 * - Ensures connection and constructs a system preset
 * - Streams the response back as chunks become available
 * - Uses Server-Sent Events (SSE) to maintain the connection
 */
export async function POST(req: Request) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  // Helper to send SSE data
  const sendEvent = async (event: string, data: unknown) => {
    const sseData = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    await writer.write(encoder.encode(sseData));
  };

  // Helper to send error and close
  const sendError = async (error: string) => {
    await sendEvent("error", { error });
    await writer.close();
  };

  // Start processing in the background
  (async () => {
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
      const sysPreset = customSystemPrompt
        ? pickPreset(customSystemPrompt)
        : core.getSystemPrompt();

      // Send initial status
      await sendEvent("start", {
        availableTools: core.getAvailableTools(),
        availableResources: core.getAvailableResources(),
        availablePrompts: core.getAvailablePrompts(),
      });

      // For now, use the regular createMessage and send result in chunks
      // TODO: Implement proper streaming when AI SDK supports it better
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

      // Send the complete response as chunks to simulate streaming
      const chunks = result.response.split(" ");
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i] + (i < chunks.length - 1 ? " " : "");
        await sendEvent("chunk", {
          type: "text",
          content: chunk,
        });
        // Add a small delay to simulate streaming
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      await sendEvent("complete", {
        response: result.response,
        toolsUsed: result.toolsUsed,
        resourcesUsed: result.resourcesUsed,
        promptsUsed: result.promptsUsed,
        availableTools: core.getAvailableTools(),
        availableResources: core.getAvailableResources(),
        availablePrompts: core.getAvailablePrompts(),
        connectedServers: core.isConnected() ? ["default"] : [],
      });

      await writer.close();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      await sendError(errorMessage);
    }
  })();

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
