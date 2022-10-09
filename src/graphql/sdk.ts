import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Blog = {
  __typename?: 'Blog';
  author: Scalars['String'];
  authorAvatar: Scalars['String'];
  authorId: Scalars['Float'];
  body: Scalars['String'];
  categories: Array<Category>;
  commentCount: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  desc: Scalars['String'];
  identifier: Scalars['String'];
  imageUrn: Maybe<Scalars['String']>;
  isPublished: Maybe<Scalars['Boolean']>;
  likedBy: Maybe<Scalars['String']>;
  likesCount: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  tagNames: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  voteScore: Maybe<Scalars['Float']>;
};

export type Category = {
  __typename?: 'Category';
  bannerUrn: Maybe<Scalars['String']>;
  blogs: Maybe<Array<Blog>>;
  desc: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  blog: Blog;
  blog_identifier: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  replies: Reply;
  reply_identifiers: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  blog: Blog;
  blogId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  isLiked: Scalars['Int'];
  likedBy: Scalars['String'];
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: UserInfo;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  from: User;
  identifier: Scalars['String'];
  msgFrom: Scalars['String'];
  msgTo: Scalars['String'];
  to: User;
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddLike: Like;
  RemoveLike: Like;
  addTagToBlog: Blog;
  changeAvatar: Scalars['Boolean'];
  createBlog: Blog;
  createCategory: Category;
  createTag: Tag;
  deleteBlog: Blog;
  deleteCloudinaryImage: Scalars['Boolean'];
  deleteTag: Tag;
  editComment: Comment;
  follow: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  newComment: Comment;
  pubBlog: Blog;
  pubSubMutation: Scalars['Boolean'];
  publishMutation: Scalars['Boolean'];
  pubsubMutationToDynamicTopic: Scalars['Boolean'];
  register: Scalars['Boolean'];
  removeComment: Comment;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  sendMessage: Message;
  updateBlog: Blog;
  updateCategory: Category;
  uploadBlogPic: Scalars['String'];
};

export type MutationAddLikeArgs = {
  blogId: Scalars['Float'];
};

export type MutationRemoveLikeArgs = {
  blogId: Scalars['Float'];
};

export type MutationAddTagToBlogArgs = {
  blogIdentifier: Scalars['String'];
  tagName: Scalars['String'];
};

export type MutationChangeAvatarArgs = {
  avatarUrl: Scalars['String'];
};

export type MutationCreateBlogArgs = {
  body: Scalars['String'];
  imageUrn: Scalars['String'];
  isPublished: Scalars['Boolean'];
  title: Scalars['String'];
};

export type MutationCreateCategoryArgs = {
  bannerUrn: Scalars['String'];
  desc: Scalars['String'];
  name: Scalars['String'];
};

export type MutationCreateTagArgs = {
  name: Scalars['String'];
};

export type MutationDeleteBlogArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteCloudinaryImageArgs = {
  cloudinaryUrl: Scalars['String'];
};

export type MutationDeleteTagArgs = {
  name: Scalars['String'];
};

export type MutationEditCommentArgs = {
  identifier: Scalars['String'];
  newContent: Scalars['String'];
};

export type MutationFollowArgs = {
  username: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationNewCommentArgs = {
  blogIdentifier: Scalars['String'];
  content: Scalars['String'];
};

export type MutationPubBlogArgs = {
  identifier: Scalars['String'];
};

export type MutationPubSubMutationArgs = {
  id: Scalars['Float'];
  message: InputMaybe<Scalars['String']>;
};

export type MutationPublishMutationArgs = {
  id: Scalars['Float'];
  message: InputMaybe<Scalars['String']>;
};

export type MutationPubsubMutationToDynamicTopicArgs = {
  id: Scalars['Float'];
  message: InputMaybe<Scalars['String']>;
  topic: Scalars['String'];
};

export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationRemoveCommentArgs = {
  identifier: Scalars['String'];
};

export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Float'];
};

export type MutationSendMessageArgs = {
  content: Scalars['String'];
  to: Scalars['String'];
};

export type MutationUpdateBlogArgs = {
  identifier: Scalars['String'];
  newBody: Scalars['String'];
  newDesc: Scalars['String'];
  newImage: Scalars['String'];
  newTitle: Scalars['String'];
};

export type MutationUpdateCategoryArgs = {
  desc: Scalars['String'];
  newBanner: Scalars['String'];
  newName: Scalars['String'];
  oldName: Scalars['String'];
};

export type MutationUploadBlogPicArgs = {
  filename: Scalars['String'];
  identifier: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currUser: Maybe<User>;
  currentDate: Scalars['DateTime'];
  getBlogBySlug: Blog;
  getBlogComments: Array<Comment>;
  getCatWithBlogs: Category;
  getCategoryByName: Category;
  getMessages: Array<Message>;
  getOwnBlogs: Array<Blog>;
  getTagByName: Tag;
  getUserCollections: Array<Blog>;
  listAllBlogs: Array<Blog>;
  listAllCategories: Array<Category>;
  listAllTags: Array<Tag>;
  listFollower: Scalars['String'];
  listFollowing: Scalars['String'];
  relatedBlogs: Array<Blog>;
  searchBlog: Array<Blog>;
  users: Array<User>;
};

