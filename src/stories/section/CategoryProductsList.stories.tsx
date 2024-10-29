import type { Meta, StoryObj } from "@storybook/react";
import { CategoryProductsList } from "@/components/section/CategoryProductsList";

const meta: Meta<typeof CategoryProductsList> = {
  title: "components/Elements/CategoryProductsList",
  component: CategoryProductsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryProductsList>;

export const Default: Story = {
  args: {
    products: [
      {
        name: "Product 1",
        description: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        route: "#",
        image: {
          src: "https://placehold.co/600x400",
          alt: "Alt text",
        },
      },
    ],
  },
};
