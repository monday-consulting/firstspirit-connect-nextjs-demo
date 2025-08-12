import type { Locale } from "@/i18n/config";
import { Effect } from "effect";
import { type PageEndpointProps, getPageEndpoints } from "../services/pageService";
import { type ProductEndpointProps, getProductEndpoints } from "../services/productService";

export const fetchPageEndpoints = (locale: Locale): Promise<PageEndpointProps[]> => {
  return Effect.runPromise(getPageEndpoints(locale));
};

export const fetchProductEndpoints = (locale: Locale): Promise<ProductEndpointProps[]> => {
  return Effect.runPromise(getProductEndpoints(locale));
};
