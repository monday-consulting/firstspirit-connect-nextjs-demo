import { McpServer } from "@effect/ai";
import { Effect, Layer, Logger, pipe } from "effect";
import { createJsonRpcHandler, type parsedBody } from "../../../src/utils/mcp/createJsonRpcHandler"; // dein JSON-RPC Handler
import { NodeHttpClient } from "@effect/platform-node";
import { createPageRoutesLayer } from "@/utils/mcp/layers/pageLayer";
import { createProductRoutesLayer } from "@/utils/mcp/layers/productLayer";
import { ClaudeSonnet35, ClaudeSonnet4 } from "../../../src/utils/mcp/promptBuilder";

export const handler = (event: { body?: string; headers: Record<string, string | undefined> }) =>
  pipe(
    Effect.gen(function* (_) {
      if (!event.body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Missing request body" }),
        };
      }

      const parsedBody: parsedBody = yield* _(
        Effect.sync(() => {
          if (!event.body) throw new Error("Missing request body");
          return JSON.parse(event.body);
        })
      );

      // Dynamically create layers for page routes and product routes
      const pageRoutesLayer = yield* _(createPageRoutesLayer());
      const productRoutesLayer = yield* _(createProductRoutesLayer());

      // Merge all layers into a full MCP layer
      const fullMcpLayer = Layer.mergeAll(
        McpServer.layerHttp({
          name: "Netlify MCP Server",
          version: "1.0.0",
          path: "/mcp",
        }),
        pageRoutesLayer,
        productRoutesLayer,
        ClaudeSonnet35,
        ClaudeSonnet4,
        Logger.add(Logger.prettyLogger({ stderr: true })),
        NodeHttpClient.layerUndici
      );

      // Normalize and lowercase headers from the event; fill missing headers with empty string
      const headers = Object.fromEntries(
        Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value ?? ""])
      );

      // Header context (for the schema)
      const context = {
        headers,
        traceId: headers["x-trace-id"] ?? "default-trace-id",
        spanId: headers["x-span-id"] ?? "default-span-id",
        sampled: headers["x-sampled"] === "1",
      };

      // Create the JSON-RPC handler with defined MCP methods and pass the context
      const jsonRpcHandler = createJsonRpcHandler(
        {
          initialize: () => Effect.succeed({ serverVersion: "1.0.0", message: "MCP ready" }),
          "resources/list": () =>
            Effect.gen(function* (_) {
              const mcp = yield* _(McpServer.McpServer);
              return mcp.resources;
            }),
          "resources/read": (params: { uri: string }) =>
            Effect.gen(function* (_) {
              const mcp = yield* _(McpServer.McpServer);
              return yield* _(mcp.findResource(params.uri));
            }),
          "prompts/list": () =>
            Effect.gen(function* (_) {
              const mcp = yield* _(McpServer.McpServer);
              return mcp.prompts;
            }),
          "prompts/get": (params: { name: string; arguments: { message: string } }) =>
            Effect.gen(function* (_) {
              const mcp = yield* _(McpServer.McpServer);
              return yield* _(mcp.getPromptResult(params));
            }),
        },
        context
      );

      // Run the JSON-RPC handler with parsedBody, producing an Effect that needs dependencies.
      // `Effect.provide(fullMcpLayer)` injects required services (e.g. server, logger) into the Effect.
      // `yield* _(...)` executes the Effect, waits for completion, and stores the result in `response`.
      const response = yield* _(jsonRpcHandler(parsedBody).pipe(Effect.provide(fullMcpLayer)));

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
      };
    }),
    Effect.catchAll((error) =>
      Effect.succeed({
        statusCode: 500,
        body: JSON.stringify({ error: String(error) }),
      })
    ),
    Effect.runPromise
  );
