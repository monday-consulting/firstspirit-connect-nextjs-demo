import type {
  FirstSpiritAccordion,
  FirstSpiritSmartlivingNews,
  FirstSpiritStandard,
  FirstSpiritSteps,
  FirstSpiritTeaser,
} from "../generated/graphql";

export const templates = {
  standardPage: (data: FirstSpiritStandard) =>
    `# ${data.ptHeadline}
    \n## ${data.ptSubheadline}
    \n`,
  teaser: (data: FirstSpiritTeaser) =>
    `### ${data.stHeadline}
    \n${data.stImageAltText}
    \n${extractStTextContent(data.stText)}
    \n`,
  accordion: (data: FirstSpiritAccordion) =>
    `### ${data.stHeadline}
    \n${data.stSubline}
    \n${data.stInfo}
    \n`,
  // TODO: ttArticleText
  smartLivingNews: (data: FirstSpiritSmartlivingNews) =>
    `### ${data.ttHeadline}
    \n ####${data.ttAuthor}
    \n${data.ttArticleText}
    \n`,
  steps: (data: FirstSpiritSteps) =>
    `### ${data.stHeadline}
    \n${data.stSubline}
    \n${extractStTextContent(data.stText)}
    \n`,
};

function extractStTextContent(stText: any) {
  if (!stText || !Array.isArray(stText)) {
    return "";
  }

  let result = "";

  function processContent(content: any) {
    if (!Array.isArray(content)) {
      return "";
    }

    let text = "";

    for (const item of content) {
      if (item.type === "text" && item.content) {
        text += item.content;
      } else if (item.type === "linebreak") {
        text += "\n";
      } else if (item.content && Array.isArray(item.content)) {
        // Rekursiv für verschachtelte Inhalte (z.B. bold text)
        text += processContent(item.content);
      }
    }

    return text;
  }

  for (const paragraph of stText) {
    if (paragraph.type === "paragraph" && paragraph.content) {
      const paragraphText = processContent(paragraph.content);
      if (paragraphText.trim()) {
        result += `${paragraphText}\n\n`;
      }
    }
  }

  // Entferne überschüssige Leerzeilen am Ende
  return result.trim();
}

// Beispiel-Verwendung:
// const stTextData = [...]; // Dein stText JSON Array
// const extractedText = extractStTextContent(stTextData);
// console.log(extractedText);

// FirstSpiritAccordion | FirstSpiritAccordionItem | FirstSpiritDatasetLink
// FirstSpiritExternalLink | FirstSpiritFeature | FirstSpiritFeatures
// FirstSpiritFscataloglinktest | FirstSpiritFscatalogsectiontest | FirstSpiritFsdatasettest
// FirstSpiritFsindex | FirstSpiritFsrefeferencepage | FirstSpiritFsreferencedataset
// FirstSpiritFsreferencepicture | FirstSpiritFsreferencfile | FirstSpiritFtsLanguageMapping
// FirstSpiritFtsMultiplePageEntry | FirstSpiritGlobalTranslation | FirstSpiritGoogleMaps
// FirstSpiritInteractiveImage | FirstSpiritInteractiveImageLink | FirstSpiritInternalLink
// FirstSpiritLatestNews | FirstSpiritLocation | FirstSpiritMediaLink | FirstSpiritNewsOverview
// FirstSpiritProductCategoryTeaser | FirstSpiritRedirect | FirstSpiritRequests
// FirstSpiritSmartlivingAuthor | FirstSpiritSmartlivingCategory | FirstSpiritSmartlivingLocation
// FirstSpiritSmartlivingNews | FirstSpiritSmartlivingProduct | FirstSpiritSmartlivingProductOverview
// FirstSpiritSmartlivingTag | FirstSpiritStage | FirstSpiritSteps | FirstSpiritStepsItem
// FirstSpiritTable | FirstSpiritTask | FirstSpiritTeaser | FirstSpiritTextImage;
