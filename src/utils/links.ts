import { replaceUmlauts } from "./strings";

export const parseLink = (str: string) => replaceUmlauts(str.toLowerCase().replace(/\s/g, "-"));

export const getProductDetailLink = (id: string) => `/product-detail/${parseLink(id)}`;

export const getCategoryLink = (title: string) => `/category/${parseLink(title)}`;
