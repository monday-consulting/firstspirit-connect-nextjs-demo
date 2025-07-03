import { renderLine } from "@/utils/strings";
import type {
  FirstSpiritAccordion,
  FirstSpiritFeatures,
  FirstSpiritGoogleMaps,
  FirstSpiritNewsOverview,
  FirstSpiritProductCategoryTeaser,
  FirstSpiritSmartlivingLocation,
  FirstSpiritSmartlivingNews,
  FirstSpiritSmartlivingProduct,
  FirstSpiritStage,
  FirstSpiritStandard,
  FirstSpiritSteps,
  FirstSpiritTable,
  FirstSpiritTeaser,
  FirstSpiritTextImage,
} from "../generated/graphql";
import {
  assembleMarkdownParts,
  extractStTableContent,
  extractStTextContent,
} from "@/utils/contentParser";

export const templates = {
  standardPage: (data: FirstSpiritStandard) =>
    assembleMarkdownParts([
      renderLine("# ", data.ptHeadline, !data.ptSubheadline),
      renderLine("## ", data.ptSubheadline),
    ]),

  teaser: (data: FirstSpiritTeaser) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stImageAltText),
      renderLine("", `${data.stLayout?.key ?? ""} ${data.stLayout?.value ?? ""}`),
      extractStTextContent(data.stText),
    ]),

  accordion: (data: FirstSpiritAccordion) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stSubline),
      Array.isArray(data.stInfo) && data.stInfo.length > 1 ? data.stInfo.join("\n") : "",
      ...(data.stAccordion ?? [])
        .map((accordionItem) => {
          const item = accordionItem?.data;
          if (item?.__typename !== "FirstSpiritAccordionItem") return null;

          return assembleMarkdownParts([
            renderLine("#### ", item.stTitle),
            renderLine("", extractStTextContent(item.stContent)),
          ]);
        })
        .filter(Boolean),
    ]),

  smartLivingNews: (data: FirstSpiritSmartlivingNews) =>
    assembleMarkdownParts([
      renderLine("### ", data.ttHeadline),
      renderLine("#### ", data.ttAuthor),
      renderLine("", data.ttDate),
      renderLine("", data.ttTeaserText),
      renderLine("", data.ttArticleText),
    ]),

  smartLivingProduct: (data: FirstSpiritSmartlivingProduct) =>
    assembleMarkdownParts([
      renderLine("### ", data.ttName),
      renderLine("**Price:** ", data.ttPrice),
      renderLine("", data.ttTeaserText),
      renderLine("", extractStTextContent(data.ttDescription)),
      renderLine("**Image Alt:** ", data.ttImageAltText),
      data.ttImage?.__typename === "FirstSpiritImage"
        ? renderLine(
            "",
            `![${data.ttImageAltText ?? "Product Image"}](${data.ttImage.resolutions?.original?.url})`
          )
        : "",
      Array.isArray(data.ttCategories)
        ? renderLine(
            "**Categories:**",
            `\n${data.ttCategories
              .map((c) => `- ${c?.data?.tt_name}`)
              .filter(Boolean)
              .join("\n")}`
          )
        : "",
    ]),

  newsOverview: (data: FirstSpiritNewsOverview) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine(
        "",
        data.stDataPage?.__typename === "FirstSpiritPageRef" ? data.stDataPage.type : ""
      ),
      renderLine(
        "",
        data.stDataPage?.__typename === "FirstSpiritPageRef" ? data.stDataPage.referenceId : ""
      ),
      renderLine(
        "",
        data.stDataPage?.__typename === "FirstSpiritPageRef" ? data.stDataPage.referenceType : ""
      ),
      renderLine(
        "",
        data.stDataPage?.__typename === "FirstSpiritPageRef" ? data.stDataPage.page?.fsId : ""
      ),
    ]),

  steps: (data: FirstSpiritSteps) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stSubline),
      renderLine("", extractStTextContent(data.stText)),
      ...(data.stSteps ?? [])
        .map((stepItem) => {
          const step = stepItem?.data;
          if (step?.__typename !== "FirstSpiritStepsItem") return null;

          return assembleMarkdownParts([
            renderLine("#### ", step.stTitle),
            renderLine("", extractStTextContent(step.stText)),
          ]);
        })
        .filter(Boolean),
    ]),

  stage: (data: FirstSpiritStage) => {
    const imageUrl =
      data.stImage?.__typename === "FirstSpiritImage"
        ? data.stImage.resolutions?.original?.url
        : "";

    let link = "";
    const cta = data.stCta?.data;
    if (
      cta?.__typename === "FirstSpiritInternalLink" &&
      cta.ltLink?.__typename === "FirstSpiritPageRef"
    ) {
      const text = cta.ltText ?? "";
      const route = cta.ltLink.page?.route ?? "#";
      link = `[${text}](${route})`;
    }

    return assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stSubheadline),
      renderLine("", link),
      renderLine("", imageUrl ? `![Image](${imageUrl})` : ""),
    ]);
  },

  textImage: (data: FirstSpiritTextImage) => {
    const imageUrl =
      data.stImage?.__typename === "FirstSpiritImage"
        ? data.stImage.resolutions?.original?.url
        : "";

    const columns = Array.isArray(data.stColumns)
      ? data.stColumns
          .filter((c) => c?.__typename === "FirstSpiritOption")
          .map((c) => c.key)
          .join(", ")
      : "";

    return assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stSubheadline),
      renderLine("", extractStTextContent(data.stText)),
      renderLine("Layout: ", data.stLayout?.key),
      renderLine("Columns: ", columns),
      renderLine("", imageUrl ? `![Image](${imageUrl})` : ""),
    ]);
  },

  productCategoryTeaser: (data: FirstSpiritProductCategoryTeaser) => {
    const linkData = data.stCategoryLink?.data;
    let renderedLink = "";

    if (
      linkData?.__typename === "FirstSpiritInternalLink" &&
      linkData.ltLink?.__typename === "FirstSpiritPageRef"
    ) {
      const text = linkData.ltText ?? "";
      const route = linkData.ltLink.page?.route ?? "#";
      renderedLink = `[${text}](${route})`;
    }

    return assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", extractStTextContent(data.stText)),
      renderLine("Alignment: ", data.stTextAlignment?.key),
      renderLine("Category: ", data.stCategory?.value),
      renderLine("", renderedLink),
    ]);
  },
  features: (data: FirstSpiritFeatures) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", extractStTextContent(data.stText)),
      ...(data.stFeatures ?? [])
        .map((featureItem) => {
          const f = featureItem?.data;
          if (f?.__typename !== "FirstSpiritFeature") return null;

          const imageUrl =
            f.stImage?.__typename === "FirstSpiritImage"
              ? (f.stImage.resolutions?.original?.url ?? "")
              : "";

          let link = "";
          if (f.stLink?.data?.__typename === "FirstSpiritInternalLink") {
            const linkText = f.stLink.data.ltText ?? "";
            const route =
              f.stLink.data.ltLink?.__typename === "FirstSpiritPageRef"
                ? (f.stLink.data.ltLink.page?.route ?? "")
                : "";
            link = `[${linkText}](${route})`;
          }

          return assembleMarkdownParts([
            renderLine("#### ", f.stTitle),
            renderLine("", f.stText),
            renderLine("", f.stType?.key),
            renderLine("", link),
            renderLine("", imageUrl ? `![${f.stImageAltText}](${imageUrl})` : ""),
          ]);
        })
        .filter(Boolean),
    ]),

  googleMaps: (data: FirstSpiritGoogleMaps) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", data.stSubheadline),
      renderLine("Lat: ", data.stInitialLat?.toString()),
      renderLine("Long: ", data.stInitialLong?.toString()),
      renderLine("Zoom: ", data.stInitialZoom?.toString()),
    ]),

  smartLivingLocation: (data: FirstSpiritSmartlivingLocation) =>
    assembleMarkdownParts([
      renderLine("### ", data.ttName),
      renderLine("", data.ttDescription),
      renderLine("Location: ", `${data.ttLat}, ${data.ttLong}`),
    ]),

  table: (data: FirstSpiritTable) =>
    assembleMarkdownParts([
      renderLine("### ", data.stHeadline),
      renderLine("", extractStTextContent(data.stText)),
      renderLine("", extractStTableContent(data.stTable)),
    ]),
};

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
