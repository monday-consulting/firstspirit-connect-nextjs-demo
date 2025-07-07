import "dotenv/config";
import type { ReadResourceResult } from "@modelcontextprotocol/sdk/types.js";
import { getNavigationStructure } from "@/gql/documents/navigation";
import type { Locale } from "next-intl";
import { stripNavigationFiles } from "@/utils/links";
import { getPageContentByRoute } from "@/gql/documents/pageContent";
import type {
  FirstSpiritInlinePageUnion8F4Ef8C0,
  FirstSpiritInlineSectionUnion638Da777,
  FirstSpiritNavigationItem,
  FirstSpiritPage,
  FirstSpiritPageBody,
  FirstSpiritSection,
  FirstSpiritSmartlivingProduct,
  FirstSpiritStructureItem,
  Maybe,
} from "@/gql/generated/graphql";
import { templates } from "@/gql/documents/mcp";
import { getAllProducts, getProductDetail } from "@/gql/documents/products";

export type NavigationEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

export type ProductEndpointProps = {
  name: string;
  title: string;
  description: string;
  content: string;
  uri: string;
};

// ====================================================================
// NETLIFY FUNCTION HANDLER
// ====================================================================

/**
 * Retrieves and processes page content for a specific route and locale
 * Converts FirstSpirit page data to markdown format
 */
export const getPageResource = async (
  uri: URL,
  locale: Locale,
  route: string | string[]
): Promise<ReadResourceResult> => {
  // Normalize route parameter
  let routeString: string;
  if (Array.isArray(route)) {
    routeString = route.join("/");
  } else {
    routeString = route;
  }

  if (!routeString) {
    throw new Error("Route parameter is required");
  }

  // Convert flat route back to original format
  const originalRoute = routeString.replace(/--/g, "/");
  console.log(`Processing route: ${routeString} -> ${originalRoute} for locale: ${locale}`);

  // Get page content and convert to markdown
  const pageContent = await turnPageContentIntoMarkdown(locale, originalRoute);

  const safeRoute = decodeURIComponent(routeString || "").replace(/\.\./g, ""); // Decode and sanitize route input
  return {
    contents: [
      {
        uri: safeRoute,
        mimeType: "text/markdown",
        text: pageContent,
      },
    ],
  };
};

// ====================================================================
// NAVIGATION PROCESSING
// ====================================================================

const generateDynamicDescription = ({
  name,
  content,
  fallback,
}: {
  name: string;
  content: string;
  fallback?: string;
}): string => {
  const firstParagraph = extractFirstParagraph(content);
  if (firstParagraph) {
    return firstParagraph.length > 150 ? `${firstParagraph.slice(0, 147)}...` : firstParagraph;
  }

  return fallback || `Technical documentation for ${name}.`;
};

const extractFirstParagraph = (markdown: string): string | null => {
  return (
    markdown
      .split(/\n\s*\n/) // split by empty lines
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith("#")) || null
  );
};

/**
 * Retrieves all available navigation and product endpoints for a given locale
 * Extracts routes from the navigation and product structure
 */
export const getNavigationEndpoints = async (
  locale: Locale
): Promise<NavigationEndpointProps[]> => {
  try {
    const structure = await getNavigationStructure(locale);
    const routes = extractRoutesFromStructure(structure as FirstSpiritStructureItem[]);

    const results = await Promise.all(
      routes.map(async (route) => {
        try {
          if (!process.env.MCP_RESOURCE_URL) {
            throw new Error("MCP_RESOURCE_URL is not defined in the environment variables.");
          }

          const uri = new URL(process.env.MCP_RESOURCE_URL);
          const resource = await getPageResource(uri, locale, route);

          const content = (resource.contents?.[0]?.text as string)?.trim();
          if (!content) {
            console.warn(
              `⚠️ Empty or missing content for page route: "${locale}/${route}" – skipping.`
            );
            return null;
          }
          const customName = `${locale}: /${route.replace(/\//g, "-")}`;

          const description = generateDynamicDescription({
            name: customName,
            content,
          });
          return {
            name: customName,
            title: `${customName} - Markdown content`,
            description: description,
            content,
            uri: `${locale}/${route}`,
          };
        } catch (err) {
          console.warn(`⚠️ Skipping failed page route "${route}" in locale "${locale}": ${err}`);
          return null;
        }
      })
    );

    // Filter out null values (failed or empty routes)
    return results.filter((r): r is NavigationEndpointProps => r !== null);
  } catch (error) {
    console.error(`❌ Error loading page content for locale ${locale}:`, error);
    return [];
  }
};

