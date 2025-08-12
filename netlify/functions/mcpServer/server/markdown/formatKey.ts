/**
 * Formats a raw key string by cleaning up technical naming patterns.
 * Examples:
 * - "data.tt_name" → "name"
 */
export function formatKey(rawKey: string): string {
  const lastKey = rawKey.split(".").pop() ?? "";

  return lastKey
    .replace(/^(tt|pt|st|lt|fs)_?/, "") // Remove prefix
    .replace(/_/g, " ");
}
