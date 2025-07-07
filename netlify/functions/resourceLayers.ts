import { McpServer } from "@effect/ai";
import { NodeHttpClient } from "@effect/platform-node";
import { getNavigationEndpoints, getProductEndpoints } from "./resourceBuilder.js";
import { Effect, Layer } from "effect";
import { locales } from "@/i18n/config.js";

// @ts-ignore
export const PageRoutes: Promise<Layer.Layer<never, never, unknown>> = (async () => {
  const localeLayers = await Promise.all(
    locales.map(async (locale) => {
      const endpoints = await getNavigationEndpoints(locale);

      const resources = endpoints.map((e) =>
        McpServer.resource({
          uri: `${e.uri}`,
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
      // @ts-ignore
      return Layer.mergeAll(...resources).pipe(Layer.provide(NodeHttpClient.layerUndici));
    })
  );
  // @ts-ignore
  return Layer.mergeAll(...localeLayers);
})();
// @ts-ignore
export const ProductRoutes: Promise<Layer.Layer<never, never, unknown>> = (async () => {
  const allProductLayers: Layer.Layer<never, never, unknown>[] = [];

  for (const locale of locales) {
    const endpoints = await getProductEndpoints(locale);

    const resources = endpoints.map((e) =>
      McpServer.resource({
        uri: `${e.uri}`,
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

    if (resources.length > 0) {
      allProductLayers.push(
        // @ts-ignore
        Layer.mergeAll(...resources).pipe(Layer.provide(NodeHttpClient.layerUndici))
      );
    }
  }
  // @ts-ignore
  return Layer.mergeAll(...allProductLayers);
})();
