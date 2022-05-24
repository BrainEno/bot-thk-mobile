import { gql } from 'graphql-request';

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
        author
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
