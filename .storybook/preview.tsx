import type { Preview } from "@storybook/react";
import "../src/assets/styles/globals.css";
// biome-ignore lint/correctness/noUnusedImports: React import is needed in this file
import React from "react";
import { IntlProvider } from "use-intl";
import messages from "../messages/en-GB.json";

import { ClientProvider } from "../src/app/[locale]/provider";

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
        <ClientProvider>
          <IntlProvider locale={"en-GB"} messages={messages}>
            <Story />
          </IntlProvider>
        </ClientProvider>
      </div>
    ),
  ],
};

export default preview;
