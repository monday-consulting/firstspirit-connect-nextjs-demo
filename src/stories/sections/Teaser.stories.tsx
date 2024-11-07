import type { Meta, StoryObj } from "@storybook/react";
import { Teaser } from "@/components/sections/Teaser";
import { DefaultImage } from "../mocks/imageMocks";
import { DefaultText } from "../mocks/textMocks";

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
    image: DefaultImage,
    text: {
      content: [
        {
          content: DefaultText,
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
