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
    title: "Video doorbell ADR-578",
    image: {
      src: "https://images.unsplash.com/photo-1721492818377-5a82c0414e9f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Alt example text",
    },
  },
};
