/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  followMutation,
  listFollowerQuery,
  listFollowingQuery,
} from "../graphql/gql/user";
import { graphQLClient } from "../graphql/client";
import { getToken } from "../utils/storage";

export const follow = async (userId: number): Promise<boolean> => {
  const token = await getToken();
  graphQLClient.setHeader("Authorization", `Bearer ${token || ""}`);
  const data = await graphQLClient.request(followMutation, { userId });
  return data.follow;
};

export const listFollower = async (): Promise<string> => {
  const token = await getToken();
  graphQLClient.setHeader("Authorization", `Bearer ${token || ""}`);
  const data = await graphQLClient.request(listFollowerQuery);
  return data.listFollower;
};

export const listFollowing = async (): Promise<string> => {
  const token = await getToken();
  graphQLClient.setHeader("Authorization", `Bearer ${token || ""}`);
  const data = await graphQLClient.request(listFollowingQuery);
  return data.listFollowing;
};
