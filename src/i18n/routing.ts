import { createNavigation } from "next-intl/navigation";
import { type Pathnames, defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/news": "/news",
  "/locations": {
    en_GB: "/locations",
    de_DE: "/standorte",
  },
  "/product-detail/[id]": {
    en_GB: "/product-detail/[id]",
    de_DE: "/produkt-detail/[id]",
  },
  "/products/[category]/[product_group]": {
    en_GB: "/products/[category]/[product_group]",
    de_DE: "/produkte/[category]/[product_group]",
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
