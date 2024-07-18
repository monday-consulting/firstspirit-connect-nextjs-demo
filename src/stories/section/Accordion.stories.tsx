import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "@/components/section/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "components/Section/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     data: {
//     st_accordion: [{data: {
//       st_content:""
//     },id:"",previewId:""}]
//     st_headline: "",
//     st_info:"",
//     st_subline:"",
//     }
//   }
// }
