/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { graphQLClient } from "../graphql/client";
import { getCatWithBlogsQuery } from "../graphql/gql/cats";
import { Category } from "../graphql/types";
export const getCatWithBlogs = async (
  identifier: string
): Promise<Category> => {
  const data = await graphQLClient.request(getCatWithBlogsQuery, {
    variables: identifier,
  });
  console.log("DATA FROM REQUEST:", data);
  return data.getCatWithBlogs;
};
