import { Teaser } from "@/components/sections/Teaser";
import type { Meta, StoryObj } from "@storybook/react";
import { paragraphArgs } from "../globals/RichTextElement.stories";
import { defaultImage } from "../mocks/imageMocks";

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
      content: paragraphArgs.content,
    },
    cta: {
      href: "Home",
      label: "Home",
    },
  },
};
