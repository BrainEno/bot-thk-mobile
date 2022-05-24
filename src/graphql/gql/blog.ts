import { gql } from 'graphql-tag';

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

export const getBlogBySlugQuery = gql`
  query GetBlogBySlug($slug: String!) {
    getBlogBySlug(slug: $slug) {
      identifier
      createdAt
      slug
      title
      desc
      body
      imageUrn
      isPublished
      author
      commentCount
      voteScore
      likesCount
    }
  }
`;

//删除图片
export const delCloudImgMutation = gql`
  mutation DeleteCloudinaryImage($cloudinaryUrl: String!) {
    deleteCloudinaryImage(cloudinaryUrl: $cloudinaryUrl)
  }
`;

//列出相关文章
export const relatedBlogsQuery = gql`
  query RelatedBlogs($identifier: String!, $author: String!) {
    relatedBlogs(identifier: $identifier, author: $author) {
      identifier
      createdAt
      slug
      title
      desc
      imageUrn
      author
    }
  }
`;

//搜索文章
export const searchBlogsQuery = gql`
  query SearchBlog($keyword: String!) {
    searchBlog(keyword: $keyword) {
      title
      desc
      author
      identifier
      createdAt
      slug
      imageUrn
    }
  }
`;
