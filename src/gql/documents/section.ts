import { client } from "../client";
import { graphql } from "../generated";

const sectionById = graphql(`
  query section($locale: String!, $id: String!) {
    allFirstSpiritSection(filter: {_locale: {eq: $locale}, fsId: {eq: $id}}) {
      nodes {
        data
        name
        fsId
      }
    }
  }
`);

export const getSectionById = async (locale: string, id: string) => {
  const res = await client.request(sectionById, { locale, id });
  return res.allFirstSpiritSection.nodes[0];
};
