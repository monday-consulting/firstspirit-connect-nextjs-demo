import type en_GB from "./messages/en_GB.json";
import type { formats } from "@/i18n/request";
import type { routing } from "@/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en_GB;
    Formats: typeof formats;
  }
}
