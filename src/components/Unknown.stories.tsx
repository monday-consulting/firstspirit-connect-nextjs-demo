import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Unknown from "./Unknown";

const meta: Meta<typeof Unknown> = {
    title: "components/Unknown",
    component: Unknown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        content: {
            type: "Section",
            id: "exampleId",
            previewId: "exmapleId.de_DE",
            sectionType: "Prev",
            children: [],
            data: {},
        },
    },
};
