import "dotenv/config";

import { McpServer } from "@effect/ai";
import { Layer, Logger, Effect, pipe } from "effect";
import { NodeRuntime, NodeSink, NodeStream } from "@effect/platform-node";
import { createPageRoutesLayer } from "./utils/mcp/layers/pageLayer";
import { createProductRoutesLayer } from "./utils/mcp/layers/productLayer";
import { ClaudeSonnet35, ClaudeSonnet4 } from "./utils/mcp/promptBuilder";

// Permanent MCP server for local development

const main = Effect.gen(function* (_) {
  const pageRoutesLayer = yield* _(createPageRoutesLayer());
  const productRoutesLayer = yield* _(createProductRoutesLayer());

  // Build layer
  const ServerLayer = Layer.mergeAll(
    McpServer.layerStdio({
      name: "effect-mcp",
      version: "0.1.0",
      stdin: NodeStream.stdin,
      stdout: NodeSink.stdout,
    }),
    pageRoutesLayer,
    productRoutesLayer,
    ClaudeSonnet35,
    ClaudeSonnet4,
    Logger.add(Logger.prettyLogger({ stderr: true }))
  );

  // Start Layer
  yield* _(Layer.launch(ServerLayer));
});

NodeRuntime.runMain(main);
