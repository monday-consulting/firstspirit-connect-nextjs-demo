import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "@/components/elements/FavoriteButton";

const meta: Meta<typeof FavoriteButton> = {
  title: "components/Elements/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      id: "1",
      title: "Product",
      image: {
        src: "https://via.placeholder.com/150",
        alt: "Product",
      },
    },
  },
};
