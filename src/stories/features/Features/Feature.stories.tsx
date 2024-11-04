import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "@/components/features/Features/Feature";

const meta = {
  title: "components/Features/Features/Feature",
  component: Feature,
  tags: ["autodocs"],
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: {
      href: "#",
      label: "Learn more",
    },
    image: {
      src: "https://placehold.co/600x400",
      alt: "Alt Text",
    },
    title: "Title",
    text: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
        data: "",
        type: "",
      },
    ],
  },
};
