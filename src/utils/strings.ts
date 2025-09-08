import type { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Locale } from "@/i18n/config";

export const renderLine = (prefix = "", content?: string | null, appendNewline = false): string => {
  if (!content || content.trim() === "") return "";

  const hasNewline = content.includes("\n");
  const suffix = appendNewline && !hasNewline ? "\n\n" : "";

  return `${prefix}${content}${suffix}`;
};
export const replaceUmlauts = (str: string): string => {
  const umlautMap: { [key: string]: string } = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    Ä: "Ae",
    Ö: "Oe",
    Ü: "Ue",
    ß: "ss",
  };

  return str.replace(/[äöüÄÖÜß]/g, (match) => umlautMap[match]);
};

export const removeSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9-]/g, "");
};

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const levenshteinDistance = (str1: string, str2: string): number => {
  const len1 = str1.length;
  const len2 = str2.length;

  const dp: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(null));

  for (let i = 0; i <= len1; i++) dp[i][0] = i;
  for (let j = 0; j <= len2; j++) dp[0][j] = j;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  return dp[len1][len2];
};

export const fuzzySearchObjects = <T>(
  query: string,
  objects: T[],
  property: keyof T,
  maxDistance = 2
): T[] => {
  const lowercaseQuery = query.toLowerCase();

  return objects
    .map((obj) => {
      const value = String(obj[property]).toLowerCase();
      const isSubstring = value.includes(lowercaseQuery);
      const distance = levenshteinDistance(lowercaseQuery, value);

      return {
        obj,
        isSubstring,
        distance,
      };
    })
    .filter((item) => item.isSubstring || item.distance <= maxDistance)
    .sort((a, b) => {
      if (a.isSubstring && !b.isSubstring) return -1;
      if (!a.isSubstring && b.isSubstring) return 1;
      return a.distance - b.distance;
    })
    .map((item) => item.obj);
};

export const sanitizeSlug = (slug: string) => {
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const isLocale = (segment: string): segment is Locale => {
  return segment === "de-DE" || segment === "en-GB";
};

export const normalizePath = (pathname: string): { locale: Locale; segments: string[] } => {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0] ?? "";
  const firstIsLocale = isLocale(first);

  const locale = firstIsLocale ? first : "en-GB";
  const segments = firstIsLocale ? parts.slice(1) : parts;
  return { locale, segments };
};

// Stable key (flattened and sorted)
export const stableKey = (name: string, input: unknown): string => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return `${name}:${JSON.stringify(input)}`;
  }
  const obj = input as Record<string, unknown>;
  const sorted = Object.keys(obj)
    .sort()
    .reduce<Record<string, unknown>>((acc, k) => {
      acc[k] = obj[k];
      return acc;
    }, {});
  return `${name}:${JSON.stringify(sorted)}`;
};

// Normalize tool content
export const normalizeToolContent = (c: ToolResultBlockParam["content"]): string => {
  if (typeof c === "string") return c;
  if (c == null) return "";
  return JSON.stringify(c);
};
