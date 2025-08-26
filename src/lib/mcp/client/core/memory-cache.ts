import QuickLRU from "quick-lru";

let lruInstance: QuickLRU<string, unknown> | undefined;

export function getLru() {
  if (!lruInstance) {
    lruInstance = new QuickLRU<string, unknown>({
      maxSize: 500,
    });
  }
  return lruInstance;
}
