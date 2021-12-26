import { gql } from "@apollo/client";
import { getCookie, graphQLClient } from "./user";
import { MutationCreateBlogArgs } from "../types";

export const createBlogMutation = gql`
  mutation createBlog(
    $imageUrn: String!
    $isPublished: Boolean!
    $body: String!
    $title: String!
  ) {
    createBlog(
      imageUrn: $imageUrn
      isPublished: $isPublished
      body: $body
      title: $title
    ) {
      identifier
      slug
      title
      body
      imageUrn
      author
      isPublished
    }
  }
`;

export const pubBlogMutation = gql`
  mutation pubBlog($identifier: String!) {
    pubBlog(identifier: $identifier) {
      identifier
      slug
      title
      desc
      body
      imageUrn
      author
      isPublished
    }
  }
`;

export const createBlog = async (variables: MutationCreateBlogArgs) => {
  const token = await getCookie();
  graphQLClient.setHeader("Authorization", `Bearer ${token}`);
  const data = await graphQLClient.request(createBlogMutation, variables);
  console.log(data);
  return data;
};

export const pubBlog = async (variables: MutationCreateBlogArgs) => {
  const token = await getCookie();
  graphQLClient.setHeader("Authorization", `Bearer ${token}`);
  const data = await graphQLClient.request(pubBlogMutation, variables);
  console.log(data);
  return data;
};
