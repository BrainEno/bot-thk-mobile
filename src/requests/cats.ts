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
<<<<<<< HEAD

=======
  console.log("DATA FROM REQUEST:", data);
>>>>>>> d09fd7f619cb57e1c2e6541a39dbb602c66ec397
  return data.getCatWithBlogs;
};
