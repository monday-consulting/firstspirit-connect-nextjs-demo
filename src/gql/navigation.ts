import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const navigation = graphql(`
  query fsNavigationQuery($locale: String!) {
    firstSpiritNavigationData(_locale: {eq: $locale}) {
      structure {
        navigationItem {
          label
          seoRoute
          fsNavItemId
        }
        structureChildren {
          navigationItem {
            label
            seoRoute
            fsNavItemId
          }
          structureChildren {
            navigationItem {
              fsNavItemId
              label
              seoRoute
            }
          }
        }
      }
    }
  }
`);

export const getNavigationStructure = async (locale: string) => {
  const res = await query(navigation, { variables: { locale } });
  return res.firstSpiritNavigationData?.structure;
};
