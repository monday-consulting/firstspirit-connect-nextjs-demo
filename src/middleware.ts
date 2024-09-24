import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing, { alternateLinks: false });

export const config = {
  matcher: ["/", "/(en_GB|de_DE)/:path*"],
};
