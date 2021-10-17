import { ApolloError, gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { MutationLoginArgs } from "../types";
import { uri } from "../client";

const graphQLClient = new GraphQLClient(uri);

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const currUserQuery = gql`
  query Query {
    currUser {
      username
      userRole
      avatar
    }
  }
`;

export const loginRequest = async (variables: MutationLoginArgs) => {
  const data = await graphQLClient.request(loginMutation, variables);
  if (data.errors) {
    return new ApolloError(data.errors[0].message);
  }

  return data.login.accessToken;
};

export const getCurrUser = async (token: string) => {
  graphQLClient.setHeader("Authorization", `Bearer ${token}`);
  const data = await graphQLClient.request(currUserQuery);
  if (data.errors) {
    return new ApolloError(data.errors[0].message);
  }
  return data.currUser;
};
