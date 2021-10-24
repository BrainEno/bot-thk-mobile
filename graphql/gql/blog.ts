import { gql } from "@apollo/client";
export const pubBlogMutation = gql`
  mutation pubBlog($identifier: String!) {
    pubBlog(identifier: $identifier) {
      identifier
      slug
      title
      desc
      body
      imageUrn
      tags {
        name
      }
      categories {
        name
      }
      author
      isPublished
    }
  }
`;
