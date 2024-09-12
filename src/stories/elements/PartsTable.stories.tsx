import type { Meta, StoryObj } from "@storybook/react";
import { PartsTable } from "@/components/elements/PartsTable";

const meta = {
  title: "components/Elements/PartsTable",
  component: PartsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof PartsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tableHead: { col_one: "Smart devices and systems", col_two: "2022" },
    tableRows: [
      { col_one: "Smart TV (television)", col_two: 58.5 },
      { col_one: "Smart Speaker (intelligent/WLAN speaker)", col_two: 15.2 },
      {
        col_one: "Smart energy management system (e.g. thermostat, electricity meter, lighting)",
        col_two: 9.7,
      },
      {
        col_one: "Smart security system (e.g. alarm system, smoke detector, surveillance camera)",
        col_two: 9.5,
      },
      {
        col_one: "Smart household appliance (e.g. vacuum robot, refrigerator, washing machine)",
        col_two: 13.0,
      },
    ],
  },
};
