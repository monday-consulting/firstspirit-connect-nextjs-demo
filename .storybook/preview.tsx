import type { Preview } from "@storybook/react";
import "../src/assets/styles/globals.css";
import { IntlProvider } from "use-intl";
import messages from "../messages/de_DE.json";
import { FavoriteListProvider } from "../src/utils/contexts/favorites";
// biome-ignore lint/correctness/noUnusedImports: React import is needed in this file
import React from "react";

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
        <FavoriteListProvider>
          <IntlProvider locale={"de_DE"} messages={messages}>
            <Story />
          </IntlProvider>
        </FavoriteListProvider>
      </div>
    ),
  ],
};

export default preview;
