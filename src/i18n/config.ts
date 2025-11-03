export const locales = ["en-GB", "de-DE"] as const;
export const defaultLocale = locales[0];
export type Locale = (typeof locales)[number];

export const fsLocales = ["en_GB", "de_DE"] as const;
export const defaultFsLocale = fsLocales[0];
export type FsLocale = (typeof fsLocales)[number];

/**
 * Map locale codes to language names for LLM instructions
 */
export const LOCALE_TO_LANGUAGE: Record<string, string> = {
  [locales[0]]: "English",
  [locales[1]]: "German",
};
