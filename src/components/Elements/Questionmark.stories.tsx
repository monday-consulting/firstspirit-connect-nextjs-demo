import type { Meta, StoryObj } from "@storybook/react";
import Questionmark from "./Questionmark";

const meta: Meta<typeof Questionmark> = {
    title: "components/Elements/Questionmark",
    component: Questionmark,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
