import type { Meta, StoryObj } from "@storybook/react";

import ProductOverviewItem from "@/components/section/ProductOverviewItem";

const meta: Meta<typeof ProductOverviewItem> = {
  title: "components/Section/ProductOverviewItem",
  component: ProductOverviewItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headline: "Doorbell Example",
    description: "lorem ipsum...",
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
  },
};
