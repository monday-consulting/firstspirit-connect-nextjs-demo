import { NextResponse } from "next/server";
import { type Core, createCore } from "@/lib/mcp/client/core/clientCore";
import { pickPreset } from "@/lib/mcp/client/core/prompts";
import { streamMessage } from "@/lib/mcp/client/core/streamMessage";

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

      // Use real streaming with streamText from AI SDK
      const { stream, resourcesUsed, promptsUsed, continueAfterTools } = await streamMessage({
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

      // Stream all chunks as they arrive
      let fullResponse = "";

      for await (const part of stream.fullStream) {
        if (part.type === "text-delta") {
          fullResponse += part.text;
          await sendEvent("chunk", {
            type: "text",
            content: part.text,
          });
        }
      }

      // Wait for stream completion and handle multi-turn tool execution
      const finalResult = await stream;
      const response = await finalResult.response;
      const responseMessages = response.messages;

      // Try to get text, but handle the case where it might be unavailable after tool calls
      let text = "";
      try {
        text = await finalResult.text;
      } catch {
        // If text throws (e.g., after tool execution), that's expected
        // Continue with the tool execution flow
      }

      // Extract tool usage from response messages
      const toolsUsed: Array<{ name: string; input: unknown; output: unknown }> = [];
      for (const msg of responseMessages) {
        if (msg.role === "assistant" && Array.isArray(msg.content)) {
          for (const part of msg.content) {
            if (part.type === "tool-call") {
              toolsUsed.push({
                name: part.toolName,
                input: part.input,
                output: undefined,
              });
            }
          }
        }
      }

      // AI SDK v5 doesn't automatically continue after tool execution
      // We need to manually call the LLM again to get the final response
      // This happens when: tools were called but no text was streamed
      const needsContinuation = toolsUsed.length > 0 && !fullResponse && !text;

      if (needsContinuation) {
        const continuedMessages = [...messages, ...responseMessages];
        const continuedText = await continueAfterTools(continuedMessages, locale);

        if (continuedText) {
          fullResponse = continuedText;
          await sendEvent("chunk", {
            type: "text",
            content: continuedText,
          });
        }
      } else if (!fullResponse && text) {
        // If no text was streamed but finalResult.text has content, use that
        fullResponse = text;
        await sendEvent("chunk", {
          type: "text",
          content: text,
        });
      }

      await sendEvent("complete", {
        response: fullResponse,
        toolsUsed,
        resourcesUsed,
        promptsUsed,
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
