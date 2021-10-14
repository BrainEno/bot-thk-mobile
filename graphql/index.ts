import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URI = process.env.GRAPHQL_URI;

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});
