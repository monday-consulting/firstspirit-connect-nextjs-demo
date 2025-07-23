import { getAllProducts } from "@/gql/documents/products";
import type { Locale } from "next-intl";
import { generateDynamicDescription } from "../markdown/description";
import { Effect } from "effect";
import { turnProductContentIntoMarkdown } from "../markdown/contentToMarkdown";
import { extractRoutesFromProducts } from "../firstSpirit/extractProductRoutes";

export type ProductEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

export const getProductEndpoints = (locale: Locale) =>
  Effect.gen(function* () {
    const structure = yield* Effect.tryPromise({
      try: () => getAllProducts(locale),
      catch: (e) => new Error(`Failed to fetch products for locale ${locale}: ${String(e)}`),
    });
    const routes = extractRoutesFromProducts(structure);

    const flattened = yield* Effect.forEach(routes, ({ slug, fsId }) =>
      processProduct(locale, slug, fsId)
    ).pipe(Effect.map((results) => results.flat()));

    return flattened;
  });

export const processProduct = (
  locale: Locale,
  slug: string,
  fsId: string
): Effect.Effect<ProductEndpointProps[], Error> =>
  Effect.gen(function* (_) {
    const content = yield* turnProductContentIntoMarkdown(locale, fsId).pipe(
      Effect.tapError((error) =>
        Effect.sync(() => console.warn(`⚠️ Could not process: ${String(error)}`))
      ),
      Effect.catchAll(() => Effect.succeed("")) // only fallback if needed
    );

    if (!content.trim()) return [];

    const customName = `${locale}: ${slug}`;
    const description = generateDynamicDescription({
      name: customName,
      content,
    });

    return [
      {
        name: customName,
        title: `${customName} - Markdown content`,
        description,
        content: content.trim(),
        uri: `dataset/${locale}${slug}`,
      },
    ];
  });
