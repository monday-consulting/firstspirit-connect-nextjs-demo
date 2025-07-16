import { McpServer } from "@effect/ai";
import { NodeHttpClient } from "@effect/platform-node";
import { Effect, Layer } from "effect";
import { locales } from "@/i18n/config.js";
import { getPageEndpoints } from "@/utils/mcp/services/pageService";

export const PageRoutes = Effect.gen(function* (_) {
  const allPageLayers = yield* Effect.forEach(locales, (locale) =>
    Effect.gen(function* (_) {
      const endpoints = yield* getPageEndpoints(locale).pipe(
        Effect.catchAll((error) =>
          Effect.sync(() => {
            console.error(
              `❌ Could not build page routes for locale "${locale}": ${String(error)}`
            );
            throw new Error(`Page route generation failed for locale "${locale}"`);
          })
        )
      );

      const layers = endpoints
        .filter((e) => e.content)
        .map((e) =>
          McpServer.resource({
            uri: e.uri,
            name: e.name,
            description: e.description,
            content: Effect.succeed({
              contents: [
                {
                  uri: e.uri,
                  text: e.content,
                  mimeType: "text/markdown",
                },
              ],
            }),
          })
        );

      const merged = layers.reduce((acc, layer) => Layer.merge(acc, layer), Layer.empty);

      return merged.pipe(Layer.provide(NodeHttpClient.layerUndici));
    })
  );

  const finalMergedLayer = allPageLayers.reduce(
    (acc, layer) => Layer.merge(acc, layer),
    Layer.empty
  );

  return finalMergedLayer;
});

export const createPageRoutesLayer = () => PageRoutes;
