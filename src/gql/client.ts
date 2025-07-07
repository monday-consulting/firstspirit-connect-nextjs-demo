import { GraphQLClient } from "graphql-request";

const endpoint = process.env.DATA_LAYER_API_URL;

if (!endpoint) throw new Error("❌ DATA_LAYER_API_URL not set");

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATA_LAYER_API_TOKEN}`,
  },
});
