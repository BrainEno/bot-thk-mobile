/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { graphQLClient } from '../graphql/client';
import {
  currUserQuery,
  loginMutation,
  logoutMutation,
  registerMutation,
} from '../graphql/gql/auth';
import type { MutationLoginArgs, MutationRegisterArgs } from '../graphql/types';
import LoginResponse from '../../../backend/src/objectTypes/LoginResponse';

export const getCurrUser = async (token: string) => {
  graphQLClient.setHeader('Authorization', `Bearer ${token}`);
  const data = await graphQLClient.request(currUserQuery);

  if (data.errors) {
    return data.errors[0].message;
  }
  return data.currUser;
};

export const loginRequest = async (variables: MutationLoginArgs):Promise<LoginResponse> => {
  const data = await graphQLClient.request(loginMutation, variables);
  if (data.errors) {
    return data.errors[0].message;
  }

  return data.login.accessToken;
};

export const registerRequest = async (
  variables: MutationRegisterArgs
): Promise<boolean> => {
  const data = await graphQLClient.request(registerMutation, variables);
  if (data.errors) {
    return data.errors[0].message;
  }

  return data;
};

export const sendRefreshToken = async (): Promise<{
  ok: boolean;
  accessToken: string;
}> => {
  const res = await fetch(`${process.env.REFRESH_TOKEN as string}`);
  const data = res.json();
  return data;
};

export const logoutRequest = async (): Promise<boolean> => {
  const data = await graphQLClient.request<{ logout: boolean }>(logoutMutation);

  return data.logout;
};
