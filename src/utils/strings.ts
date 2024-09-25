import type { Locale } from "@/i18n/config";

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
  return str.replace(/[^a-zA-Z0-9\-]/g, "");
};

export const formatDate = (isoDate: string, locale: Locale): string => {
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
