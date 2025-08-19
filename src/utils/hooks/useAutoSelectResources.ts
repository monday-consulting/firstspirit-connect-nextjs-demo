import type { Resource } from "@modelcontextprotocol/sdk/types.js";
import { useEffect } from "react";

const extractPathFromName = (name: string) => name.split(" ").slice(2).join(" ");

export const useAutoSelectResources = (
  availableResources: Resource[],
  pathname: string | null,
  setSelectedResources: (value: string[]) => void
) => {
  useEffect(() => {
    if (!availableResources.length) return;
    let currentPath = (pathname || "")
      .replace(/^\/[a-z]{2}-[A-Z]{2}\//, "") // Replace locale prefix
      .replace(/^\/|\/$/g, ""); // Replace leading and trailing slashes
    if (currentPath === "") currentPath = "/";

    const match = availableResources.find((res) => extractPathFromName(res.name) === currentPath);
    setSelectedResources(match?.uri ? [match.uri] : []);
  }, [availableResources, pathname, setSelectedResources]);
};
