import { createNavigation } from "next-intl/navigation";
import { defineRouting, type Pathnames } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/news": "/news",
  "/locations": {
    "en-GB": "/locations",
    "de-DE": "/standorte",
  },
  "/product-detail/[id]": {
    "en-GB": "/product-detail/[id]",
    "de-DE": "/produkt-detail/[id]",
  },
  "/products/[category]/[product_group]": {
    "en-GB": "/products/[category]/[product_group]",
    "de-DE": "/produkte/[category]/[product_group]",
  },

  "/[[...slug]]": "/[[...slug]]",
};

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: "always",
  pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
  localeCookie: {
    // Expire in one year
    maxAge: 60 * 60 * 24 * 365,
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
