import { FavoriteButton } from "@/components/layouts/Navigation/Favorites/FavoriteButton";
import { defaultImage } from "@/stories/mocks/imageMocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FavoriteButton> = {
  title: "components/Layouts/Navigation/Favorites/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  //props need to passed to avoid error
  //props are not displayed in this instance
  args: {
    product: {
      id: "1",
      title: "Product",
      image: defaultImage,
    },
  },
};
