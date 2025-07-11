import type { FirstSpiritStructureItem } from "@/gql/generated/graphql";
import { stripNavigationFiles } from "@/utils/links";

/**
 * Recursively extracts routes from navigation structure
 */
export const extractRoutesFromStructure = (structure: FirstSpiritStructureItem[]): string[] => {
  const routes = new Set<string>();
  if (!structure || !Array.isArray(structure)) {
    return Array.from(routes);
  }

  /**
   * Processes a single navigation item and its children
   * Extracts seoRoute and processes nested structureChildren
   */
  const processNavigationItem = (item: FirstSpiritStructureItem) => {
    const nav = item.navigationItem;
    if (nav?.seoRoute) {
      const cleanRoute = stripNavigationFiles(nav.seoRoute);
      if (cleanRoute) {
        const normalizedRoute = cleanRoute.replace(/^\/|\/$/g, "");
        if (normalizedRoute) {
          routes.add(normalizedRoute);
        }
      }
    }

    if (Array.isArray(item.structureChildren)) {
      for (const child of item.structureChildren) {
        if (child) {
          processNavigationItem(child); // recursive
        }
      }
    }
  };

  for (const item of structure) {
    if (item) {
      processNavigationItem(item);
    }
  }

  return Array.from(routes);
};

export const extractRoutesFromProducts = (
  structure: { route: string; fsId: string }[]
): { slug: string; fsId: string }[] => {
  const seen = new Set<string>(); // Track already added slugs to avoid duplicates
  const routes: { slug: string; fsId: string }[] = [];

  for (const item of structure) {
    if (typeof item?.route === "string" && item.fsId) {
      const slug = item.route.replace(/\.html$/, "");

      // Add only if this slug hasn't been added yet
      if (!seen.has(slug)) {
        seen.add(slug);
        routes.push({ slug, fsId: item.fsId });
      }
    }
  }

  return routes;
};
