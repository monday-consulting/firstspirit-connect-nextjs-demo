import type { FetchNavigationParams, FSXAApi, NavigationData, NavigationItem } from "fsxa-api";

interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    fsxaApi: any;
  route: string;
}
/**
 * Get the corresponding navigation item to the provided route from the navigation service.
 * This function is used in middleware to always provide a navigation item for a given route.
 * @param fsxaApi Instance of the FSXA Api
 * @param route Route
 * @throws Error if navigation item cannot be fetched or if the navigation data is missing route information
 * @returns Navigation Item
 */
export const fetchNavigationItemFromRoute = async ({
  fsxaApi,
  route,
}: Props): Promise<NavigationItem> => {
  try {
    let data: NavigationData | null = null;

    data = await fsxaApi.fetchNavigation({
      initialPath: route,
      locale: "",
    });

    if (!data) {
      throw new Error("No navigation data found");
    }

    // If any of the following lines throw an error, the Navigation Service is probably broken?
    const seoRouteId = data.seoRouteMap[route === "/" ? data.pages.index : route];
    if (!seoRouteId) {
      throw new Error("No matching route found");
    }

    const item = data.idMap[seoRouteId];
    if (!item) {
      throw new Error("No navigation item found");
    }

    return item;
  } catch (error) {
    console.error("Error fetching navigation item from route:", error);
    throw error;
  }
};

/**
 * Fetch navigation data from navigation service
 * @param fsxaApi Instance of the FSXA Api
 * @param locale Locale
 * @returns Navigation Data
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export  const fetchTopLevelNavigation = (fsxaApi: any, locale: string) => {
  return fsxaApi.fetchNavigation({
    locale,
  });
};

/**
 * Get the locale from navigation item. This function is used in middleware to always provide the locale of a given route.
 * @param navigationItem Navigation Item
 * @throws Error if locale cannot be extracted from navigation item
 * @returns Locale
 */
export const getLocaleFromNavigationItem = (navigationItem: NavigationItem): string => {
  const contentReference = navigationItem?.contentReference;

  if (!contentReference) {
    throw new Error("No valid contentReference found");
  }

  const splitted = contentReference.split(".");

  if (splitted.length < 2) {
    throw new Error("No valid contentReference found");
  }

  const locale = splitted.pop();

  if (!locale) {
    throw new Error("No locale found");
  }

  return locale;
};
