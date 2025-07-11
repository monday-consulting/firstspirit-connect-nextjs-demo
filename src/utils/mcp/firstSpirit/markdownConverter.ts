import type { Locale } from "next-intl";
import { processFirstSpiritInlineSectionUnion, processFirstSpiritPage } from "./typeHelper";

import { getProductDetail } from "@/gql/documents/products";
import { Effect } from "effect";
import { getPageContent } from "../services/pageService";

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

export const turnProductContentIntoMarkdown = (
  locale: Locale,
  id: string
): Effect.Effect<string, Error> =>
  Effect.gen(function* () {
    const productDetail = yield* Effect.tryPromise(() => getProductDetail(locale, id)).pipe(
      Effect.mapError((error) => new Error(`Failed to fetch product detail: ${String(error)}`))
    );

    if (!productDetail) {
      console.warn(`⚠️ No product detail found for "${id}" (${locale})`);
      return "";
    }

    // @ts-expect-error:
    return yield* processFirstSpiritInlineSectionUnion(productDetail);
  });
