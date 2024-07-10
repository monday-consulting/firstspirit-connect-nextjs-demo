import type { Meta, StoryObj } from "@storybook/react";
import Dataset from "@/components/page-body-count/Dataset";

const meta: Meta<typeof Dataset> = {
  title: "components/PageBodyContent/Dataset",
  component: Dataset,
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
      id: "exampleId",
      previewId: "exampleId.de_DE",
      children: [],
      data: {},
      entityType: "",
      locale: "de_DE",
      route: "",
      routes: [],
      schema: "",
      template: "",
      type: "Dataset",
    },
  },
};
