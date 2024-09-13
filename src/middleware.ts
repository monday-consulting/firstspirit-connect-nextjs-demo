import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  alternateLinks: false,
});

export const config = {
  matcher: ["/", "/(de_DE|en_GB)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
