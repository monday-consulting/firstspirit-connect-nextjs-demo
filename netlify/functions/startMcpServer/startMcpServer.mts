import "dotenv/config";

import { McpServer } from "@effect/ai";
import { Layer, Logger } from "effect";
import { NodeRuntime, NodeSink, NodeStream } from "@effect/platform-node";

import { CypherAlpha, ClaudeSonnet35, ClaudeSonnet4 } from "./promptBuilder.js";
import { PageRoutesLayer } from "../../../src/utils/mcp/layers/pageLayer.js";
import { ProductRoutesLayer } from "../../../src/utils/mcp/layers/productLayer.js";
export default async () => {
  await McpServer.layerStdio({
    name: "effect-mcp",
    version: "0.1.0",
    stdin: NodeStream.stdin,
    stdout: NodeSink.stdout,
  }).pipe(
    Layer.provide(CypherAlpha),
    Layer.provide(ClaudeSonnet35),
    Layer.provide(ClaudeSonnet4),
    Layer.provide(PageRoutesLayer),
    Layer.provide(ProductRoutesLayer),
    Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true }))),
    Layer.launch,
    NodeRuntime.runMain
  );
};