export const getProductEndpoints = async (locale: Locale): Promise<ProductEndpointProps[]> => {
  try {
    const structure = await getAllProducts(locale);
    const routes = extractRoutesFromProducts(structure); // → [{ slug, fsId }]

    const results = await Promise.all(
      routes.map(async ({ slug, fsId }) => {
        try {
          if (!slug || !fsId) {
            console.warn(`⚠️ Missing slug or fsId for product (locale: "${locale}") – skipping.`);
            return null;
          }

          // Fetch markdown content
          const content = (await turnProductContentIntoMarkdown(locale, fsId))?.trim();
          if (!content) {
            console.warn(`⚠️ Empty content for product "${fsId}" (locale: ${locale}) – skipping.`);
            return null;
          }
          const customName = `${locale}: /products/${slug.replace(/\//g, "-")}`;
          const description = generateDynamicDescription({
            name: customName,
            content,
          });
          return {
            name: customName,
            title: `${customName} - Markdown content`,
            description: description,
            content,
            uri: `dataset/${locale}/${slug}`,
          };
        } catch (err) {
          console.warn(`⚠️ Failed to process product: "${slug}" (${locale}):`, err);
          return null;
        }
      })
    );

    // Filter out null values (failed or empty products)
    return results.filter((r): r is ProductEndpointProps => r !== null);
  } catch (error) {
    console.error(`❌ Error loading product page content for locale ${locale}:`, error);
    return [];
  }
};

/**
 * Recursively extracts routes from navigation structure
 * Handles nested navigation items up to 3 levels deep
 */
const extractRoutesFromStructure = (structure: FirstSpiritStructureItem[]): string[] => {
  const routes: string[] = [];
  if (!structure || !Array.isArray(structure)) {
    return routes;
  }

  /**
   * Processes a single navigation item and its children
   * Extracts seoRoute and processes nested structureChildren
   */
  const processNavigationItem = (item: FirstSpiritNavigationItem | FirstSpiritStructureItem) => {
    if ("seoRoute" in item && item.seoRoute) {
      const cleanRoute = stripNavigationFiles(item.seoRoute);
      if (cleanRoute) {
        const normalizedRoute = cleanRoute.replace(/^\/|\/$/g, "");
        if (normalizedRoute) {
          routes.push(normalizedRoute);
        }
      }
    }

    // Recursively process children
    if ("structureChildren" in item && Array.isArray(item.structureChildren)) {
      for (const child of item.structureChildren) {
        if (child) {
          processNavigationItem(child);
        }
      }
    }
  };

  // Process navigation structure (3 levels: A -> B -> C)
  for (const layerA of structure) {
    if (layerA?.navigationItem) {
      processNavigationItem(layerA.navigationItem);

      // Process layer B
      if (layerA.structureChildren && Array.isArray(layerA.structureChildren)) {
        for (const layerB of layerA.structureChildren) {
          if (layerB?.navigationItem) {
            processNavigationItem(layerB.navigationItem);

            // Process layer C
            if (layerB.structureChildren && Array.isArray(layerB.structureChildren)) {
              for (const layerC of layerB.structureChildren) {
                if (layerC?.navigationItem) {
                  processNavigationItem(layerC.navigationItem);
                }
              }
            }
          }
        }
      }
    }
  }

  // Return unique routes only

  return [...new Set(routes)];
};

