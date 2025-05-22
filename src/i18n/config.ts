export const locales = ["en-GB", "de-DE"] as const;
export const defaultLocale = locales[0];

export const fsLocales = ["en_GB", "de_DE"] as const;
export const defaultFsLocale = fsLocales[0];
export type FsLocale = (typeof fsLocales)[number];
