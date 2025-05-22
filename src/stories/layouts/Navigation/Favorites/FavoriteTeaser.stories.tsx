import { FavoriteTeaser } from "@/components/layouts/Navigation/Favorites/FavoriteTeaser";
import { defaultImage } from "@/stories/mocks/imageMocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Layouts/Navigation/Favorites/FavoriteTeaser",
  component: FavoriteTeaser,
  tags: ["autodocs"],
} satisfies Meta<typeof FavoriteTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "TestID",
    title: "Product Name",
    image: defaultImage,
  },
};
