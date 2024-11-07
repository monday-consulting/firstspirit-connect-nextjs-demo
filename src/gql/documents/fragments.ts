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
      data {
        __typename
        ... on FirstSpiritInternalLink {
          ltText
          ltLink {
            __typename
            ... on FirstSpiritPageRef {
              page {
                route
              }
            }
          }
        }
      }
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
    stCategoryLink {
      data {
        __typename
        ... on FirstSpiritInternalLink {
          ltText
          ltLink {
            __typename
            ... on FirstSpiritPageRef {
              page {
                route
              }
            }
          }
        }
      }
    }
    stCategory {
      value
      key
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
              data {
                __typename
                ... on FirstSpiritInternalLink {
                  ltText
                  ltLink {
                    __typename
                    ... on FirstSpiritPageRef {
                      page {
                        route
                      }
                    }
                  }
                }
              }
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
    stInitialLat
    stInitialLong
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
    ttLat
    ttLong
  }

  fragment FirstSpiritTableFragment on FirstSpiritTable {
    stHeadline
    stText
    stTable
  }

`);
