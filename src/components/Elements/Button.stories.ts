import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.tsx";

const meta = {
  title: 'components/Elements/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    data: {
      lt_button_text: 'Button',
      lt_product_link: 'route',
      lt_internal: {
        referenceId: 'ID',
      },
    },
  }
}
