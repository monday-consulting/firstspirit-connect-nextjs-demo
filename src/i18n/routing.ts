import { defineRouting, type Pathnames } from "next-intl/routing";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "./config";

const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  locations: {
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
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation(routing);
