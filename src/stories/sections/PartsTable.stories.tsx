import { PartsTable } from "@/components/sections/PartsTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Sections/PartsTable",
  component: PartsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof PartsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Smart devices and systems 2022",
    text: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque semper. Nam vel auctor risus, in convallis nisl.",
        data: {},
        type: "",
      },
    ],
    tableContent: [
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "Smart devices and systems",
                        data: {},
                      },
                    ],
                    type: "text",
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "2022",
                        data: {},
                      },
                    ],
                    type: "text",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content: " ",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content: " ",
                    data: {},
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content: "Smart TV (television)",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "58.5%",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content: "Smart Speaker (intelligent/WLAN speaker)",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "15.2%",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content:
                      "Smart energy management system (e.g. thermostat, electricity meter, lighting)",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "9.7%",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content:
                      "Smart security system (e.g. alarm system, smoke detector, surveillance camera)",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "9.5%",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    type: "text",
                    content:
                      "Smart household appliance (e.g. vacuum robot, refrigerator, washing machine)",
                    data: {},
                  },
                ],
                type: "td",
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        type: "text",
                        content: "13.0%",
                        data: {},
                      },
                    ],
                    type: "block",
                  },
                ],
                type: "td",
              },
            ],
            type: "tr",
          },
        ],
        type: "table",
      },
    ],
  },
};
