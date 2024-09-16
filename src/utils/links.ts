import { defaultLocale } from "@/i18n/config";
import { replaceUmlauts } from "./strings";

export const parseLink = (str: string) => replaceUmlauts(str.toLowerCase().replace(/\s/g, "-"));

export const getProductDetailLink = (id: string, locale: string) =>
  `/${locale === defaultLocale ? "produkt-detail" : "product-detail"}/${parseLink(id)}`;

export const getProductGroupLink = (groupName: string) => `${parseLink(groupName)}`;
