import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const pageContentById = graphql(`
  query pageContentById($id: String!) {
    firstSpiritPage(id: {eq: $id}) {
      layout
      name
      id
      pageBodies {
        children
      }
    }
  }
`);

export const getPageContentById = async (id: string) => {
  const res = await query(pageContentById, { variables: { id } });
  return res.firstSpiritPage;
};
