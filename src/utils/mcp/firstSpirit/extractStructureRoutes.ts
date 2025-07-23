import type { FirstSpiritStructureItem } from "@/gql/generated/graphql";
import { stripNavigationFiles } from "../../links";

export const encodeRoute = (route: string) => route.replace(/\//g, "--");
export const decodeRoute = (route: string) => route.replace(/--/g, "/");

/**
 * Recursively extracts routes from navigation structure
 */
export const extractRoutesFromStructure = (structure: FirstSpiritStructureItem[]): string[] => {
  const routes = new Set<string>();

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
