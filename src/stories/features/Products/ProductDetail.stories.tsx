import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetail } from "@/components/features/Products/ProductDetail";

const meta: Meta<typeof ProductDetail> = {
  title: "components/Features/Products/ProductDetail",
  component: ProductDetail,
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
      categories: [{ data: { tt_name: "Test Category" } }],
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
