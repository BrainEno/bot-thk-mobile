import {
  split,
  HttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

//Mobile
export const uri = process.env.GRAPHQL_URI as string;
export const wsUri = process.env.GRAPHQL_WS_URI as string;
//Web
// export const wsUri=process.env.API_WS_URL as string;

const httpLink = new HttpLink({
  uri,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const wsLink = new GraphQLWsLink(
  createClient({
    url: wsUri,
  })
) as ApolloLink;

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default apolloClient;
