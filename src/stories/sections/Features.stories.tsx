import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "@/components/sections/Features";
import { DefaultImage, HighImage } from "../mocks/imageMocks";
import { DefaultText, MediumText } from "../mocks/textMocks";

const meta: Meta<typeof Features> = {
  title: "components/Sections/Features",
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
        image: DefaultImage,
        title: "Title",
        text: [
          {
            content: DefaultText,
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
        image: HighImage,
        title: "Title",
        text: [
          {
            content: MediumText,
            data: "",
            type: "",
          },
        ],
      },
    ],
  },
};
