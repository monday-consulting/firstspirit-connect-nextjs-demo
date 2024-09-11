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

const productDetailDocument = graphql(`query productDetail($locale: String!, $id: String!) {
  firstSpiritDataset(_locale: {eq: $locale}, fsId: {eq: $id}) {
    data
  }
}`);

export const getAllProducts = async (locale: string) => {
  const res = await client.request(productsDocument, { locale });
  return res.allFirstSpiritDataset.nodes;
};

export const getProductDetail = async (locale: string, id: string) => {
  const res = await client.request(productDetailDocument, { locale, id });
  return res.firstSpiritDataset?.data;
};
