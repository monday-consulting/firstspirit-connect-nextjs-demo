import { client } from "../client";
import { graphql } from "../generated";

const datasetDocument = graphql(`
  query datasetByType($locale: String!, $type: String!) {
    allFirstSpiritDataset(filter: {_locale: {eq: $locale}, entityType: {eq: $type}}) {
      nodes {
        id
        entityType
        route
        data
      }
    }
  }
`);

export const getDatasetByType = async (locale: string, type: string) => {
  const res = await client.request(datasetDocument, { locale, type });
  return res.allFirstSpiritDataset.nodes;
};
