import type { Meta, StoryObj } from "@storybook/react";
import { FeaturedProductItem } from "@/components/elements/FeaturedProductItem";

const meta: Meta<typeof FeaturedProductItem> = {
  title: "components/Elements/FeaturedProductItem",
  component: FeaturedProductItem,
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt text",
    },
    name: "ExampleName",
    abstract: "ExampleAbstract",
    route: "#",
  },
};
