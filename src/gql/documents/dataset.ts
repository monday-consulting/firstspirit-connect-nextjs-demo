import type { Locale } from "@/i18n/config";
import { client } from "../client";
import { graphql } from "../generated";

const datasetDocument = graphql(`
  query datasetsByType($locale: String!, $type: String!) {
    allFirstSpiritDataset(filter: {_locale: {eq: $locale}, entityType: {eq: $type}}) {
      nodes {
        id
        entityType
        route
        data {
          __typename
          ...FirstSpiritSmartLivingNewsFragment
          ...FirstSpiritSmartLivingLocationFragment
        }
      }
    }
  }
`);

export const getDatasetsByType = async (locale: Locale, type: string) => {
  const res = await client.request(datasetDocument, { locale, type });
  return res.allFirstSpiritDataset.nodes;
};
