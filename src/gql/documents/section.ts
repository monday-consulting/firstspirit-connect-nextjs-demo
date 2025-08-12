import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "next-intl";
import { client } from "../client";
import { graphql } from "../generated";

const sectionById = graphql(`
  query sectionById($locale: String!, $id: String!) {
    allFirstSpiritSection(filter: {_locale: {eq: $locale}, fsId: {eq: $id}}) {
      nodes {
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
        name
        fsId
      }
    }
  }
`);

const sectionByType = graphql(`
  query sectionByType($locale: String!, $type: String!) {
    allFirstSpiritSection(
      filter: {_locale: {eq: $locale}, sectionType: {eq: $type}}
    ) {
      nodes {
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
        name
        fsId
      }
    }
  }
`);

export const getSectionById = async (locale: Locale, id: string) => {
  const res = await client.request(sectionById, { locale: parseLocale(locale), id });
  return res.allFirstSpiritSection.nodes[0];
};

export const getSectionByType = async (locale: Locale, type: string) => {
  const res = await client.request(sectionByType, { locale: parseLocale(locale), type });
  return res.allFirstSpiritSection.nodes[0];
};
