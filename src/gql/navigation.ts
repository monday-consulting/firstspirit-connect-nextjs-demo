import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const navigation = graphql(`
  query fsNavigationQuery($locale: String!) {
    firstSpiritNavigationData(_locale: {eq: $locale}) {
      idList {
        seoRoute
        label
        fsNavItemId
      }
      structure {
        fsStructureItemId
      }
    }
  }
`);

export const getNavigation = async (locale: string) => {
  const res = await query(navigation, { variables: { locale } });
  return res.firstSpiritNavigationData;
};
