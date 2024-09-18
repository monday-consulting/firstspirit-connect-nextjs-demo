export const locales = ["en_GB", "de_DE"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en_GB";
