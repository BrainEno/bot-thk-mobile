import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://bot-chat-backend.herokuapp.com",
  cache: new InMemoryCache(),
});
