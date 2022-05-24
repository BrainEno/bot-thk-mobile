/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { graphQLClient } from '../graphql/client';
import {
  createBlogMutation,
  pubBlogMutation,
  getBlogBySlugQuery,
  delCloudImgMutation,
  relatedBlogsQuery } from '../graphql/gql/blog';
import type {
  Blog,
  MutationCreateBlogArgs,
  QueryRelatedBlogsArgs,
} from '../graphql/types';


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
    const data = await graphQLClient.request(getBlogBySlugQuery, {
      slug,
    });
    if (data.getBlogBySlug) {return data.getBlogBySlug;}
  } catch (error: any) {
    const err = error.message;
    if (err) {return err;}
  }
};

export const delCloudImg = async (imageUrn: string): Promise<boolean> => {
  const data = await graphQLClient.request(delCloudImgMutation, {
    cloudinaryUrl: imageUrn,
  });
  console.log(data);
  return data.deleteCloudinaryImage;
};

export const getRelatedBlogs = async (
  variables: QueryRelatedBlogsArgs
): Promise<Blog[]> => {
  const data = await graphQLClient.request(relatedBlogsQuery, variables);
  return data.relatedBlogs;
};
