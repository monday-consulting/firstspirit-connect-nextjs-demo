import type { Locale } from "next-intl";
import { client } from "../client";
import { graphql } from "../generated";
import { parseLocale } from "@/i18n/parseLocale";

const navigationDocument = graphql(`
  query fsNavigationQuery($locale:String!) {
    firstSpiritNavigationData(_locale: {eq: $locale}) {
      structure {
        navigationItem {
          label
          seoRoute
          fsNavItemId
          page {
            id
          }
        }
        structureChildren {
          navigationItem {
            label
            seoRoute
            fsNavItemId
            page {
              id
            }
          }
          structureChildren {
            navigationItem {
              fsNavItemId
              label
              seoRoute
              page {
                id
              }
            }
          }
        }
      }
    }
  }
`);

export const getNavigationStructure = async (locale: Locale) => {
  const res = await client.request(navigationDocument, { locale: parseLocale(locale) });
  return res.firstSpiritNavigationData?.structure;
};
