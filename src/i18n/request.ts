import type { Locale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as Locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
