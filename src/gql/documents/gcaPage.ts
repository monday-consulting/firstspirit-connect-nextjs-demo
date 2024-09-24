import type { Locale } from "@/i18n/config";
import { client } from "../client";
import { graphql } from "../generated";

const gcaPageDocument = graphql(`
  query footer($locale: String!, $name: String!) {
    firstSpiritGcaPage(_locale: {eq: $locale}, name: {eq: $name}) {
      data
    }
  }
`);

export const getGcaPage = async (locale: Locale, name: string) => {
  const res = await client.request(gcaPageDocument, { locale, name });
  return res.firstSpiritGcaPage;
};

export const getFooter = async (locale: Locale) => {
  const res = await client.request(gcaPageDocument, { locale, name: "footer" });
  return res.firstSpiritGcaPage;
};
