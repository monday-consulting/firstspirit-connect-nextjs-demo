import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "@/components/section/Features";

const meta: Meta<typeof Features> = {
  title: "components/Section/Features",
  component: Features,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    text: [
      {
        content: "Subheadline",
        data: "",
        type: "",
      },
    ],
    features: [
      {
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
      {
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
    ],
  },
};
