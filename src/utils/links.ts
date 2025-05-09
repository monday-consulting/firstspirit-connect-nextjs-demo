import type { FirstSpiritLinkUnion } from "@/gql/generated/graphql";
import { type Locale, defaultLocale } from "@/i18n/config";
import type { LinkData } from "@/types";
import { removeSpecialCharacters, replaceUmlauts } from "./strings";

export const stripNavigationFiles = (path: string | null | undefined): string => {
  if (!path) return "";

  // Remove the last part if it has a file extension
  return path.replace(/\/[^\/]*\.[^\/]*$/, "/");
};

export const parseLink = (str: string) => {
  // Convert to lowercase, replace spaces with hyphens, and remove special characters
  let cleanStr = str.toLowerCase().replace(/\s/g, "-");
  cleanStr = replaceUmlauts(cleanStr);
  cleanStr = removeSpecialCharacters(cleanStr);
  return cleanStr;
};

export const getProductDetailLink = (id: string, locale: Locale) =>
  `/${locale === defaultLocale ? "product-detail" : "produkt-detail"}/${parseLink(id)}`;

export const getProductGroupLink = (groupName: string) => `${parseLink(groupName)}`;

export const getNewsDetailLink = (name: string) => `/news/${parseLink(name)}`;

export const getConnectorLink = (link?: FirstSpiritLinkUnion | null): LinkData => {
  const defaultLink = { href: "/", label: "Home" };
  if (!link) return defaultLink;

  switch (link.__typename) {
    case "FirstSpiritInternalLink":
      if (link.ltLink?.__typename === "FirstSpiritPageRef") {
        return { href: stripNavigationFiles(link.ltLink.page?.route), label: link.ltText || "" };
      }
      return defaultLink;
    default:
      return defaultLink;
  }
};
