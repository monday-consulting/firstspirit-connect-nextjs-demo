import type { Locale } from "next-intl";
import { client } from "../client";
import { graphql } from "../generated";
import type { FirstSpiritGcaFooter } from "../generated/graphql";
import { parseLocale } from "@/i18n/parseLocale";

const gcaPageDocument = graphql(`
  query gcaPageByName($locale: String!, $name: String!) {
    firstSpiritGcaPage(_locale: {eq: $locale}, name: {eq: $name}) {
      data {
        __typename
        ... on FirstSpiritGcaFooter {
          gcCopyright
          gcLinks {
            data {
              __typename
              ... on FirstSpiritInternalLink {
                __typename
                ltText
                ltLink {
                  ... on FirstSpiritPageRef {
                    __typename
                    page {
                      route
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const getFooter = async (locale: Locale) => {
  const res = await client.request(gcaPageDocument, {
    locale: parseLocale(locale),
    name: "footer",
  });
  return res.firstSpiritGcaPage?.data as FirstSpiritGcaFooter;
};
