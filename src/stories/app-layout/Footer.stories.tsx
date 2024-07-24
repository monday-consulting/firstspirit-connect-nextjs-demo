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
    copyrightText: "CopyrightText",
    legalLinks: [
      {
        name: "News",
        route: "/news",
      },
      {
        name: "Produkte",
        route: "/produkte",
      },
      {
        name: "Legal",
        route: "/legal",
      },
    ],
  },
};
