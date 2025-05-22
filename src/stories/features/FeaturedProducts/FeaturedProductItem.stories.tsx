import {
  FeaturedProductItem,
  type FeaturedProductItemProps,
} from "@/components/features/FeaturedProducts/FeaturedProductItem";
import { defaultImage } from "@/stories/mocks/imageMocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FeaturedProductItem> = {
  title: "components/Features/FeaturedProducts/FeaturedProductItem",
  component: FeaturedProductItem,
  tags: ["autodocs"],
} satisfies Meta<typeof FeaturedProductItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const featuredProductItemDefaultArgs: FeaturedProductItemProps = {
  image: defaultImage,
  name: "Example Name",
  abstract: "Example Abstract",
  route: "#",
};

export const Default: Story = {
  args: featuredProductItemDefaultArgs,
};
