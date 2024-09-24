import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.DATA_LAYER_API_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.DATA_LAYER_API_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/gql/documents/**/*.ts",
  generates: {
    "src/gql/generated/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: "// @ts-nocheck",
          },
        },
      ],
    },
  },
  hooks: {
    afterOneFileWrite: ["biome format --write ./"],
  },
};

export default config;
