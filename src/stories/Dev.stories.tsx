import type { Meta, StoryObj } from "@storybook/react";
import { DevComponent } from "@/components/Dev";

const meta: Meta<typeof DevComponent> = {
  title: "Components/Dev",
  component: DevComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: { key: "value" },
    componentName: "SampleComponent",
    currentDataMock: {
      idMap: {
        "57": {
          id: "5a57",
          parentIds: [],
          label: "Home",
          contentReference: "https://64.en_GB",
          caasDocumentId: "c8a4",
          seoRoute: "/Home/",
          seoRouteRegex: null,
          customData: null,
          permissions: {
            allowed: ["anoym", "customer", "registered"],
            forbidden: [],
          },
        },
        "5741231": {
          id: "5a44457",
          parentIds: [],
          label: "Home",
          contentReference: "https://64.42343242en_GB",
          caasDocumentId: "c8a4",
          seoRoute: "/Home/",
          seoRouteRegex: null,
          customData: null,
          permissions: {
            allowed: ["anoym", "customer", "registered"],
            forbidden: [],
          },
        },
        "541327": {
          id: "5a57",
          parentIds: [],
          label: "Home",
          contentReference: "https://64.424324en_GB",
          caasDocumentId: "c8a4",
          seoRoute: "/Home/",
          seoRouteRegex: null,
          customData: null,
          permissions: {
            allowed: ["anoym", "customer", "registered"],
            forbidden: [],
          },
        },
        "573": {
          id: "5a541342427",
          parentIds: [],
          label: "Home",
          contentReference: "https://6424324244.en_GB",
          caasDocumentId: "c8a4",
          seoRoute: "/Home/",
          seoRouteRegex: null,
          customData: null,
          permissions: {
            allowed: ["anoym", "customer", "registered"],
            forbidden: [],
          },
        },
      },
    },
    currentPageMock: {
      type: "Page",
      id: "testId12345",
      refId: "4",
      previewId: "c8a63213123.de_DE",
      name: "index",
      layout: "homepage",
      children: [
        {
          type: "PageBody",
          name: "content",
          previewId: "7e8e3132132131423ef.de_DE",
          children: [
            {
              id: "758d4123131325",
              type: "Section",
              sectionType: "teaser",
              previewId: "42346423324d5342.de_DE",
              data: {
                st_button: null,
                st_headline: [
                  {
                    data: {
                      "data-fs-style": "format.standard",
                    },
                    content: [
                      {
                        type: "text",
                        content: "IHR ",
                        data: {},
                      },
                      {
                        data: {
                          "data-fs-style": "format.span_yellow_text",
                        },
                        content: [
                          {
                            type: "text",
                            content: "INDIVIDUELLES",
                            data: {},
                          },
                        ],
                        type: "block",
                      },
                      {
                        type: "text",
                        content: " ZUHAUSE.",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                st_jumbo_headline: "Smart Living",
                st_kicker: "Willkommen",
                st_picture: {
                  type: "Image",
                  id: "d36f42343242242347b94",
                  previewId: "dr3232432447b94432.de_DE",
                  meta: {},
                  description: null,
                  resolutions: {
                    ORIGINAL: {
                      fileSize: 3870232,
                      extension: "jpeg",
                      mimeType: "image/jpeg",
                      width: 4288,
                      height: 2848,
                      url: "https://enterprisedev-media.e-spirit.cloud/d8db6f24-0bf8-4f48-be47-5e41d8d427fc/preview/Images/Product-Images/Thermostat-Black.jpeg?rev=1713",
                      seoRoute: "/Images/Product-Images/Thermostat-Black.jpeg",
                    },
                    banner_slider: {
                      fileSize: 443422,
                      extension: "jpg",
                      mimeType: "image/jpeg",
                      width: 1920,
                      height: 1080,
                      url: "https://example.jpg?rev=1713",
                      seoRoute: "/Images/Product-Images/Thermostat-Black_banner_slider.jpg",
                    },
                    landscape: {
                      fileSize: 117349,
                      extension: "jpg",
                      mimeType: "image/jpeg",
                      width: 1170,
                      height: 400,
                      url: "https://enterprisedev-media.e-spirit.cloud//preview/Images/Product-Images/Thermostat-Black_landscape.jpg?rev=1713",
                      seoRoute: "/Images/Product-Images/Thermostat-Black_landscape.jpg",
                    },
                    portrait: {
                      fileSize: 100482,
                      extension: "jpg",
                      mimeType: "image/jpeg",
                      width: 800,
                      height: 500,
                      url: "https://enterprisedev-media.e-spirit.cloud/d8db6f24-0bf8-4f48-be47-5e41d8d427fc/preview/Images/Product-Images/Thermostat-Black_portrait.jpg?rev=1713",
                      seoRoute: "/Images/Product-Images/Thermostat-Black_portrait.jpg",
                    },
                    product_teaser: {
                      fileSize: 49107,
                      extension: "jpg",
                      mimeType: "image/jpeg",
                      width: 360,
                      height: 560,
                      url: "https://enterprisedev-media.e-spirit.cloud/d8db6f24-0bf8-4f48-be47-5e41d8d427fc/preview/Images/Product-Images/Thermostat-Black_product_teaser.jpg?rev=1713",
                      seoRoute: "/Images/Product-Images/Thermostat-Black_product_teaser.jpg",
                    },
                  },
                },
                st_picture_alt: "Touching Surfaces",
                st_text: [
                  {
                    data: {
                      "data-fs-style": "format.standard",
                    },
                    content: [
                      {
                        type: "text",
                        content: "Mit einfachen Funktionen und Werkzeugen können unsere ",
                        data: {},
                      },
                      {
                        data: {
                          type: "Link",
                          template: "internal_link",
                          data: {
                            lt_link: {
                              type: "Reference",
                              referenceId: "0bc56bb7-a852-4603-a4bc-2e219634169f",
                              referenceType: "PageRef",
                            },
                            lt_text: "Smart",
                          },
                          meta: {},
                        },
                        content: [
                          {
                            type: "text",
                            content: "Smart",
                            data: {},
                          },
                        ],
                        type: "link",
                      },
                      {
                        type: "text",
                        content:
                          " Living-Kunden ihr individuelles Zuhause schaffen. Von der Steuerung des Lichts über eine zentrale ",
                        data: {},
                      },
                      {
                        data: {
                          type: "Link",
                          template: "external_link",
                          data: {
                            lt_link_behavior: {
                              type: "Option",
                              key: "_blank",
                              value: "Im neuen Tab/Fenster öffnen",
                              fsType: "Option",
                              label: "Im neuen Tab/Fenster öffnen",
                              identifier: "_blank",
                            },
                            lt_text: "Mediensteuerung",
                            lt_url: "https://www.google.de",
                          },
                          meta: {},
                        },
                        content: [
                          {
                            type: "text",
                            content: "Mediensteuerung",
                            data: {},
                          },
                        ],
                        type: "link",
                      },
                      {
                        type: "text",
                        content: ".",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
              },
              children: [],
            },
          ],
        },
      ],
    },
  },
};
