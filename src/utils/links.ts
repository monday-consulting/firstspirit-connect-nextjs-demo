import { replaceUmlauts } from "./strings";

export const parseLink = (str: string) => replaceUmlauts(str.toLowerCase().replace(/\s/g, "-"));

export const getProductLink = (title: string) => `/product/${parseLink(title)}`;

export const getCategoryLink = (title: string) => `/category/${parseLink(title)}`;
