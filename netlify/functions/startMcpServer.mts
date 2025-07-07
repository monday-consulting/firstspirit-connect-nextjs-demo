import "dotenv/config";
import { McpServer } from "@effect/ai";
import { NodeRuntime, NodeSink, NodeStream } from "@effect/platform-node";
import { PageRoutes, ProductRoutes } from "./resourceLayers.ts";
import { Layer, Logger } from "effect";

McpServer.layerStdio({
  name: "effect-mcp",
  version: "0.1.0",
  stdin: NodeStream.stdin,
  stdout: NodeSink.stdout,
}).pipe(
  Layer.provide(await PageRoutes),
  Layer.provide(await ProductRoutes),
  Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true }))),
  // @ts-ignore
  Layer.launch,
  NodeRuntime.runMain
);
