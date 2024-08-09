import type { Meta, StoryObj } from "@storybook/react";
import { ProductTeaser } from "@/components/elements/ProductTeaser";
import type { ProductTeaserProps } from "@/components/elements/ProductTeaser";

const meta: Meta<typeof ProductTeaser> = {
  title: "components/elements/ProductTeaser",
  component: ProductTeaser,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductTeaser>;

const mockProductData: ProductTeaserProps["product"] = {
  categories: [
    {
      type: "Dataset",
      id: "category-1",
      previewId: "preview-1",
      schema: "category-schema",
      entityType: "category",
      template: "category-template",
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
      route: "category-1-route",
      routes: {
        pageRef: "pageRef-1",
        route: "category-1-route",
      },
      remoteProjectId: "remote-1",
      locale: "en-US",
    },
  ],
  description: [
    {
      content: "Test",
      data: "test",
      type: "paragraph",
    },
  ],
  image: {
    src: "https://placehold.co/600x400",
    alt: "placeholder",
  },
  name: "Sample Product",
  price: "$100",
  teaserText: "This is a sample teaser text for the product.",
};

export const Default: Story = {
  args: {
    product: mockProductData,
    route: "https://placehold.co/600x400",
  },
};
