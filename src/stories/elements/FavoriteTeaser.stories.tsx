import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteTeaser } from "@/components/elements/FavoriteTeaser";

const meta = {
  title: "components/Elements/FavoriteTeaser",
  component: FavoriteTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof FavoriteTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "TestID",
    title: "Product Name",
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt text",
    },
  },
};
