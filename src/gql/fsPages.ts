import { query } from "@netlify/connect-client";
import { graphql } from "../netlify-connect/graphql";

const allFsPageQuery = graphql(`
  query allFsPageQuery {
    allFirstSpiritPage {
      nodes {
        id
        name
      }
    }
  }
`);

export const getAllFsPages = async () => {
  const res = await query(allFsPageQuery);
  return res.allFirstSpiritPage.nodes;
};