const extractRoutesFromProducts = (
  structure: { route: string; fsId: string }[]
): { slug: string; fsId: string }[] => {
  const routes: { slug: string; fsId: string }[] = [];

  for (const item of structure) {
    if (item?.route && typeof item.route === "string") {
      const cleanRoute = item.route
        .replace(/^\/|\/$/g, "") // Trim leading/trailing slashes
        .replace(/\.html$/, ""); // Remove .html extension

      if (cleanRoute && item.fsId) {
        routes.push({
          slug: cleanRoute.replace(/^(products|produkte)\//, ""),
          fsId: item.fsId,
        });
      }
    }
  }

  return routes;
};
// ====================================================================
// CONTENT PROCESSING & MARKDOWN GENERATION
// ====================================================================

/**
 * Retrieves page content from FirstSpirit by route and locale
 * Ensures proper route formatting with leading and trailing slashes
 */
const getPageContent = async (locale: Locale, route: string): Promise<FirstSpiritPage> => {
  if (!route) {
    throw new Error("Route is required");
  }

  // Decode uri to get umlaut
  const decodedRoute = decodeURIComponent(route);

  // Normalize route format
  const validRoute =
    decodedRoute.startsWith("/") && decodedRoute.endsWith("/")
      ? decodedRoute
      : `/${decodedRoute.replace(/^\/|\/$/g, "")}/`;

  return (await getPageContentByRoute(locale, validRoute)) as FirstSpiritPage;
};

/**
 * Main function to convert FirstSpirit page and product content to markdown
 * Orchestrates the entire conversion process
 */
const turnPageContentIntoMarkdown = async (locale: Locale, route: string): Promise<string> => {
  const pageContent: FirstSpiritPage = await getPageContent(locale, route);
  return processFirstSpiritPage(pageContent.data, pageContent);
};

const turnProductContentIntoMarkdown = async (locale: Locale, id: string): Promise<string> => {
  // @ts-expect-error
  const productDetail: FirstSpiritSmartlivingProduct = await getProductDetail(locale, id);

  return processFirstSpiritInlineSectionUnion(productDetail);
};

/**
 * Processes a FirstSpirit page and converts it to markdown
 * Handles different page types and their content structure
 */
const processFirstSpiritPage = (
  pageData: FirstSpiritInlinePageUnion8F4Ef8C0,
  pageContent: Maybe<FirstSpiritPage>
): string => {
  const pageMarkdown: string[] = [];

  // Process page header based on type
  if (pageData.__typename === "FirstSpiritStandard") {
    pageMarkdown.push(templates.standardPage(pageData));
  }

  // Process page body content
  if (pageContent?.pageBodies) {
    pageMarkdown.push(processFirstSpiritPageBodies(pageContent.pageBodies));
  }
  return pageMarkdown.join("");
};

/**
 * Processes page body sections and converts them to markdown
 * Handles different section types including references and datasets
 */
const processFirstSpiritPageBodies = (pageBodies: Maybe<FirstSpiritPageBody>[]): string => {
  const pageBodyMarkdown: string[] = [];

  for (const pageBody of pageBodies) {
    for (const child of pageBody?.children || []) {
      // Handle regular sections

      if (child?.__typename === "FirstSpiritSection") {
        pageBodyMarkdown.push(sectionProcessing(child));
      }

      // Handle content references (nested pages)
      else if (child.__typename === "FirstSpiritContent2Section") {
        // Handle content references (nested pages)
        if (child.fsReferences) {
          for (const reference of child.fsReferences) {
            // TODO: get Pages in FS Reference
            // pageBodyMarkdown.push(processFirstSpiritPage(reference?.ref?.data, reference?.ref));
          }
        }
      }

      // Handle datasets
      else if (child.__typename === "FirstSpiritDataset") {
        // TODO: Implement dataset processing
      }
    }
  }
  return pageBodyMarkdown.join("");
};
/**
 * Processes different types of FirstSpirit sections
 * Uses template functions to generate appropriate markdown
 */
export const processFirstSpiritInlineSectionUnion = (
  section: FirstSpiritInlineSectionUnion638Da777
): string => {
  switch (section.__typename) {
    case "FirstSpiritTeaser":
      return templates.teaser(section);

    case "FirstSpiritStage":
      return templates.stage(section);

    case "FirstSpiritTextImage":
      return templates.textImage(section);

    case "FirstSpiritProductCategoryTeaser":
      return templates.productCategoryTeaser(section);

    case "FirstSpiritAccordion":
      return templates.accordion(section);

    case "FirstSpiritSteps":
      return templates.steps(section);

    case "FirstSpiritFeatures":
      return templates.features(section);

    case "FirstSpiritGoogleMaps":
      return templates.googleMaps(section);

    case "FirstSpiritNewsOverview":
      return templates.newsOverview(section);

    case "FirstSpiritSmartlivingNews":
      return templates.smartLivingNews(section);

    case "FirstSpiritSmartlivingLocation":
      return templates.smartLivingLocation(section);

    case "FirstSpiritTable":
      return templates.table(section);

    case "FirstSpiritSmartlivingProduct":
      return templates.smartLivingProduct(section);
    default:
      console.warn("⚠️ Unhandled section type:", section.__typename);
      return "";
  }
};

/**
 * Processes a FirstSpirit section and its nested subsections
 * Handles both section data and nested section hierarchies
 */
const sectionProcessing = (section: FirstSpiritSection): string => {
  const sectionMarkdown: string[] = [];

  // Process section data
  if (section.data) {
    sectionMarkdown.push(processFirstSpiritInlineSectionUnion(section.data));
  }

  // Process nested subsections
  if (section.section) {
    for (const subsection of section.section) {
      if (subsection) {
        sectionMarkdown.push(sectionProcessing(subsection));
      }
    }
  }

  return sectionMarkdown.join("");
};
