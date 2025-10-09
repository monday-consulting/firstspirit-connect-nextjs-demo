import type { Locale } from "next-intl";
import { getNavigationStructure } from "@/lib/gql/documents/navigation";
import { getPageContentByRoute } from "@/lib/gql/documents/pageContent";
import type { FirstSpiritPage, FirstSpiritStructureItem } from "@/lib/gql/generated/graphql";
import { extractRoutesFromStructure } from "../firstSpirit/extractStructureRoutes";
import { handleGraphQLError } from "../helper/graphqlErrorHandler";
import { turnPageContentIntoMarkdown } from "../markdown/contentToMarkdown";
import { generateDynamicDescription } from "../markdown/description";

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
export const getPageEndpoints = async (locale: Locale): Promise<PageEndpointProps[]> => {
  const structure = await getNavigationStructure(locale);

  const cleanedStructure = (structure ?? []).filter(
    // TypeScript type guard to filter out null values
    // Ensures the resulting array is typed as FirstSpiritStructureItem[], not (FirstSpiritStructureItem | null)[]
    (item): item is FirstSpiritStructureItem => item !== null
  );

  const routes = extractRoutesFromStructure(cleanedStructure);

  // Process all routes in parallel for better performance
  const results = await Promise.all(routes.map((route) => processPage(locale, route)));

  return results.flat();
};

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
export const processPage = async (locale: Locale, route: string): Promise<PageEndpointProps[]> => {
  try {
    // Get page content and convert to markdown
    const content = await turnPageContentIntoMarkdown(locale, route);

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
  } catch (error) {
    handleGraphQLError(error, "Page processing", route);
    return [];
  }
};

/**
 * Retrieves page content from FirstSpirit by route and locale
 */
export const getPageContent = async (locale: Locale, route: string): Promise<FirstSpiritPage> => {
  const decodedRoute = decodeURIComponent(route);
  const validRoute =
    decodedRoute.startsWith("/") && decodedRoute.endsWith("/")
      ? decodedRoute
      : `/${decodedRoute.replace(/^\/|\/$/g, "")}/`;

  const result = await getPageContentByRoute(locale, validRoute);
  return result as FirstSpiritPage;
};
