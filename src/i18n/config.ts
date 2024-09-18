export const locales = ["de_DE", "en_GB"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = locales[0];
