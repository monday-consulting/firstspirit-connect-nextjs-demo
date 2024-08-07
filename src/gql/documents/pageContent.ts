import { client } from "../client";
import { graphql } from "../generated";

const pageContentDocument = graphql(`
  query pageByRoute($locale: String!, $route: String!) {
    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {
      layout
      name
      id
      pageBodies {
        children
        name
        previewId
      }
    }
  }
`);

export const getPageContentByRoute = async (locale: string, route: string) => {
  console.log(`Fetch page content from: {locale: ${locale}, route: ${route}}`);
  const res = await client.request(pageContentDocument, { locale, route });
  return res.firstSpiritPage;
};
