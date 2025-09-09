import { Effect } from "effect";
import type { Locale } from "@/i18n/config";
import { getPageEndpoints, type PageEndpointProps } from "../services/pageService";
import { getProductEndpoints, type ProductEndpointProps } from "../services/productService";

// Simple in-memory TTL cache + request de-duplication to avoid
// repeatedly fetching the same expensive data during warm function lifetime.
type CacheEntry<T> = { value: T; ts: number };
const ttlMs = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheEntry<unknown>>();
const pending = new Map<string, Promise<unknown>>();

const getCacheKey = (type: "pages" | "products", locale: Locale) => `${type}:${locale}`;

async function withCache<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const cached = cache.get(key) as CacheEntry<T> | undefined;
  if (cached && now - cached.ts < ttlMs) return cached.value;

  const inflight = pending.get(key) as Promise<T> | undefined;
  if (inflight) return inflight;

  const p = fetcher()
    .then((value) => {
      cache.set(key, { value, ts: Date.now() });
      return value;
    })
    .finally(() => pending.delete(key));

  pending.set(key, p);
  return p;
}

export const fetchPageEndpoints = (locale: Locale): Promise<PageEndpointProps[]> => {
  const key = getCacheKey("pages", locale);
  return withCache(key, () => Effect.runPromise(getPageEndpoints(locale)));
};

export const fetchProductEndpoints = (locale: Locale): Promise<ProductEndpointProps[]> => {
  const key = getCacheKey("products", locale);
  return withCache(key, () => Effect.runPromise(getProductEndpoints(locale)));
};
