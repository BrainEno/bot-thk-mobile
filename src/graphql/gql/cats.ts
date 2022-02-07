import { gql } from "graphql-request";

export const getCatWithBlogsQuery = gql`
  query GetCatWithBlogs {
    getCatWithBlogs(identifier: "all") {
      name
      identifier
      desc
      bannerUrn
      blogs {
        identifier
        createdAt
        updatedAt
<<<<<<< HEAD
        author
=======
>>>>>>> d09fd7f619cb57e1c2e6541a39dbb602c66ec397
        slug
        title
        desc
        body
        imageUrn
        isPublished
        commentCount
        voteScore
        likesCount
      }
    }
  }
`;
