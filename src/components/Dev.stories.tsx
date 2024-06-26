import type { Meta, StoryObj } from "@storybook/react";
import Dev from "./Dev";

const meta: Meta<typeof Dev> = {
    title: "Components/Dev",
    component: Dev,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        content: { key: "value" },
        componentName: "SampleComponent",
    },
};
