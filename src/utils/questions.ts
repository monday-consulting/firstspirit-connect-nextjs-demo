import type { Locale } from "next-intl";
import { sanitizeSlug } from "./strings";

export const TEMPLATES = {
  "de-DE": {
    detail: () => ["Wofür eignet sich dieses Produkt?", "Kannst du mir das Produkt bestellen?"],
    category: (cat: string) => [
      `Wie viele Produkte beinhalten die Kategorien in ${sanitizeSlug(cat)}?`,
      `Welche Produkte gibt es in ${sanitizeSlug(cat)}?`,
      `Gib mir eine kurze Kaufberatung für ${sanitizeSlug(cat)}.`,
    ],
    subcategory: (sub: string) => [
      `Was bringen mir ${sanitizeSlug(sub)} konkret?`,
      `Vergleiche zwei ${sanitizeSlug(sub)} nach Preis, Features und Installation.`,
      `Sind ${sanitizeSlug(sub)} mit bestehenden Systemen kompatibel?`,
    ],
  },
  "en-GB": {
    detail: () => ["What is this product used for?", "Can you order me this product?"],
    category: (cat: string) => [
      `How many products are in the ${sanitizeSlug(cat)} categories?`,
      `Which products are in ${sanitizeSlug(cat)}?`,
      `Give me a brief buying guide for ${sanitizeSlug(cat)}.`,
    ],
    subcategory: (sub: string) => [
      `What benefits do ${sanitizeSlug(sub)} provide?`,
      `Compare two ${sanitizeSlug(sub)} by price, features, and installation.`,
      `Are ${sanitizeSlug(sub)} compatible with existing systems?`,
    ],
  },
};

export const defaultQuestions = (locale: Locale, segments: string[]) => {
  const templates = TEMPLATES[locale];

  const isDetail = /^(product|produkt)[-_]detail/.test(segments[0]);
  if (isDetail) return templates.detail();

  if (!["products", "produkte"].includes(segments[0])) {
    return locale === "de-DE"
      ? [
          "Worum geht es auf dieser Webseite?",
          "Worum geht es bei diesem Anbieter?",
          "Welche Lösungen empfehlt ihr für den Einstieg?",
        ]
      : [
          "What is this website about?",
          "What is the company about?",
          "What do you recommend for beginners?",
        ];
  }

  if (segments.length === 2) return templates.category(segments[1] || "");
  return templates.subcategory(segments[2] || segments[1]);
};
