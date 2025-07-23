/**
 * Recursively extracts routes from products
 */
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
