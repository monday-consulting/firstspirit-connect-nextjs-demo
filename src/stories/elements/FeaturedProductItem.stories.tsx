import type { Meta, StoryObj } from "@storybook/react";
import FeaturedProductItem from "@/components/elements/FeaturedProductItem";

const meta: Meta<typeof FeaturedProductItem> = {
  title: "components/Elements/FeaturedProductItem",
  component: FeaturedProductItem,
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
};
