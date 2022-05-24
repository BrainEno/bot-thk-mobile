import { gql } from 'graphql-tag';

export const registerMutation = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;

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
