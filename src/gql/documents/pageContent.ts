import type { Locale } from "@/i18n/config";
import { client } from "../client";
import { graphql } from "../generated";

const pageContentDocument = graphql(`
  query pageByRoute($locale: String!, $route: String!) {
    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {
      layout
      name
      id
      data
      pageBodies {
        children {
          ... on FirstSpiritSection {
            __typename
            id
            sectionType
            data
          }
        }
        name
        previewId
      }
    }
  }
`);

export const getPageContentByRoute = async (locale: Locale, route: string) => {
  const res = await client.request(pageContentDocument, { locale, route });
  return res.firstSpiritPage;
};
