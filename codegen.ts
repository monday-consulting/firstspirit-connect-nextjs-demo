import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

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
  documents: "src/gql/**/*.ts",
  generates: {
    "src/gql/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
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
