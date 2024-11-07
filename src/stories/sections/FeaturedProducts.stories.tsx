import type { StoryObj } from "@storybook/react";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { DefaultImage, HugeImage, TinyImage } from "../mocks/imageMocks";

const meta = {
  title: "components/Sections/FeaturedProducts",
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
        image: DefaultImage,
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
      {
        image: TinyImage,
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
      {
        image: HugeImage,
        name: "Example Name",
        abstract: "Example Abstract",
        route: "#",
      },
    ],
  },
};
