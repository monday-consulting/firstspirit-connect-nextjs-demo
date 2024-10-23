import type { Locale } from "@/i18n/config";
import { client } from "../client";
import { graphql } from "../generated";

const gcaPageDocument = graphql(`
  query gcaPageByName($locale: String!, $name: String!) {
    firstSpiritGcaPage(_locale: {eq: $locale}, name: {eq: $name}) {
      data {
        __typename
        ... on FirstSpiritGcaFooter {
          gcCopyright
          # TODO: Add gcLinks to the footer after fix in connector
          gcLinks {
            name
          }
        }
      }
    }
  }
`);

export const getFooter = async (locale: Locale) => {
  const res = await client.request(gcaPageDocument, { locale, name: "footer" });
  return res.firstSpiritGcaPage;
};
