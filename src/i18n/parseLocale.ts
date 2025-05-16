import type { Locale } from "next-intl";
import type { FsLocale } from "./config";

export const parseLocale = (locale: Locale): FsLocale => (locale === "en-GB" ? "en_GB" : "de_DE");
