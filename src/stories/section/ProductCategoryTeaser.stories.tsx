import type { Meta, StoryObj } from "@storybook/react";
import { ProductCategoryTeaser } from "@/components/section/ProductCategoryTeaser";
import type { FirstSpiritSmartlivingProduct } from "@/gql/generated/graphql";

const meta: Meta<typeof ProductCategoryTeaser> = {
  title: "components/section/ProductCategoryTeaser",
  component: ProductCategoryTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockProducts = [
  {
    __typename: "FirstSpiritSmartlivingProduct",
    ttCategories: [],
    ttDescription: [
      {
        type: "paragraph",
        content: "Product 1 description",
        data: "someData",
      },
    ],
    ttImage: {
      __typename: "FirstSpiritImage",
      description: "Image of Product 1",
      meta: {
        // Meta details can be added here as per the FirstSpiritMetadata type
      },
      previewId: "preview-1",
      remoteProjectId: "project-1",
      resolutions: {
        __typename: "FirstSpiritResolution",
        original: {
          __typename: "FirstSpiritResolutionProps",
          url: "https://placehold.co/600x400/original",
        },
      },
      type: "image/jpeg",
    },
    ttImageAltText: "Product 1 Image",
    ttName: "Product 1",
    ttPrice: "$100",
    ttTeaserText: "Teaser text for Product 1",
  },
  {
    __typename: "FirstSpiritSmartlivingProduct",
    ttCategories: [],
    ttDescription: [
      {
        type: "paragraph",
        content: "Product 2 description",
        data: "someData",
      },
    ],
    ttImage: {
      __typename: "FirstSpiritImage",
      description: "Image of Product 2",
      meta: {
        // Meta details can be added here as per the FirstSpiritMetadata type
      },
      previewId: "preview-2",
      remoteProjectId: "project-2",
      resolutions: {
        __typename: "FirstSpiritResolution",
        original: {
          __typename: "FirstSpiritResolutionProps",
          url: "https://placehold.co/600x400/original",
        },
      },
      type: "image/jpeg",
    },
    ttImageAltText: "Product 2 Image",
    ttName: "Product 2",
    ttPrice: "$200",
    ttTeaserText: "Teaser text for Product 2",
  },
  {
    __typename: "FirstSpiritSmartlivingProduct",
    ttCategories: [],
    ttDescription: [
      {
        type: "paragraph",
        content: "Product 3 description",
        data: "someData",
      },
    ],
    ttImage: {
      __typename: "FirstSpiritImage",
      description: "Image of Product 3",
      meta: {
        // Meta details can be added here as per the FirstSpiritMetadata type
      },
      previewId: "preview-3",
      remoteProjectId: "project-3",
      resolutions: {
        __typename: "FirstSpiritResolution",
        original: {
          __typename: "FirstSpiritResolutionProps",
          url: "https://placehold.co/600x400/original",
        },
      },
      type: "image/jpeg",
    },
    ttImageAltText: "Product 3 Image",
    ttName: "Product 3",
    ttPrice: "$300",
    ttTeaserText: "Teaser text for Product 3",
  },
  {
    __typename: "FirstSpiritSmartlivingProduct",
    ttCategories: [],
    ttDescription: [
      {
        type: "paragraph",
        content: "Product 4 description",
        data: "someData",
      },
    ],
    ttImage: {
      __typename: "FirstSpiritImage",
      description: "Image of Product 4",
      meta: {
        // Meta details can be added here as per the FirstSpiritMetadata type
      },
      previewId: "preview-4",
      remoteProjectId: "project-4",
      resolutions: {
        __typename: "FirstSpiritResolution",
        original: {
          __typename: "FirstSpiritResolutionProps",
          url: "https://placehold.co/600x400/original",
        },
      },
      type: "image/jpeg",
    },
    ttImageAltText: "Product 4 Image",
    ttName: "Product 4",
    ttPrice: "$400",
    ttTeaserText: "Teaser text for Product 4",
  },
];

export const Default: Story = {
  args: {
    category: {
      type: "category",
      id: "category-key",
      name: "Category Name",
      products: mockProducts as FirstSpiritSmartlivingProduct[],
    },
    group_link: {
      label: "View More",
    },
    headline: "Product Teaser Headline",
    text: {
      content:
        "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu",
    },
    teaserTextStart: true,
  },
};
