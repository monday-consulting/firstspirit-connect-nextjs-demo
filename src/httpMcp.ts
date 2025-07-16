import "dotenv/config";

import { McpServer } from "@effect/ai";
import { HttpRouter } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Effect, Layer } from "effect";
import { createServer } from "node:http";
import { createPageRoutesLayer } from "./utils/mcp/layers/pageLayer";
import { createProductRoutesLayer } from "./utils/mcp/layers/productLayer";
import { ClaudeSonnet35, ClaudeSonnet4 } from "./utils/mcp/promptBuilder";

// Permanent MCP server for local development

const main = Effect.gen(function* (_) {
  const pageRoutesLayer = yield* _(createPageRoutesLayer());
  const productRoutesLayer = yield* _(createProductRoutesLayer());

  // Build layer
  const ServerLayer = Layer.mergeAll(
    pageRoutesLayer,
    productRoutesLayer,
    ClaudeSonnet35,
    ClaudeSonnet4,
    HttpRouter.Default.serve()
  ).pipe(
    Layer.provide(
      McpServer.layerHttp({
        name: "Demo Server",
        version: "1.0.0",
        path: "/mcp",
      })
    ),
    Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 }))
  );

  // Start Layer
  yield* _(Layer.launch(ServerLayer));
});

NodeRuntime.runMain(main);
