import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const navigation = graphql(`
  query allFsNavigationQuery($locale: String!) {
    allFirstSpiritNavigationData(filter: {_locale: {eq: $locale}}) {
      nodes {
        pages {
          index
        }
        id
      }
    }
  }
`);

export const getNavigation = async (locale: string) => {
  const res = await query(navigation, { variables: { locale } });
  return res.allFirstSpiritNavigationData.nodes;
};
