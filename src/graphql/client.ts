import { GraphQLClient } from 'graphql-request';

//Mobile
// export const uri = process.env.GRAPHQL_URI as string;
//Web
// export const uri = process.env.API_URL as string;
//Forwarding
export const uri=process.env.FORWARDING as string;

export const graphQLClient = new GraphQLClient(uri, {
  credentials: 'include',
  mode: 'cors',
});

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  _withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    graphQLClient: client,
  };
}

export type Sdk = ReturnType<typeof getSdk>;
