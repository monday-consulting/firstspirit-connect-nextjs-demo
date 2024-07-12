import type { LocaleType } from "../components/composables/locale";

export function getLanguageNamesFromLocales(identifiers: string[]): LocaleType[] {
  const locales: LocaleType[] = [];

  for (const identifier of identifiers) {
    // split the identifier into language and region
    // de_DE => [de, DE]
    const [isoCode] = identifier.split("_");

    if (isoCode) {
      try {
        const intl = new Intl.DisplayNames([isoCode], {
          type: "language",
        });
        const languageName = intl.of(isoCode) ?? null;

        locales.push({
          name: languageName,
          identifier,
        });
      } catch (error) {
        console.error(`Error creating Intl.DisplayNames for ${isoCode}:`, error);
        locales.push({
          name: null,
          identifier,
        });
      }
    }
  }

  return locales;
}
