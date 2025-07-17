import type { RequestEncoded } from "@effect/rpc/RpcMessage";
import { Layer } from "effect";
import * as Effect from "effect/Effect";
import { layerHandlers } from "./layers/layerHandlers";

// Type for the parsed JSON-RPC request body
export type parsedBody = {
  jsonrpc: "2.0";
  method: string;
  params: unknown;
  id: string | number;
};

// Factory function to create a JSON-RPC handler from method handlers and context info
export function createJsonRpcHandler(context: {
  traceId: string;
  spanId: string;
  sampled: boolean;
  headers: Record<string, string>;
}) {
  return (parsedBody: parsedBody) => {
    return Effect.gen(function* (_) {
      // Build the layer containing all RPC handlers
      const handlers = yield* Layer.build(layerHandlers({ name: "effect-mcp", version: "0.1.0" }));

      const methodKey = `@effect/rpc/Rpc/${parsedBody.method}`;

      // Get method handler from the handlers layer
      const handlerObj = handlers.unsafeMap.get(methodKey);
      if (!handlerObj) {
        throw new Error(`Unknown method ${parsedBody.method}`);
      }

      const req: RequestEncoded = {
        _tag: "Request",
        id: String(parsedBody.id),
        tag: parsedBody.method,
        payload: parsedBody.params,
        traceId: context.traceId,
        spanId: context.spanId,
        sampled: context.sampled,
        headers: Object.entries(context.headers),
      };

      // Cast to Effect<never> because the effect is fully provided with all required layers,
      // so it no longer needs any environment (R = never).
      const effect = handlerObj.handler(parsedBody.params) as Effect.Effect<never>;

      const result = yield* _(effect);

      return {
        jsonrpc: "2.0",
        id: req.id,
        result,
      };
    });
  };
}
