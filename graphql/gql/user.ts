import { ApolloError, gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { MutationLoginArgs } from "../types";
import { uri } from "../client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const graphQLClient = new GraphQLClient(uri);

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const logoutMutation = gql`
  mutation logout {
    logout
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
export const getCurrUser = async (token: string) => {
  graphQLClient.setHeader("Authorization", `Bearer ${token}`);
  const data = await graphQLClient.request(currUserQuery);
  if (data.errors) {
    return data.errors[0].message;
  }
  return data.currUser;
};

export const loginRequest = async (variables: MutationLoginArgs) => {
  const data = await graphQLClient.request(loginMutation, variables);
  if (data.errors) {
    return data.errors[0].message;
  }

  return data.login.accessToken;
};

export const logouRequest = async () => {
  const data = await graphQLClient.request(logoutMutation);

  return data.logout;
};

export const storeCookie = async (value: string) => {
  try {
    await AsyncStorage.setItem("bot", value);
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getCookie = async () => {
  try {
    const cookie = await AsyncStorage.getItem("bot");
    if (cookie) {
      return cookie;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const removeCookie = async () => {
  try {
    await AsyncStorage.removeItem("bot");
  } catch (error) {
    console.log("AsyncStorage Error: " + error.message);
    return error.message;
  }
};
