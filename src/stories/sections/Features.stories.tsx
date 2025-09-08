import type { Meta, StoryObj } from "@storybook/react";
import { Features } from "@/components/sections/Features";
import { Default as Feature } from "../features/Features/Feature.stories";

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
        data: {},
        type: "",
      },
    ],
    features: [Feature.args, Feature.args, Feature.args],
  },
};
