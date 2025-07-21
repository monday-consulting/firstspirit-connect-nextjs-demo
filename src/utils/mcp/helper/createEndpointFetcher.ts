import { Effect } from "effect";
import type { Locale } from "@/i18n/config";
import type { PageEndpointProps } from "../services/pageService";
import type { ProductEndpointProps } from "../services/productService";

type EndpointProps = PageEndpointProps | ProductEndpointProps;

// Creates a cached async endpoint loader for a given locale and data fetcher.
// The fetch function (loadFn) must return an Effect that resolves to a list of endpoints.

export function createEndpointFetcher<T extends EndpointProps>(
  locale: Locale,
  loadFn: (locale: Locale) => Effect.Effect<T[], Error, never>
): () => Promise<T[]> {
  let cached: T[] | undefined;

  // Used to track an in-progress fetch, to avoid duplicate requests
  let inProgress: Promise<T[]> | undefined;

  return async () => {
    // If we already have cached data, return it
    if (cached) return cached;

    if (!inProgress) {
      inProgress = Effect.runPromise(loadFn(locale));
    }

    cached = await inProgress;

    // Clear in-progress marker once done
    inProgress = undefined;

    return cached;
  };
}
