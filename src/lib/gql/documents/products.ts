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
            ttImage{
              __typename... on FirstSpiritImage{
                resolutions{
                  original{
                    url
                  }
                }
              }
            }
            ttImageAltText
            ttCategories {
            data{
              __typename... on FirstSpiritSmartlivingCategory{
                ttName
                }
              }
            }
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
          ttImage{
            __typename... on FirstSpiritImage{
              resolutions{
                original{
                  url
                }
              }
            }
          }
          ttImageAltText
          ttCategories {
            data{
              __typename... on FirstSpiritSmartlivingCategory{
                ttName
                }
              }
            }
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
  try {
    const res = await client.request(productsDocument, { locale: parseLocale(locale) });
    return res.allFirstSpiritDataset.nodes;
  } catch (error: any) {
    const connection = error?.cause ?? {};
    console.error("[getAllProducts] fetch failed", {
      name: error?.name,
      message: error?.message,
      cause: {
        code: connection.code,
        errno: connection.errno,
        syscall: connection.syscall,
        address: connection.address,
        port: connection.port,
        type: connection.type,
      },
    });
    const err = new Error(
      `Upstream network error (getAllProducts): ${connection.code ?? error.message}`
    );
    (err as any).status =
      connection.code === "ETIMEDOUT" || error?.name === "AbortError" ? 504 : 502;
    throw err;
  }
};

export const getProductDetail = async (locale: Locale, id: string) => {
  const res = await client.request(productDetailDocument, { locale: parseLocale(locale), id });
  if (!res.firstSpiritDataset?.data) {
    throw new Error(`No product dataset for id="${id}" (locale ${locale})`);
  }
  return res.firstSpiritDataset?.data;
};
