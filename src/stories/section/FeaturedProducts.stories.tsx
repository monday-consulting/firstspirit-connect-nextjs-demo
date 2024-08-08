import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FeaturedProducts } from "@/components/section/FeaturedProducts";

const meta = {
  title: "components/Section/FeaturedProducts",
  component: FeaturedProducts,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    subline: "This is a subline",
    products: [
      {
        imageSource: "https://placehold.co/600x400",
        product: {
          route: "ExampleRoute",
          data: {
            tt_abstract: "ExampleAbstract",
            tt_name: "ExampleName",
            tt_teaser_image: "ExmapleTeaserImage",
          },
        },
      },
      {
        imageSource: "https://placehold.co/600x400",
        product: {
          route: "ExampleRoute",
          data: {
            tt_abstract: "ExampleAbstract",
            tt_name: "ExampleName",
            tt_teaser_image: "ExmapleTeaserImage",
          },
        },
      },
      {
        imageSource: "https://placehold.co/600x400",
        product: {
          route: "ExampleRoute",
          data: {
            tt_abstract: "ExampleAbstract",
            tt_name: "ExampleName",
            tt_teaser_image: "ExmapleTeaserImage",
          },
        },
      },
    ],
  },
};
