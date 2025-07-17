import {
  ClientRpcs,
  InternalError,
  ListPromptsResult,
  ListResourcesResult,
  ListResourceTemplatesResult,
  ListToolsResult,
  type ServerCapabilities,
} from "@effect/ai/McpSchema";
import { McpServer } from "@effect/ai/McpServer";
import { Effect, type Types } from "effect";

const LATEST_PROTOCOL_VERSION = "2025-03-26";
const SUPPORTED_PROTOCOL_VERSIONS = [LATEST_PROTOCOL_VERSION, "2024-11-05", "2024-10-07"];

// Copied layerHandlers from SDK to export it for use in our code,
// because the original is internal and only used inside `run`,
// which we can't directly use in serverless setups.
// This allows us to build and provide handlers manually without changing SDK code.
export const layerHandlers = (serverInfo: {
  readonly name: string;
  readonly version: string;
}) =>
  ClientRpcs.toLayer(
    Effect.gen(function* () {
      const server = yield* McpServer;

      return {
        // Requests
        ping: () => Effect.succeed({}),
        initialize(params) {
          const requestedVersion = params.protocolVersion;
          const capabilities: Types.DeepMutable<ServerCapabilities> = {
            completions: {},
          };
          if (server.tools.length > 0) {
            capabilities.tools = { listChanged: true };
          }
          if (server.resources.length > 0 || server.resourceTemplates.length > 0) {
            capabilities.resources = {
              listChanged: true,
              subscribe: false,
            };
          }
          if (server.prompts.length > 0) {
            capabilities.prompts = { listChanged: true };
          }
          return Effect.succeed({
            capabilities,
            serverInfo,
            protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion)
              ? requestedVersion
              : LATEST_PROTOCOL_VERSION,
          });
        },
        "completion/complete": server.completion,
        "logging/setLevel": () => InternalError.notImplemented,
        "prompts/get": server.getPromptResult,
        "prompts/list": () => Effect.sync(() => new ListPromptsResult({ prompts: server.prompts })),
        "resources/list": () =>
          Effect.sync(() => new ListResourcesResult({ resources: server.resources })),
        "resources/read": ({ uri }) => server.findResource(uri),
        "resources/subscribe": () => InternalError.notImplemented,
        "resources/unsubscribe": () => InternalError.notImplemented,
        "resources/templates/list": () =>
          Effect.sync(
            () => new ListResourceTemplatesResult({ resourceTemplates: server.resourceTemplates })
          ),
        "tools/call": server.callTool,
        "tools/list": () => Effect.sync(() => new ListToolsResult({ tools: server.tools })),

        // Notifications
        "notifications/cancelled": (_) => Effect.void,
        "notifications/initialized": (_) => Effect.void,
        "notifications/progress": (_) => Effect.void,
        "notifications/roots/list_changed": (_) => Effect.void,
      };
    })
  );
