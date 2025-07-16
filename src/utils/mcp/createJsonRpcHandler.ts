import type { McpServer } from "@effect/ai";
import type { RequestEncoded } from "@effect/rpc/RpcMessage";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";

// Define the schema for validating the structure of the encoded request
const RequestEncodedSchema = Schema.Struct({
  _tag: Schema.Literal("Request"),
  id: Schema.String,
  tag: Schema.String,
  payload: Schema.Any,
  traceId: Schema.String,
  spanId: Schema.String,
  sampled: Schema.Boolean,
  headers: Schema.Array(Schema.Tuple(Schema.String, Schema.String)),
});

// Type for the parsed JSON-RPC request body
export type parsedBody = {
  jsonrpc: "2.0";
  method: string;
  params: unknown;
  id: string | number;
};

// Factory function to create a JSON-RPC handler from method handlers and context info
export function createJsonRpcHandler(
  handlers: Record<
    string,
    (params: { uri: string; name: string; arguments: { message: string } }) => Effect.Effect<
      unknown,
      Error,
      McpServer.McpServer
    >
  >,
  context: { traceId: string; spanId: string; sampled: boolean; headers: Record<string, string> }
) {
  // The returned function takes a parsed JSON-RPC request body and returns an Effect
  return (body: parsedBody) => {
    // This returns an Effect that processes the JSON-RPC request
    return Effect.gen(function* (_) {
      // Map the generic JSON-RPC body into the internal RequestEncoded shape
      const req: RequestEncoded = {
        _tag: "Request",
        id: String(body.id),
        tag: body.method,
        payload: body.params,
        traceId: context.traceId,
        spanId: context.spanId,
        sampled: context.sampled,
        headers: Object.entries(context.headers),
      };

      // Create a synchronous decoder function from schema to validate `req`
      const decodeRequest = Schema.decodeSync(RequestEncodedSchema);

      const decoded = yield* _(
        Effect.sync(() => decodeRequest(req)).pipe(
          Effect.catchAll((e) => Effect.fail(new Error(`Failed to decode request: ${String(e)}`)))
        )
      );

      // Lookup the handler function based on decoded method tag
      const handlerObj = yield* _(
        handlers[decoded.tag]
          ? Effect.succeed(handlers[decoded.tag])
          : Effect.fail(new Error(`Unknown method ${decoded.tag}`))
      );

      // Execute the handler with the decoded payload
      const result = yield* _(
        Effect.sync(() => handlerObj(decoded.payload)).pipe(
          Effect.catchAll((e) => Effect.fail(new Error(`Handler execution failed: ${String(e)}`)))
        )
      );

      // Return a successful JSON-RPC response object
      return {
        jsonrpc: "2.0",
        id: decoded.id,
        result: yield* result,
      };
    });
  };
}
