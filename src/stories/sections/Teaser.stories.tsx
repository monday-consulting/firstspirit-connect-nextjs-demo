import type { Meta, StoryObj } from "@storybook/react";
import { Teaser } from "@/components/sections/Teaser";
import { defaultImage } from "../mocks/imageMocks";
import { defaultText } from "../mocks/textMocks";

const meta = {
  title: "components/Sections/Teaser",
  component: Teaser,
  tags: ["autodocs"],
} satisfies Meta<typeof Teaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageStart: true,
    headline: "Headline",
    image: defaultImage,
    text: {
      content: [
        {
          content: defaultText,
          data: "test",
          type: "paragraph",
        },
      ],
    },
    cta: {
      href: "Home",
      label: "Home",
    },
  },
};
