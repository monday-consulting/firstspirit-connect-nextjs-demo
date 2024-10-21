import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "@/components/elements/Feature";

const meta = {
  title: "components/Elements/Feature",
  component: Feature,
  tags: ["autodocs"],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: {
      href: "#",
      label: "Home",
    },
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    title: "Title",
    text: [
      {
        content:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        data: "",
        type: "",
      },
    ],
  },
};
