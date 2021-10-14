export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  author: Scalars['String'];
  body: Scalars['String'];
  categories: Array<Category>;
  commentCount: Maybe<Scalars['Float']>;
  desc: Scalars['String'];
  identifier: Scalars['String'];
  imageUrn: Scalars['String'];
  isPublished: Scalars['Boolean'];
  likesCount: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  userLike: Scalars['Float'];
  userVote: Scalars['Float'];
  voteScore: Maybe<Scalars['Float']>;
};

export type Category = {
  __typename?: 'Category';
  bannerUrn: Maybe<Scalars['String']>;
  blogs: Array<Blog>;
  desc: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  blog: Blog;
  content: Scalars['String'];
  identifier: Scalars['String'];
  replies: Reply;
  username: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  blog: Blog;
  isLiked: Scalars['Float'];
  user: User;
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createCategory: Category;
  createTag: Tag;
  deleteBlog: Blog;
  deleteTag: Tag;
  editComment: Comment;
  login: LoginResponse;
  newComment: Comment;
  pubBlog: Blog;
  register: Scalars['Boolean'];
  removeComment: Comment;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  updateBlog: Blog;
  updateCategory: Category;
  uploadBlogPic: Scalars['String'];
  uploadCatBanner: Scalars['String'];
};


export type MutationCreateBlogArgs = {
  body: Scalars['String'];
  desc: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  desc: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateTagArgs = {
  name: Scalars['String'];
};


export type MutationDeleteBlogArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteTagArgs = {
  name: Scalars['String'];
};


export type MutationEditCommentArgs = {
  identifier: Scalars['String'];
  newContent: Scalars['String'];
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


export type MutationUpdateBlogArgs = {
  identifier: Scalars['String'];
  newBody: Scalars['String'];
  newDesc: Scalars['String'];
  newTitle: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  desc: Scalars['String'];
  newName: Scalars['String'];
  oldName: Scalars['String'];
};


export type MutationUploadBlogPicArgs = {
  filename: Scalars['String'];
  identifier: Scalars['String'];
};


export type MutationUploadCatBannerArgs = {
  catName: Scalars['String'];
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  getCategoryByName: Category;
  getOWnCategories: Array<Category>;
  getOwnBlogs: Array<Blog>;
  getTagByName: Tag;
  hello: Scalars['String'];
  listAllBlogs: Array<Blog>;
  listAllCategories: Array<Category>;
  listAllTags: Array<Tag>;
  users: Array<User>;
};


export type QueryGetCategoryByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetTagByNameArgs = {
  name: Scalars['String'];
};

export type Reply = {
  __typename?: 'Reply';
  comments: Comment;
  content: Scalars['String'];
  identifier: Scalars['String'];
  username: Scalars['String'];
};

/** user roles */
export const enum Roles {
  /** Admin users */
  Admin = 'ADMIN',
  /** Authenticated users */
  AuthUser = 'AUTH_USER',
  /** Unauthenticated users */
  Passager = 'PASSAGER'
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
  likedBlogNum: Scalars['Float'];
  likes: Array<Like>;
  replies: Array<Reply>;
  roles: Array<Roles>;
  username: Scalars['String'];
  votes: Array<Vote>;
};

export type Vote = {
  __typename?: 'Vote';
  blog: Blog;
  user: User;
  username: Scalars['String'];
  value: Scalars['Float'];
};
