import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
// import type { GraphQLClient } from 'graphql-request';

export type Maybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | null>
  : T | null;
export type InputMaybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | null>
  : T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  author: Scalars['String'];
  authorAvatar: Scalars['String'];
  body: Scalars['String'];
  categories: Array<Category>;
  commentCount: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  desc: Scalars['String'];
  identifier: Scalars['String'];
  imageUrn: Maybe<Scalars['String']>;
  isPublished: Maybe<Scalars['Boolean']>;
  likesCount: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  tagNames: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  userLike: Scalars['Float'];
  userVote: Scalars['Float'];
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
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  replies: Reply;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  blog: Blog;
  createdAt: Scalars['DateTime'];
  isLiked: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
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
  addTagToBlog: Blog;
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
  uploadCatBanner: Scalars['String'];
};

export type MutationAddTagToBlogArgs = {
  blogIdentifier: Scalars['String'];
  tagName: Scalars['String'];
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
  userId: Scalars['Float'];
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

export type MutationUploadCatBannerArgs = {
  catName: Scalars['String'];
  file: Scalars['Upload'];
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
  getCatWithBlogs: Category;
  getCategoryByName: Category;
  getMessages: Array<Message>;
  getOwnBlogs: Array<Blog>;
  getTagByName: Tag;
  hello: Scalars['String'];
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
  likedBlogIds: Maybe<Scalars['String']>;
  likedBlogNum: Maybe<Scalars['Float']>;
  likes: Array<Like>;
  replies: Array<Reply>;
  userRole: Maybe<Roles>;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Blog: ResolverTypeWrapper<Blog>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  Comment: ResolverTypeWrapper<Comment>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Like: ResolverTypeWrapper<Like>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  Query: ResolverTypeWrapper<{}>;
  Reply: ResolverTypeWrapper<Reply>;
  Roles: Roles;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Tag: ResolverTypeWrapper<Tag>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  Vote: ResolverTypeWrapper<Vote>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Blog: Blog;
  Boolean: Scalars['Boolean'];
  Category: Category;
  Comment: Comment;
  DateTime: Scalars['DateTime'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Like: Like;
  LoginResponse: LoginResponse;
  Message: Message;
  Mutation: {};
  Notification: Notification;
  Query: {};
  Reply: Reply;
  String: Scalars['String'];
  Subscription: {};
  Tag: Tag;
  Upload: Scalars['Upload'];
  User: User;
  Vote: Vote;
};

export type BlogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']
> = {
  author: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authorAvatar: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories: Resolver<
    Array<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  commentCount: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  desc: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrn: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPublished: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  likesCount: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagNames: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  userLike: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  userVote: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  voteScore: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = {
  bannerUrn: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogs: Resolver<
    Maybe<Array<ResolversTypes['Blog']>>,
    ParentType,
    ContextType
  >;
  desc: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  blog: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replies: Resolver<ResolversTypes['Reply'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LikeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']
> = {
  blog: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  isLiked: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']
> = {
  accessToken: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = {
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  from: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  msgFrom: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  msgTo: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addTagToBlog: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<MutationAddTagToBlogArgs, 'blogIdentifier' | 'tagName'>
  >;
  createBlog: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateBlogArgs,
      'body' | 'imageUrn' | 'isPublished' | 'title'
    >
  >;
  createCategory: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, 'bannerUrn' | 'desc' | 'name'>
  >;
  createTag: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTagArgs, 'name'>
  >;
  deleteBlog: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBlogArgs, 'id'>
  >;
  deleteCloudinaryImage: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCloudinaryImageArgs, 'cloudinaryUrl'>
  >;
  deleteTag: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTagArgs, 'name'>
  >;
  editComment: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationEditCommentArgs, 'identifier' | 'newContent'>
  >;
  follow: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationFollowArgs, 'userId'>
  >;
  login: Resolver<
    ResolversTypes['LoginResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >;
  logout: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  newComment: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationNewCommentArgs, 'blogIdentifier' | 'content'>
  >;
  pubBlog: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<MutationPubBlogArgs, 'identifier'>
  >;
  pubSubMutation: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationPubSubMutationArgs, 'id'>
  >;
  publishMutation: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationPublishMutationArgs, 'id'>
  >;
  pubsubMutationToDynamicTopic: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationPubsubMutationToDynamicTopicArgs, 'id' | 'topic'>
  >;
  register: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'email' | 'password' | 'username'>
  >;
  removeComment: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCommentArgs, 'identifier'>
  >;
  revokeRefreshTokensForUser: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRevokeRefreshTokensForUserArgs, 'userId'>
  >;
  sendMessage: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<MutationSendMessageArgs, 'content' | 'to'>
  >;
  updateBlog: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateBlogArgs,
      'identifier' | 'newBody' | 'newDesc' | 'newImage' | 'newTitle'
    >
  >;
  updateCategory: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateCategoryArgs,
      'desc' | 'newBanner' | 'newName' | 'oldName'
    >
  >;
  uploadBlogPic: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadBlogPicArgs, 'filename' | 'identifier'>
  >;
  uploadCatBanner: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadCatBannerArgs, 'catName' | 'file'>
  >;
};

export type NotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']
> = {
  date: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  currUser: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  currentDate: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  getBlogBySlug: Resolver<
    ResolversTypes['Blog'],
    ParentType,
    ContextType,
    RequireFields<QueryGetBlogBySlugArgs, 'slug'>
  >;
  getCatWithBlogs: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<QueryGetCatWithBlogsArgs, 'identifier'>
  >;
  getCategoryByName: Resolver<
    ResolversTypes['Category'],
    ParentType,
    ContextType,
    RequireFields<QueryGetCategoryByNameArgs, 'name'>
  >;
  getMessages: Resolver<
    Array<ResolversTypes['Message']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMessagesArgs, 'from'>
  >;
  getOwnBlogs: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  getTagByName: Resolver<
    ResolversTypes['Tag'],
    ParentType,
    ContextType,
    RequireFields<QueryGetTagByNameArgs, 'name'>
  >;
  hello: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listAllBlogs: Resolver<
    Array<ResolversTypes['Blog']>,
    ParentType,
    ContextType
  >;
  listAllCategories: Resolver<
    Array<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  listAllTags: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  listFollower: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listFollowing: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedBlogs: Resolver<
    Array<ResolversTypes['Blog']>,
    ParentType,
    ContextType,
    RequireFields<QueryRelatedBlogsArgs, 'author' | 'identifier'>
  >;
  searchBlog: Resolver<
    Array<ResolversTypes['Blog']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchBlogArgs, 'keyword'>
  >;
  users: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type ReplyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Reply'] = ResolversParentTypes['Reply']
> = {
  comments: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  content: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  identifier: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  getMessage: SubscriptionResolver<
    ResolversTypes['Message'],
    'getMessage',
    ParentType,
    ContextType
  >;
  getNotification: SubscriptionResolver<
    ResolversTypes['Notification'],
    'getNotification',
    ParentType,
    ContextType
  >;
  subscriptionWithFilterToDynamicTopic: SubscriptionResolver<
    ResolversTypes['Notification'],
    'subscriptionWithFilterToDynamicTopic',
    ParentType,
    ContextType,
    RequireFields<SubscriptionSubscriptionWithFilterToDynamicTopicArgs, 'topic'>
  >;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = {
  blogs: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  avatar: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogs: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  comments: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followerIds: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  followers: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  followingIds: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  followings: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  likedBlogIds: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  likedBlogNum: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  likes: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  replies: Resolver<Array<ResolversTypes['Reply']>, ParentType, ContextType>;
  userRole: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes: Resolver<Array<ResolversTypes['Vote']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Vote'] = ResolversParentTypes['Vote']
> = {
  blog: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  user: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  username: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Blog: BlogResolvers<ContextType>;
  Category: CategoryResolvers<ContextType>;
  Comment: CommentResolvers<ContextType>;
  DateTime: GraphQLScalarType;
  Like: LikeResolvers<ContextType>;
  LoginResponse: LoginResponseResolvers<ContextType>;
  Message: MessageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Notification: NotificationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Reply: ReplyResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  Tag: TagResolvers<ContextType>;
  Upload: GraphQLScalarType;
  User: UserResolvers<ContextType>;
  Vote: VoteResolvers<ContextType>;
};

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

// const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

// export function getSdk(
//   client: GraphQLClient,
//   withWrapper: SdkFunctionWrapper = defaultWrapper
// ) {
//   return {
//     withWrapper,
//   };
// }
// export type Sdk = ReturnType<typeof getSdk>;
