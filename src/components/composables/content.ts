import { useState, useCallback } from "react";
import { Page, Dataset } from "fsxa-api";

export function useContent() {
    const [currentDataset, setCurrentDataset] = useState<Dataset | null>(null);
    const [cachedDatasets, setCachedDatasets] = useState<{
        [caasId: string]: Dataset;
    }>({});

    /**
     * Find dataset in cache by route
     * @param route Route
     * @returns Dataset or undefined
     */
    // useCallBack is used to renew the function only if cachedDataSets change to improve the efficiency
    const findCachedDatasetByRoute = useCallback(
        (route: string) => {
            return cachedDatasets[route];
        },
        [cachedDatasets]
    );

    /**
     * Add dataset to cache for given route if it has not been cached yet
     * @param route Route
     * @param data Dataset
     * @returns
     */
    const addToCachedDatasets = useCallback((route: string, data: Dataset) => {
        setCachedDatasets((prev) => ({
            ...prev,
            [route]: prev[route] || data,
        }));
    }, []);

    const [currentPage, setCurrentPage] = useState<Page | null>(null);
    const [cachedPages, setCachedPages] = useState<{ [caasId: string]: Page }>(
        {}
    );

    /**
     * Find page in cache by route
     * @param route Route
     * @returns page or undefined
     */
    const findCachedPageByRoute = useCallback(
        (route: string) => {
            return cachedPages[route];
        },
        [cachedPages]
    );

    /**
     * Add page to cache for given route if it has not been cached yet
     * @param route Route
     * @param page Page
     * @returns
     */
    const addToCachedPages = useCallback((route: string, data: Page) => {
        setCachedPages((prev) => ({
            ...prev,
            [route]: prev[route] || data,
        }));
    }, []);

    // safe cachedProduct as Datasets
    const [cachedProducts, setCachedProducts] = useState<{
        [caasId: string]: Dataset[];
    }>({});

    /**
     * Find products in cache by route
     * @param route Route
     * @returns products or undefined
     */
    const findCachedProductsByRoute = useCallback(
        (route: string) => {
            return cachedProducts[route];
        },
        [cachedProducts]
    );

    /**
     * Add products to cache for given route if they have not been cached yet
     * @param route Route
     * @param data Dataset[]
     * @returns
     */
    const addToCachedProducts = useCallback(
        (route: string, data: Dataset[]) => {
            setCachedProducts((prev) => ({
                ...prev,
                [route]: prev[route] || data,
            }));
        },
        []
    );

    return {
        currentPage,
        setCurrentPage,
        currentDataset,
        setCurrentDataset,
        cachedPages,
        cachedDatasets,
        cachedProducts,
        addToCachedPages,
        addToCachedDatasets,
        addToCachedProducts,
        findCachedPageByRoute,
        findCachedDatasetByRoute,
        findCachedProductsByRoute,
    };
}
