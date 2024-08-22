import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/app-layout/Footer";

const meta: Meta<typeof Footer> = {
  title: "components/AppLayout/Footer",
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
