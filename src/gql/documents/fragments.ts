import { graphql } from "../generated";

/**
 * Section Fragments
 */
graphql(`
  fragment FirstSpiritTeaserFragment on FirstSpiritTeaser {
    stHeadline
    stText
    stImage {
      __typename
      ... on FirstSpiritImage {
        resolutions {
          original {
            url
          }
        }
      }
    }
    stImageAltText
    stLayout {
      key
      value
    }
  }

  fragment FirstSpiritStageFragment on FirstSpiritStage {
    stHeadline
    stSubHeadlineTextImageStage: stSubheadline
    stImage {
      __typename
      ... on FirstSpiritImage {
        resolutions {
          original {
            url
          }
        }
      }
    }
    stCta {
      key
    }
  }

  fragment FirstSpiritTextImageFragment on FirstSpiritTextImage {
    stHeadline
    stSubHeadlineTextImage: stSubheadline
    stText
    stColumns {
      key
    }
    stLayout {
      key
    }
    stImage {
      __typename
      ... on FirstSpiritImage {
        resolutions {
          original {
            url
          }
        }
      }
    }
  }

  fragment FirstSpiritProductCategoryTeaserFragment on FirstSpiritProductCategoryTeaser {
    stHeadline
    stText
    stTextAlignment {
      key
    }
    stCategory {
      key
      value
    }
  }

  fragment FirstSpiritStepsFragment on FirstSpiritSteps {
    stHeadline
    stSubline
    stText
    stSteps {
      __typename
      ... on FirstSpiritSection {
        data {
          __typename
          ... on FirstSpiritStepsItem {
            __typename
            stTitle
            stText
          }
        }
      }
    }
  }

  fragment FirstSpiritAccordionFragment on FirstSpiritAccordion {
    stHeadline
    stSubline
    stInfo
    stAccordion {
      __typename
      ... on FirstSpiritSection {
        data {
          __typename
          ... on FirstSpiritAccordionItem {
            stTitle
            stContent
          }
        }
      }
    }
  }

  fragment FirstSpiritFeaturesFragment on FirstSpiritFeatures {
    stHeadline
    stText
    stFeatures {
      __typename
      ... on FirstSpiritSection {
        data {
          __typename
          ... on FirstSpiritFeature {
            stTitle
            stText
            stImageAltText
            stType {
              key
            }
            stLink {
              key
            }
            stImage {
              __typename
              ... on FirstSpiritImage {
                resolutions {
                  original {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment FirstSpiritGoogleMapsFragment on FirstSpiritGoogleMaps {
    stHeadline
    stSubheadline
    stInitialZoom
    # TODO: Int parsing currently not supported by graphql server - update fragment after solving
    # stInitialLat
    # stInitialLong
  }
`);

/**
 * Dataset Fragments
 */
graphql(`
  fragment FirstSpiritSmartLivingNewsFragment on FirstSpiritSmartlivingNews {
    ttHeadline
    ttSubheadline
    ttDate
    ttAuthor
    ttTags
    ttImage {
      __typename
      ... on FirstSpiritImage {
        resolutions {
          original {
            url
          }
        }
      }
    }
    ttImageAltText
    ttTeaserText
    ttArticleText
  }

  fragment FirstSpiritSmartLivingLocationFragment on FirstSpiritSmartlivingLocation {
    ttName
    ttDescription
    # TODO: Int parsing currently not supported by graphql server - update fragment after solving
    # ttLat
    # ttLong
  }
`);
