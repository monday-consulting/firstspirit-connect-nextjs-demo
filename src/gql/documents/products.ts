import { client } from "../client";
import { graphql } from "../generated";

const productsDocument = graphql(`
  query products($locale: String!) {
    allFirstSpiritDataset(
      filter: {_locale: {eq: $locale}, entityType: {eq: "product"}}
    ) {
      nodes {
        fsId
        entityType
        route
        data
      }
    }
  }
`);

export const getAllProducts = async (locale: string) => {
  const res = await client.request(productsDocument, { locale });
  return res.allFirstSpiritDataset.nodes;
};
