import { McpServer } from "@effect/ai";
import { Effect, Layer, Logger, pipe } from "effect";
import { createJsonRpcHandler, type parsedBody } from "@/utils/mcp/createJsonRpcHandler";
import { NodeHttpClient } from "@effect/platform-node";
import { createPageRoutesLayer } from "@/utils/mcp/layers/pageLayer";
import { createProductRoutesLayer } from "@/utils/mcp/layers/productLayer";
import { ClaudeSonnet35, ClaudeSonnet4 } from "@/utils/mcp/promptBuilder";

export const handler = (event: { body?: string; headers: Record<string, string | undefined> }) =>
  pipe(
    Effect.scoped(
      Effect.gen(function* (_) {
        if (!event.body) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing request body" }),
          };
        }

        const parsedBody: parsedBody = yield* _(Effect.sync(() => JSON.parse(event.body ?? "{}")));

        // Dynamically create layers for page routes and product routes
        const pageRoutesLayer = yield* _(createPageRoutesLayer());
        const productRoutesLayer = yield* _(createProductRoutesLayer());

        // Merge all layers together
        const fullMcpLayer = Layer.mergeAll(
          McpServer.layerHttp({
            name: "effect-mcp",
            version: "0.1.0",
            path: "/mcp",
          }),
          pageRoutesLayer,
          productRoutesLayer,
          ClaudeSonnet35,
          ClaudeSonnet4,
          Logger.add(Logger.prettyLogger({ stderr: true })),
          NodeHttpClient.layerUndici
        );

        // Normalize headers to lowercase and ensure no undefined values
        const headers = Object.fromEntries(
          Object.entries(event.headers || {}).map(([key, value]) => [
            key.toLowerCase(),
            value ?? "",
          ])
        );

        // Header context for the JSON-RPC handler
        const context = {
          headers,
          traceId: headers["x-trace-id"] ?? "default-trace-id",
          spanId: headers["x-span-id"] ?? "default-span-id",
          sampled: headers["x-sampled"] === "1",
        };

        // Create the JSON-RPC handler with the provided context
        const jsonRpcHandler = createJsonRpcHandler(context);

        // Parse the JSON-RPC request body and provide the full MCP layer
        const effect = jsonRpcHandler(parsedBody).pipe(Effect.provide(fullMcpLayer));

        const response = yield* _(effect);

        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        };
      })
    ),
    Effect.catchAll((error) =>
      Effect.succeed({
        statusCode: 500,
        body: JSON.stringify({ error: String(error) }),
      })
    ),
    Effect.runPromise
  );
