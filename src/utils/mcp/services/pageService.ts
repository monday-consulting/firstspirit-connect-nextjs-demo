import { getNavigationStructure } from "@/gql/documents/navigation";
import type { FirstSpiritPage, FirstSpiritStructureItem } from "@/gql/generated/graphql";
import type { Locale } from "next-intl";
import { extractRoutesFromStructure } from "../firstSpirit/extractStructureRoutes";
import { generateDynamicDescription } from "../markdown/description";

import { getPageContentByRoute } from "@/gql/documents/pageContent";
import { Effect } from "effect";
import { turnPageContentIntoMarkdown } from "../markdown/contentToMarkdown";

export type PageEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

/**
 * Retrieves and processes all available page endpoints for a given locale.
 *
 * This function:
 * - Fetches the navigation structure for the specified locale.
 * - Filters out any null entries from the structure.
 * - Extracts all routes from the navigation structure.
 * - Processes each route to fetch and transform its page content into Markdown.
 * - Returns a flat list of PageEndpointProps (name, title, description, content, uri).
 *
 * Used by MCP resource templates to provide a list of available pages.
 */
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

/**
 * Processes a single page route and converts it into a PageEndpointProps object.
 *
 * This function:
 * - Tries to fetch and transform page content from FirstSpirit into Markdown.
 * - Logs a warning if the content cannot be retrieved, but continues with fallback logic.
 * - Returns a structured object with metadata and content, or an empty array if no content exists.
 *
 * The result is used for rendering and autocomplete in the MCP page resource.
 */
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
      Effect.catchAll(() => Effect.succeed(""))
    );

    if (!content.trim()) return [];

    const description = generateDynamicDescription({
      name: route,
      content,
    });

    return [
      {
        name: route,
        title: `${route} - Markdown content`,
        description: description,
        content,
        uri: `${route}`,
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
