import type { Locale } from "next-intl";

import { getProductDetail } from "@/lib/gql/documents/products";
import type { FirstSpiritInlineDatasetUnionB50D929C } from "@/lib/gql/generated/graphql";
import { Effect } from "effect";
import { processFirstSpirintInlineInput } from "../firstSpirit/processGenericTemplate";
import { processFirstSpiritPage } from "../firstSpirit/processPage";
import { getPageContent } from "../services/pageService";

/*
 * Get the page content for the given route and locale
 * Transform the content into markdown
 */
export const turnPageContentIntoMarkdown = (
  locale: Locale,
  route: string
): Effect.Effect<string, Error> =>
  Effect.gen(function* () {
    const pageContent = yield* getPageContent(locale, route).pipe(
      Effect.mapError((error) => new Error(`Failed to fetch page content: ${String(error)}`))
    );

    if (!pageContent?.data) {
      console.warn(`⚠️ Page content is missing 'data' for "${route}" (${locale})`);
      return "";
    }

    return yield* processFirstSpiritPage(pageContent.data, pageContent);
  });

/*
 * Get the product content for the given route and locale
 * Transform the content into markdown
 */
export const turnProductContentIntoMarkdown = (
  locale: Locale,
  id: string
): Effect.Effect<string, Error> =>
  Effect.gen(function* () {
    const productDetail = yield* Effect.tryPromise(() => getProductDetail(locale, id)).pipe(
      Effect.mapError((error) => new Error(`Failed to fetch product detail: ${String(error)}`))
    );

    return yield* processFirstSpirintInlineInput(
      productDetail as FirstSpiritInlineDatasetUnionB50D929C
    );
  });
