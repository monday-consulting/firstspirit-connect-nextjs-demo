import { McpServer } from "@effect/ai";
import { NodeHttpClient } from "@effect/platform-node";
import { Effect, Layer } from "effect";
import { locales } from "@/i18n/config.js";
import { getProductEndpoints } from "@/utils/mcp/services/productService";
import { Logger } from "effect";

export const ProductRoutes: Effect.Effect<Layer.Layer<never, never, never>, Error> = Effect.gen(
  function* () {
    const allProductLayers = yield* Effect.forEach(locales, (locale) =>
      Effect.gen(function* () {
        const endpoints = yield* getProductEndpoints(locale).pipe(
          // Get all product endpoints based on the locale
          Effect.catchAll((error) =>
            Effect.sync(() => {
              console.error(
                `❌ Could not build product routes for locale "${locale}": ${String(error)}`
              );
              throw new Error(`Product route generation failed for locale "${locale}"`);
            })
          )
        );

        // Build a layer for each product endpoint
        const layers = endpoints.map((e) =>
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

        // step 1: acc = Layer.empty
        // step 2: merge(Layer.empty, product1Layer) → Layer1
        // step 3: merge(Layer1, product2Layer) → Layer2
        // step 4: merge(Layer2, product3Layer) → Layer3 (=> final merged)
        // Layer.mergeAll need a not empty tupel - Layer.Empty - Like a "" of a required string value

        const merged = layers.reduce((acc, layer) => Layer.merge(acc, layer), Layer.empty);
        // Return merged product layer based on a locale
        return merged.pipe(Layer.provide(NodeHttpClient.layerUndici));
      })
    );

    // Final layer with all product layers
    const finalMergedLayer = allProductLayers.reduce(
      (acc, layer) => Layer.merge(acc, layer),
      Layer.empty
    );

    return finalMergedLayer;
  }
);

export const ProductRoutesLayer = await Effect.runPromise(ProductRoutes);
