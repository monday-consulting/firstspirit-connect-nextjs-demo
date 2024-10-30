import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/layouts/Footer";

const meta: Meta<typeof Footer> = {
  title: "components/Layouts/Footer",
  component: Footer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    copyrightText: {
      content: [
        {
          content: "Copyright",
          data: "test",
          type: "paragraph",
        },
      ],
    },
    legalLinks: [
      {
        label: "News",
        href: "/news",
      },
      {
        label: "Produkte",
        href: "/produkte",
      },
      {
        label: "Legal",
        href: "/legal",
      },
    ],
  },
};
