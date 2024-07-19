import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["de_DE", "en_GB"];
export const defaultLocale = locales[0];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
