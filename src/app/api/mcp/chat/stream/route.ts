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

  const stats = {
    startedAt: Date.now(),
    firstByteAt: 0,
    bytesSent: 0,
    chunksSent: 0,
  };

  // Helper to send SSE data
  const sendEvent = async (eventName: string, eventData: unknown) => {
    const frame = `event: ${eventName}\ndata: ${JSON.stringify(eventData)}\n\n`;
    const bytes = encoder.encode(frame);
    await writer.write(bytes);

    stats.bytesSent += bytes.byteLength;
    if (!stats.firstByteAt) {
      stats.firstByteAt = Date.now();
      console.log("[SSE] first-byte-sent", {
        afterMs: stats.firstByteAt - stats.startedAt,
      });
    }

    if (eventName === "chunk") {
      stats.chunksSent++;
      if (stats.chunksSent % 50 === 0) {
        console.log("[SSE] progress", {
          chunksSent: stats.chunksSent,
          bytesSent: stats.bytesSent,
          elapsedMs: Date.now() - stats.startedAt,
        });
      }
    } else {
      console.log("[SSE] event", {
        event: eventName,
        bytesSent: stats.bytesSent,
        elapsedMs: Date.now() - stats.startedAt,
      });
    }
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
        locale = "en-GB",
      } = body || {};

      const core = getCore(locale);
      await ensureConnected(core, locale);

      // Choose the system prompt: either a user-provided preset or the default from core
      const sysPreset = customSystemPrompt
        ? pickPreset(customSystemPrompt)
        : core.getSystemPrompt();

      // Send initial status (server already filtered by locale)
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
        locale,
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
