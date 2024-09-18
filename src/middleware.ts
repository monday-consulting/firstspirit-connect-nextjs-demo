import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  alternateLinks: false,
});

export const config = {
  matcher: ["/", "/(en_GB|de_DE)/:path*"],
};
