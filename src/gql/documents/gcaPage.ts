import { client } from "../client";
import { graphql } from "../generated";

const gcaPageDocument = graphql(`
  query footer($locale: String!, $name: String!) {
    firstSpiritGcaPage(_locale: {eq: $locale}, name: {eq: $name}) {
      data
    }
  }
`);

export const getGcaPage = async (locale: string, name: string) => {
  const res = await client.request(gcaPageDocument, { locale, name });
  return res.firstSpiritGcaPage;
};

export const getFooter = async (locale: string) => {
  const res = await client.request(gcaPageDocument, { locale, name: "footer" });
  return res.firstSpiritGcaPage;
};
