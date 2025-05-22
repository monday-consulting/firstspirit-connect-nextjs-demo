import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "next-intl";
import { client } from "../client";
import { graphql } from "../generated";

const pageContentDocument = graphql(`
  query pageByRoute($locale: String!, $route: String!) {
    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {
      layout
      name
      id
      previewId
      data {
        __typename
        ... on FirstSpiritStandard {
          ptHeadline
          ptSubheadline
          ptMdImageAltText
          ptImage {
            __typename
            ... on FirstSpiritImage {
              resolutions {
                original {
                  url
                }
              }
            }
          }
        }
      }
      pageBodies {
        name
        children {
          ... on FirstSpiritSection {
            __typename
            id
            previewId
            data {
              __typename
              ...FirstSpiritTeaserFragment
              ...FirstSpiritStageFragment
              ...FirstSpiritTextImageFragment
              ...FirstSpiritProductCategoryTeaserFragment
              ...FirstSpiritStepsFragment
              ...FirstSpiritAccordionFragment
              ...FirstSpiritFeaturesFragment
              ...FirstSpiritGoogleMapsFragment
              ...FirstSpiritTableFragment
            }
          }
        }
      }
    }
  }
`);

export const getPageContentByRoute = async (locale: Locale, route: string) => {
  const res = await client.request(pageContentDocument, { locale: parseLocale(locale), route });
  return res.firstSpiritPage;
};
