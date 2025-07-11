import { getNavigationStructure } from "@/gql/documents/navigation";
import type { FirstSpiritPage, FirstSpiritStructureItem } from "@/gql/generated/graphql";
import type { Locale } from "next-intl";
import { generateDynamicDescription } from "../description";
import { extractRoutesFromStructure } from "../firstSpirit/extractRoutes";
import { turnPageContentIntoMarkdown } from "../firstSpirit/markdownConverter";
import { Effect } from "effect";
import { getPageContentByRoute } from "@/gql/documents/pageContent";

export type PageEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

export const getPageEndpoints = (locale: Locale) =>
  Effect.gen(function* () {
    const structure = yield* Effect.tryPromise(() => getNavigationStructure(locale)).pipe(
      Effect.mapError(
        (error) =>
          new Error(`Failed to fetch navigation structure for locale ${locale}: ${String(error)}`)
      )
    );

    const cleanedStructure = (structure ?? []).filter(
      // TypeScript type guard to filter out null values
      // Ensures the resulting array is typed as FirstSpiritStructureItem[], not (FirstSpiritStructureItem | null)[]
      (item): item is FirstSpiritStructureItem => item !== null
    );

    const routes = extractRoutesFromStructure(cleanedStructure);

    const flattened = yield* Effect.forEach(routes, (route) => processPage(locale, route)).pipe(
      Effect.map((results) => results.flat())
    );

    return flattened;
  });

export const processPage = (
  locale: Locale,
  route: string
): Effect.Effect<PageEndpointProps[], Error> =>
  Effect.gen(function* (_) {
    // Get page content and convert to markdown
    const content = yield* turnPageContentIntoMarkdown(locale, route).pipe(
      Effect.tapError((error) =>
        Effect.sync(() => console.warn(`⚠️ Could not process ${route}: ${String(error)}`))
      ),
      Effect.catchAll(() => Effect.succeed("")) // only fallback if needed
    );

    const customName = `${locale}: /${route}`;

    const description = generateDynamicDescription({
      name: customName,
      content,
    });
    return [
      {
        name: customName,
        title: `${customName} - Markdown content`,
        description: description,
        content,
        uri: `${locale}/${route}`,
      },
    ];
  });

/**
 * Retrieves page content from FirstSpirit by route and locale
 */
export const getPageContent = (
  locale: Locale,
  route: string
): Effect.Effect<FirstSpiritPage, Error> =>
  Effect.gen(function* () {
    const decodedRoute = decodeURIComponent(route);
    const validRoute =
      decodedRoute.startsWith("/") && decodedRoute.endsWith("/")
        ? decodedRoute
        : `/${decodedRoute.replace(/^\/|\/$/g, "")}/`;

    const result = yield* Effect.tryPromise({
      try: () => getPageContentByRoute(locale, validRoute),
      catch: () => new Error("Failed to fetch page content"),
    });

    return result as FirstSpiritPage;
  });
