import type { Locale } from "@/i18n/config";
import { client } from "../client";
import { graphql } from "../generated";

const bodyPreviewIdDocument = graphql(`
  query bodyPreviewId($locale: String) {
    firstSpiritPage(_locale: {eq: $locale}) {
      previewId
    }
  }
`);

export const getBodyPreviewId = async (locale: Locale) => {
  const res = await client.request(bodyPreviewIdDocument, { locale });
  return res.firstSpiritPage?.previewId;
};
