export type Cat = {
  name: string;
  blogs: LBlog[];
};

export type LBlog = {
  identifier: string;
  title: string;
  author: string;
  createdAt: string;
};
