import type { Meta, StoryObj } from "@storybook/react";
import { Feature } from "@/components/features/Features/Feature";
import { DefaultImage } from "@/stories/mocks/imageMocks";
import { DefaultText } from "@/stories/mocks/textMocks";

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
};
