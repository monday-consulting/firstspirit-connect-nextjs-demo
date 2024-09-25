import { defaultLocale, type Locale } from "@/i18n/config";
import { removeSpecialCharacters, replaceUmlauts } from "./strings";

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
