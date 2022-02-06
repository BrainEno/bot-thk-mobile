/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { graphQLClient } from "../graphql/client";
import {
  createBlogMutation,
  pubBlogMutation,
  getBlogBySlugQuery,
} from "../graphql/gql/blog";
import { MutationCreateBlogArgs } from "../graphql/types";

/* eslint-disable @typescript-eslint/no-unsafe-return */
export const createBlog = async (variables: MutationCreateBlogArgs) => {
  const data = await graphQLClient.request(createBlogMutation, variables);

  return data;
};

export const pubBlog = async (variables: MutationCreateBlogArgs) => {
  const data = await graphQLClient.request(pubBlogMutation, variables);

  return data;
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const data = await graphQLClient.request(getBlogBySlugQuery, { slug });
    return data.getBlogBySlug;
  } catch (error: any) {
    const err = error.message;
    if (err) return err;
  }
};
