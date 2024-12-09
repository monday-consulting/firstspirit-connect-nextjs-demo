import { defaultLocale, locales } from "../src/i18n/config";

const messagesByLocale: Record<string, any> = { locales };

const nextIntl = {
  defaultLocale,
  messagesByLocale,
};

export default nextIntl;
