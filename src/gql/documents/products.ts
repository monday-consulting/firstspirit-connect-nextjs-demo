import { parseLocale } from "@/i18n/parseLocale";
import type { Locale } from "next-intl";
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
        data {
          __typename
          ... on FirstSpiritSmartlivingProduct {
            ttName
            ttPrice
            ttTeaserText
            ttCategories
            ttDescription
            ttImageAltText
            ttImage {
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
      }
    }
  }
`);

const productDetailDocument = graphql(`
  query productDetail($locale: String!, $id: String!) {
    firstSpiritDataset(_locale: {eq: $locale}, fsId: {eq: $id}) {
      data {
        __typename
        ... on FirstSpiritSmartlivingProduct {
          ttName
          ttPrice
          ttTeaserText
          ttCategories
          ttDescription
          ttImageAltText
          ttImage {
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
    }
  }  
`);

export const getAllProducts = async (locale: Locale) => {
  const res = await client.request(productsDocument, { locale: parseLocale(locale) });
  return res.allFirstSpiritDataset.nodes;
};

export const getProductDetail = async (locale: Locale, id: string) => {
  const res = await client.request(productDetailDocument, { locale: parseLocale(locale), id });
  return res.firstSpiritDataset?.data;
};
