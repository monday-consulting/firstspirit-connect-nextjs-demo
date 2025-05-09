import { Feature } from "@/components/features/Features/Feature";
import { defaultImage } from "@/stories/mocks/imageMocks";
import { defaultText } from "@/stories/mocks/textMocks";
import type { Meta, StoryObj } from "@storybook/react";

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
    image: defaultImage,
    title: "Title",
    text: [
      {
        content: defaultText,
        data: {},
        type: "",
      },
    ],
  },
};
