import React, { useState, useEffect, useMemo } from "react";
import "./styles.css";
import Questionmark from "./elements/Questionmark";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import Cross from "./elements/Cross";
import { useContent } from "./composables/content";
import { useNavigationData } from "./composables/navigation";

interface DevProps {
  currentDataMock?: Object;
  currentPageMock?: Object;
  content: unknown;
  componentName?: string;
}

const DevComponent = ({ content, componentName, currentDataMock, currentPageMock }: DevProps) => {
  const { activeNavigationItem } = useNavigationData();

  const { findCachedProductsByRoute, findCachedPageByRoute, findCachedDatasetByRoute } =
    useContent();

  const [devComponentVisible, setDevComponentVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<"content" | "dataset" | "products" | "currentPage">(
    "content"
  );

  const route = decodeURIComponent(location.pathname);
  console.log("Route: ", route);

  const products = useMemo(() => {
    return findCachedProductsByRoute(route);
  }, [route, findCachedProductsByRoute]);

  // Memoized value for currentPage
  const currentPage = useMemo(() => {
    return { currentPageMock };
    //return findCachedPageByRoute(route);
  }, [route, findCachedPageByRoute]);

  // Memoized value for currentDataset
  const currentDataset = useMemo(() => {
    return { currentDataMock };
    //return findCachedDatasetByRoute(route)
  }, [route, findCachedDatasetByRoute]);

  // Computed value for isContentProjection
  const isContentProjection = useMemo(() => {
    return activeNavigationItem?.seoRouteRegex !== null;
  }, [activeNavigationItem]);

  // meomorize the variable for the actual content based on the active item
  const devContent = useMemo(() => {
    switch (activeItem) {
      case "content":
        return content;
      case "products":
        return products;
      case "currentPage":
        return currentPage;
      case "dataset":
        return currentDataset;
      default:
        return content;
    }
  }, [activeItem, content]);
  hljs.registerLanguage("json", json);

  const highlightedDevContent = useMemo(() => {
    const stringifiedDevContent = JSON.stringify(devContent, null, 2);
    return hljs.highlight("json", stringifiedDevContent).value;
  }, [devContent]);

  return (
    <div className={`absolute top-0 right-0 z-20 bg-white ${devComponentVisible ? "z-40" : ""}`}>
      <div>
        <button
          className="flex items-center p-2 text-gray-800 hover:text-yellow-500"
          onClick={() => setDevComponentVisible(!devComponentVisible)}
        >
          <Questionmark />
        </button>
      </div>

      {devComponentVisible && (
        <>
          <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-20 flex h-screen w-full max-w-4xl transform flex-col rounded-lg border bg-white shadow">
            <div className="flex p-4 text-gray-800">
              <div>
                <h2 className="font-bold text-lg">Component Info</h2>

                <p>
                  This{" "}
                  <span className={`${componentName ? "font-bold" : ""}`}>
                    {componentName || "component"}
                  </span>{" "}
                  has access to the following data:
                </p>
              </div>
              <button
                className="ml-auto h-10 w-10 rounded-full p-2 hover:bg-gray-200"
                onClick={() => setDevComponentVisible(false)}
              >
                <Cross />
              </button>
            </div>

            <div className="mx-4 mt-4 rounded-t text-gray-800 text-sm">
              <button
                className={`rounded-t p-2 font-bold text-white capitalize ${activeItem === "content" ? "bg-gray-800" : "bg-gray-600"}`}
                onClick={() => setActiveItem("content")}
              >
                {componentName} Data
              </button>

              {isContentProjection && (
                <button
                  className={`rounded-t p-2 font-bold text-white capitalize ${activeItem === "dataset" ? "bg-gray-800" : "bg-gray-600"}`}
                  onClick={() => setActiveItem("dataset")}
                >
                  Current Dataset
                </button>
              )}

              {!isContentProjection && (
                <button
                  className={`rounded-t p-2 font-bold text-white capitalize ${activeItem === "products" ? "bg-gray-800" : "bg-gray-600"}`}
                  onClick={() => setActiveItem("products")}
                >
                  Products
                </button>
              )}

              <button
                className={`rounded-t p-2 font-bold text-white capitalize ${activeItem === "currentPage" ? "bg-gray-800" : "bg-gray-600"}`}
                onClick={() => setActiveItem("currentPage")}
              >
                Current Page
              </button>
            </div>

            <div className="mx-4 mb-4 flex-1 overflow-scroll rounded-b rounded-tr bg-gray-800 p-4 text-sm text-white leading-7">
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightedDevContent,
                  }}
                />
              </pre>
            </div>
          </div>

          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50"
            onClick={() => setDevComponentVisible(false)}
          />
        </>
      )}
    </div>
  );
};

export default DevComponent;
