import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "@/components/section/Product";

const meta: Meta<typeof Product> = {
  title: "components/Section/Product",
  component: Product,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "123",
      categories: [
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
              src: "https://placehold.co/1000x800",
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
      ],
      description: {
        content: [
          {
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
            data: "example",
            type: "paragraph",
          },
        ],
      },
      image: {
        src: "https://placehold.co/1000x800",
        alt: "Product 1 Image",
      },
      name: "Stick Up Cam Security",
      price: "$100",
      teaserText: "Teaser text for Product 1",
    },
  },
};
