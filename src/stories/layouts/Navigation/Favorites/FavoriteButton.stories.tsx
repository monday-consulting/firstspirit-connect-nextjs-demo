import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "@/components/layouts/Navigation/Favorites/FavoriteButton";
import { DefaultImage } from "@/stories/mocks/imageMocks";

const meta: Meta<typeof FavoriteButton> = {
  title: "components/Layouts/Navigation/Favorites/FavoriteButton",
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
      image: DefaultImage,
    },
  },
};
