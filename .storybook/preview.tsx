import type { Preview } from "@storybook/react";
import "../src/assets/styles/globals.css";
import React from "react";
import { IntlProvider } from "use-intl";
import messages from "../messages/de_DE.json";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <IntlProvider locale={"de_DE"} messages={messages}>
          <Story />
        </IntlProvider>
      </div>
    ),
  ],
};

export default preview;
