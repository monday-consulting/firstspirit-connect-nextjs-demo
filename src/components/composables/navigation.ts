import { useState, useCallback } from "react";
import type { NavigationData, NavigationItem } from "fsxa-api";
import { useNextApp } from "../tests/testutils/nextMocks";
import {
  fetchNavigationItemFromRoute,
  fetchTopLevelNavigation,
  getLocaleFromNavigationItem,
} from "../utils/fsxa";
import { useLocale } from "./locale";

const { $createContentApi } = useNextApp();
const fsxaApi = $createContentApi();

export function useNavigationData() {
  const [navigationData, setNavigationData] = useState<NavigationData | null>(null);
  const [cachedNavigationData, setCachedNavigationData] = useState<{
    [locale: string]: NavigationData;
  }>({});
  const [activeNavigationItem, setActiveNavigationItem] = useState<NavigationItem | undefined>(
    undefined
  );
  const { config: localeConfig, activeLocale, setActiveLocale } = useLocale();
  console.log(setActiveLocale);

  /**
   * Get's navigation data from cache if it exists, otherwise fetches it from the FSXA Api
   * @param locale Locale identifier
   * @returns Navigation data or null
   */
  const fetchNavigationData = useCallback(
    async (locale: string) => {
      return cachedNavigationData[locale] || (await fsxaApi.fetchNavigation({ locale }));
    },
    [cachedNavigationData]
  );

  /**
   * Sets navigationData state and stores it under its locale in cachedNavigationData
   * @param data Navigation data
   */
  const setNavigationDataAndCache = useCallback((data: NavigationData) => {
    setNavigationData(data);
    const locale = data.meta.identifier.languageId;
    setCachedNavigationData((prev) => ({
      ...prev,
      [locale]: data,
    }));
  }, []);

  /**
   * Find navigation item in navigation data by route
   * @param route
   * @returns Navigation item or null
   */
  const findNavigationItemByRoute = useCallback(
    (route: string) => {
      if (!navigationData) return null;
      const navItemId = navigationData.seoRouteMap[route];
      return navItemId ? navigationData.idMap[navItemId] : null;
    },
    [navigationData]
  );

  /**
   * Find navigation item in navigation data by id
   * @param id
   * @returns Navigation item or null
   */
  const findNavigationItemById = useCallback(
    (id: string) => {
      return navigationData?.idMap[id] ?? null;
    },
    [navigationData]
  );

  /**
   * Set activeLocale and activeNavigationItem based on the route
   * @param route
   */
  const determineNavigationStateFromRoute = useCallback(
    async (route: string) => {
      try {
        //TODO: type error
        const item =
          findNavigationItemByRoute(route) ||
          (await fetchNavigationItemFromRoute({ fsxaApi, route }));

        if (!item) {
          throw new Error("Navigation item not found for route");
        }

        const locale = getLocaleFromNavigationItem(item);
        setActiveLocale(locale);
        setActiveNavigationItem(item);
      } catch (error) {
        console.error("Error determining navigation state from route:", error);
      }
    },
    [setActiveLocale, setActiveNavigationItem] // Abhängigkeiten der useCallback-Hook
  );

  /**
   * Determines the route for '/'
   * @returns index route
   */
  const getIndexRoute = useCallback(async () => {
    if (!navigationData) {
      const fetchedData = await fetchTopLevelNavigation(
        fsxaApi,
        activeLocale ?? localeConfig.defaultLocale
      );
      setNavigationData(fetchedData);
      return fetchedData?.pages?.index;
    }
    return navigationData.pages?.index;
  }, [activeLocale, navigationData]);

  /**
   * Set the active navigation item
   * @param item Navigation item
   */
  const setActiveNavigationItemState = useCallback((item: NavigationItem) => {
    setActiveNavigationItem(item);
  }, []);

  return {
    fetchNavigationData,
    setNavigationData: setNavigationDataAndCache,
    findNavigationItemByRoute,
    findNavigationItemById,
    determineNavigationStateFromRoute,
    getIndexRoute,
    setActiveNavigationItem: setActiveNavigationItemState,
    activeNavigationItem,
    navigationData,
    cachedNavigationData,
  };
}
