import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "@/components/page-body-count/Section";

const meta: Meta<typeof Section> = {
  title: "components/PageBodyContent/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    section: {
      __typename: "FirstSpiritSection",
      id: "06799e0a-0ef1-5120-9ee3-0c1c3e6fa545",
      sectionType: "teaser",
      data: {
        st_cta: null,
        st_design: {
          type: "Option",
          key: "light",
          value: "Hell",
          fsType: "Option",
          label: "Hell",
          identifier: "light",
        },
        st_headline: "Herzlich Willkommen!",
        st_image: {
          type: "Image",
          id: "ef186d45-d11a-4c7c-9f3a-c205699b8119",
          previewId: "ef186d45-d11a-4c7c-9f3a-c205699b8119.de_DE",
          meta: "",
          description: null,
          resolutions: {
            ORIGINAL: {
              url: "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          },
        },
        st_image_alt_text: "Zwei Hände halten ein Tablet, das Smart Home-Funktionen steuert",
        st_layout: {
          type: "Option",
          key: "text-image",
          value: "Text | Bild",
          fsType: "Option",
          label: "Text | Bild",
          identifier: "text-image",
        },
        st_sectionLifespanFrom: null,
        st_sectionLifespanTo: null,
        st_text: [
          {
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi sit facilis, nisi assumenda nulla velit alias, rem numquam pariatur inventore quaerat tempore, deserunt autem? Laboriosam atque minima debitis veniam.",
            data: "example",
            type: "paragraph",
          },
        ],
      },
    },
  },
};
