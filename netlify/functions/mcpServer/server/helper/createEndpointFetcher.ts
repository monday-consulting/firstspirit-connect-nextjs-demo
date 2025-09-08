import { Effect } from "effect";
import type { Locale } from "@/i18n/config";
import { getPageEndpoints, type PageEndpointProps } from "../services/pageService";
import { getProductEndpoints, type ProductEndpointProps } from "../services/productService";

export const fetchPageEndpoints = (locale: Locale): Promise<PageEndpointProps[]> => {
  return Effect.runPromise(getPageEndpoints(locale));
};

export const fetchProductEndpoints = (locale: Locale): Promise<ProductEndpointProps[]> => {
  return Effect.runPromise(getProductEndpoints(locale));
};
