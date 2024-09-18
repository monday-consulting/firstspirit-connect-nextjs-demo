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

const sectionByType = graphql(`
  query sectionByType($locale: String!, $type: String!) {
    allFirstSpiritSection(filter: {_locale: {eq: $locale}, sectionType: {eq: $type}}) {
      nodes {
        id
        data
      }
    }
  }
`);

export const getSectionById = async (locale: string, id: string) => {
  const res = await client.request(sectionById, { locale, id });
  return res.allFirstSpiritSection.nodes[0];
};

export const getSectionByType = async (locale: string, type: string) => {
  const res = await client.request(sectionByType, { locale, type });
  return res.allFirstSpiritSection.nodes[0];
};
