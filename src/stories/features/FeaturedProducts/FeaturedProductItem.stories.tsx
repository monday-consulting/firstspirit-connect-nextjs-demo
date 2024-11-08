import type { Meta, StoryObj } from "@storybook/react";
import { FeaturedProductItem } from "@/components/features/FeaturedProducts/FeaturedProductItem";

const meta: Meta<typeof FeaturedProductItem> = {
  title: "components/Features/FeaturedProducts/FeaturedProductItem",
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
    name: "Example Name",
    abstract: "Example Abstract",
    route: "#",
  },
};
