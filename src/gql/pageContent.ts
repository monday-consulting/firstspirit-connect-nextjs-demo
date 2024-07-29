import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const pageContentByRoute = graphql(`
  query pageByRoute($locale: String!, $route: String!) {
    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {
      layout
      name
      id
      pageBodies {
        children
      }
    }
  }
`);

export const getPageContentByRoute = async (locale: string, route: string) => {
  const res = await query(pageContentByRoute, { variables: { locale, route } });
  return res.firstSpiritPage;
};