export type QueryGetBlogBySlugArgs = {
  slug: Scalars['String'];
};

export type QueryGetBlogCommentsArgs = {
  identifier: Scalars['String'];
};

export type QueryGetCatWithBlogsArgs = {
  identifier: Scalars['String'];
};

export type QueryGetCategoryByNameArgs = {
  name: Scalars['String'];
};

export type QueryGetMessagesArgs = {
  from: Scalars['String'];
};

export type QueryGetTagByNameArgs = {
  name: Scalars['String'];
};

export type QueryGetUserCollectionsArgs = {
  userId: Scalars['Float'];
};

export type QueryRelatedBlogsArgs = {
  author: Scalars['String'];
  identifier: Scalars['String'];
};

export type QuerySearchBlogArgs = {
  keyword: Scalars['String'];
};

export type Reply = {
  __typename?: 'Reply';
  comments: Comment;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

/** User Roles */
export const enum Roles {
  /** Admin User */
  Admin = 'ADMIN',
  /** Authenticated User */
  AuthUser = 'AUTH_USER',
  /** Unauthenticated User */
  Passager = 'PASSAGER',
}

export type Subscription = {
  __typename?: 'Subscription';
  getMessage: Message;
  getNotification: Notification;
  subscriptionWithFilterToDynamicTopic: Notification;
};

export type SubscriptionSubscriptionWithFilterToDynamicTopicArgs = {
  topic: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  blogs: Array<Blog>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar: Maybe<Scalars['String']>;
  blogs: Array<Blog>;
  comments: Array<Comment>;
  email: Scalars['String'];
  followerIds: Maybe<Scalars['String']>;
  followers: Array<User>;
  followingIds: Maybe<Scalars['String']>;
  followings: Array<User>;
  likedBlogNum: Maybe<Scalars['Float']>;
  likedBlogs: Maybe<Array<Blog>>;
  likes: Array<Like>;
  replies: Array<Reply>;
  userRole: Maybe<Roles>;
  username: Scalars['String'];
  votes: Array<Vote>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  avatar: Scalars['String'];
  userRole: Scalars['String'];
  username: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  blog: Blog;
  user: User;
  username: Scalars['String'];
  value: Scalars['Float'];
};

export const RegisterDocument = gql`
  mutation Register(
    $registerPassword: String!
    $registerEmail: String!
    $registerUsername: String!
  ) {
    register(
      password: $registerPassword
      email: $registerEmail
      username: $registerUsername
    )
  }
`;
export const LoginDocument = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      accessToken
      user {
        username
        userRole
        avatar
      }
    }
  }
`;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export const CreateBlogDocument = gql`
  mutation CreateBlog(
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
      isPublished
      author
    }
  }
