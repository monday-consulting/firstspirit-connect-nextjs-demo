import type { Meta, StoryObj } from "@storybook/react";
import { PartsTable } from "@/components/section/PartsTable";

const meta = {
  title: "components/Elements/PartsTable",
  component: PartsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof PartsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tableHead: { colOne: "Smart devices and systems", colTwo: "2022" },
    tableRows: [
      { colOne: "Smart TV (television)", colTwo: 58.5 },
      { colOne: "Smart Speaker (intelligent/WLAN speaker)", colTwo: 15.2 },
      {
        colOne: "Smart energy management system (e.g. thermostat, electricity meter, lighting)",
        colTwo: 9.7,
      },
      {
        colOne: "Smart security system (e.g. alarm system, smoke detector, surveillance camera)",
        colTwo: 9.5,
      },
      {
        colOne: "Smart household appliance (e.g. vacuum robot, refrigerator, washing machine)",
        colTwo: 13.0,
      },
    ],
  },
};
