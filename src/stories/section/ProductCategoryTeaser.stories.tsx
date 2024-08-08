import type { Meta, StoryObj } from "@storybook/react";
import ProductCategoryTeaser from "@/components/section/ProductCategoryTeaser";
import type { Dataset } from "@/components/elements/ProductTeaser";

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

const mockDataset: Dataset[] = [
  {
    type: "Dataset",
    id: "product-1",
    previewId: "preview-1",
    schema: "product-schema",
    entityType: "product",
    template: "product-template",
    children: [],
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 1 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 1 Image",
      },
      name: "Product 1",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
    route: "product-1-route",
    routes: {
      pageRef: "pageRef-1",
      route: "product-1-route",
    },
    remoteProjectId: "remote-1",
    locale: "en-US",
  },
  {
    type: "Dataset",
    id: "product-2",
    previewId: "preview-2",
    schema: "product-schema",
    entityType: "product",
    template: "product-template",
    children: [],
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 2 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 2 Image",
      },
      name: "Product 2",
      price: "$200",
      teaserText: "Teaser text for Product 2",
    },
    route: "product-2-route",
    routes: {
      pageRef: "pageRef-2",
      route: "product-2-route",
    },
    remoteProjectId: "remote-2",
    locale: "en-US",
  },
  {
    type: "Dataset",
    id: "product-3",
    previewId: "preview-3",
    schema: "product-schema",
    entityType: "product",
    template: "product-template",
    children: [],
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 3 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 3 Image",
      },
      name: "Product 3",
      price: "$300",
      teaserText: "Teaser text for Product 3",
    },
    route: "product-3-route",
    routes: {
      pageRef: "pageRef-3",
      route: "product-3-route",
    },
    remoteProjectId: "remote-3",
    locale: "en-US",
  },
  {
    type: "Dataset",
    id: "product-4",
    previewId: "preview-4",
    schema: "product-schema",
    entityType: "product",
    template: "product-template",
    children: [],
    data: {
      categories: [],
      description: [
        {
          type: "paragraph",
          content: "Product 4 description",
          data: "someData",
        },
      ],
      image: {
        src: "https://placehold.co/600x400",
        alt: "Product 4 Image",
      },
      name: "Product 4",
      price: "$400",
      teaserText: "Teaser text for Product 4",
    },
    route: "product-4-route",
    routes: {
      pageRef: "pageRef-4",
      route: "product-4-route",
    },
    remoteProjectId: "remote-4",
    locale: "en-US",
  },
];

export const Primary: Story = {
  args: {
    category: {
      type: "category",
      key: "category-key",
      value: "Category Name",
      products: mockDataset,
    },
    category_link: {
      href: "https://placehold.co/600x400",
      linkText: "View More",
    },
    headline: "Product Teaser Headline",
    text: [
      {
        content:
          " sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu",
        data: "test",
        type: "paragraph",
      },
    ],
    teaserTextStart: true,
  },
};
