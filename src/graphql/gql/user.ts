import { gql } from "graphql-tag";

export const followMutation = gql`
  mutation follow($userId: number) {
    follow
  }
`;

export const listFollowingQuery = gql`
  query listFollowing {
    listFollowing
  }
`;

export const listFollowerQuery = gql`
  query listFollower {
    listFollower
  }
`;
