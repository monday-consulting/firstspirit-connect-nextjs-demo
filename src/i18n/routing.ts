import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defaultLocale, locales } from "./config";

const pathnames = {
  "/": {
    en_GB: "/homepage/",
    de_DE: "/startseite/",
  },
  "/product-detail/[id]/": {
    en_GB: "/product-detail/[id]/",
    de_DE: "/produkt-detail/[id]/",
  },
  "/products/[category]/[product_group]": {
    en_GB: "/products/[category]/[product_group]",
    de_DE: "/produkte/[category]/[product_group]",
  },
};

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: "always",
  pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
});

// TODO: use createLocalizedPathnamesNavigation instead
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
