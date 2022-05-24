import { gql } from 'graphql-tag';

export const followMutation = gql`
  mutation follow($username: String!) {
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
