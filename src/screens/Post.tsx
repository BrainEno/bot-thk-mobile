import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { match } from "react-router-native";
import { Article } from "../components/Article";
import AuthorBlock from "../components/AuthorBlock";
import { Recommend } from "../components/Recommend";
import { Blog } from "../graphql/types";
import { getBlogBySlug } from "../requests/blog";
import { PostBtnGroup } from "../components/PostBtnGroup";

interface PostProps {
  blog: Blog;
  match: match<{ slug: string }>;
}

const Post: React.FC<PostProps> = ({ match }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  const getBlog = async () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    try {
      const data = await getBlogBySlug(match.params.slug);
      setBlog(data as Blog);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.post}>
      {loading ? <ActivityIndicator /> : blog && <Article blog={blog} />}
      {blog ? <AuthorBlock author={blog.author} /> : null}
      <Recommend />
      <PostBtnGroup />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    width: "100%",
    position: "relative",
    height: "100%",
  },
});
