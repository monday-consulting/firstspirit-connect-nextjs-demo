import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.DATA_LAYER_API_URL}`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATA_LAYER_API_TOKEN}`,
  },
});