`;
export const PubBlogDocument = gql`
  mutation PubBlog($identifier: String!) {
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
export const DeleteCloudinaryImageDocument = gql`
  mutation DeleteCloudinaryImage($cloudinaryUrl: String!) {
    deleteCloudinaryImage(cloudinaryUrl: $cloudinaryUrl)
  }
`;
export const CurrUserDocument = gql`
  query CurrUser {
    currUser {
      username
      email
      userRole
      avatar
    }
  }
`;
export const GetBlogBySlugDocument = gql`
  query GetBlogBySlug($slug: String!) {
    getBlogBySlug(slug: $slug) {
      identifier
      createdAt
      slug
      title
      desc
      body
      imageUrn
      author
      isPublished
      commentCount
      voteScore
      likesCount
    }
  }
`;
export const RelatedBlogsDocument = gql`
  query RelatedBlogs($relatedBlogsIdentifier: String!, $author: String!) {
    relatedBlogs(identifier: $relatedBlogsIdentifier, author: $author) {
      identifier
      createdAt
      slug
      title
      desc
      imageUrn
      tagNames
      author
    }
  }
`;
export const SearchBlogDocument = gql`
  query SearchBlog($keyword: String!) {
    searchBlog(keyword: $keyword) {
      identifier
      title
      desc
    }
  }
`;
export const GetBlogCommentsDocument = gql`
  query GetBlogComments($getBlogCommentsIdentifier: String!) {
    getBlogComments(identifier: $getBlogCommentsIdentifier) {
      identifier
      content
      username
      createdAt
      updatedAt
      blog_identifier
      blog {
        identifier
        createdAt
        slug
        title
        desc
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    Register(
      variables: RegisterMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RegisterMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RegisterMutation>(RegisterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Register',
        'mutation'
      );
    },
    Login(
      variables: LoginMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LoginMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginMutation>(LoginDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Login',
        'mutation'
      );
    },
    Logout(
      variables?: LogoutMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LogoutMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LogoutMutation>(LogoutDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Logout',
        'mutation'
      );
    },
    CreateBlog(
      variables: CreateBlogMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateBlogMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateBlogMutation>(CreateBlogDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CreateBlog',
        'mutation'
      );
    },
    PubBlog(
      variables: PubBlogMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<PubBlogMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PubBlogMutation>(PubBlogDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PubBlog',
        'mutation'
      );
    },
    DeleteCloudinaryImage(
      variables: DeleteCloudinaryImageMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<DeleteCloudinaryImageMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteCloudinaryImageMutation>(
            DeleteCloudinaryImageDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'DeleteCloudinaryImage',
        'mutation'
      );
    },
    CurrUser(
      variables?: CurrUserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CurrUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CurrUserQuery>(CurrUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'CurrUser',
        'query'
      );
    },
    GetBlogBySlug(
      variables: GetBlogBySlugQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetBlogBySlugQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBlogBySlugQuery>(GetBlogBySlugDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetBlogBySlug',
        'query'
      );
    },
    RelatedBlogs(
      variables: RelatedBlogsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<RelatedBlogsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RelatedBlogsQuery>(RelatedBlogsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'RelatedBlogs',
        'query'
      );
    },
    SearchBlog(
      variables: SearchBlogQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<SearchBlogQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SearchBlogQuery>(SearchBlogDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SearchBlog',
        'query'
      );
    },
    GetBlogComments(
      variables: GetBlogCommentsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetBlogCommentsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBlogCommentsQuery>(
            GetBlogCommentsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'GetBlogComments',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type RegisterMutationVariables = Exact<{
  registerPassword: Scalars['String'];
  registerEmail: Scalars['String'];
  registerUsername: Scalars['String'];
}>;

export type RegisterMutation = { __typename?: 'Mutation'; register: boolean };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginResponse';
    accessToken: string;
    user: {
      __typename?: 'UserInfo';
      username: string;
      userRole: string;
      avatar: string;
    };
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type CreateBlogMutationVariables = Exact<{
  imageUrn: Scalars['String'];
  isPublished: Scalars['Boolean'];
  body: Scalars['String'];
  title: Scalars['String'];
}>;

export type CreateBlogMutation = {
  __typename?: 'Mutation';
  createBlog: {
    __typename?: 'Blog';
    identifier: string;
    slug: string;
    title: string;
    body: string;
    imageUrn: string | null;
    isPublished: boolean | null;
    author: string;
  };
};

export type PubBlogMutationVariables = Exact<{
  identifier: Scalars['String'];
}>;

export type PubBlogMutation = {
  __typename?: 'Mutation';
  pubBlog: {
    __typename?: 'Blog';
    identifier: string;
    slug: string;
    title: string;
    desc: string;
    body: string;
    imageUrn: string | null;
    author: string;
    isPublished: boolean | null;
  };
};

export type DeleteCloudinaryImageMutationVariables = Exact<{
  cloudinaryUrl: Scalars['String'];
}>;

export type DeleteCloudinaryImageMutation = {
  __typename?: 'Mutation';
  deleteCloudinaryImage: boolean;
};

export type CurrUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrUserQuery = {
  __typename?: 'Query';
  currUser: {
    __typename?: 'User';
    username: string;
    email: string;
    userRole: Roles | null;
    avatar: string | null;
  } | null;
};

export type GetBlogBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type GetBlogBySlugQuery = {
  __typename?: 'Query';
  getBlogBySlug: {
    __typename?: 'Blog';
    identifier: string;
    createdAt: any;
    slug: string;
    title: string;
    desc: string;
    body: string;
    imageUrn: string | null;
    author: string;
    isPublished: boolean | null;
    commentCount: number | null;
    voteScore: number | null;
    likesCount: number | null;
  };
};

export type RelatedBlogsQueryVariables = Exact<{
  relatedBlogsIdentifier: Scalars['String'];
  author: Scalars['String'];
}>;

export type RelatedBlogsQuery = {
  __typename?: 'Query';
  relatedBlogs: Array<{
    __typename?: 'Blog';
    identifier: string;
    createdAt: any;
    slug: string;
    title: string;
    desc: string;
    imageUrn: string | null;
    tagNames: string;
    author: string;
  }>;
};

export type SearchBlogQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;

export type SearchBlogQuery = {
  __typename?: 'Query';
  searchBlog: Array<{
    __typename?: 'Blog';
    identifier: string;
    title: string;
    desc: string;
  }>;
};

export type GetBlogCommentsQueryVariables = Exact<{
  getBlogCommentsIdentifier: Scalars['String'];
}>;

export type GetBlogCommentsQuery = {
  __typename?: 'Query';
  getBlogComments: Array<{
    __typename?: 'Comment';
    identifier: string;
    content: string;
    username: string;
    createdAt: any;
    updatedAt: any | null;
    blog_identifier: string | null;
    blog: {
      __typename?: 'Blog';
      identifier: string;
      createdAt: any;
      slug: string;
      title: string;
      desc: string;
    };
  }>;
};
