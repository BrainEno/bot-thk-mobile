import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { match } from "react-router-native";
import { Article } from "../components/Article";
import { Blog } from "../graphql/types";
import { getBlogBySlug } from "../requests/blog";

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
  }, []);

  console.log(blog);
  return (
    <View>
      {loading ? <ActivityIndicator /> : blog && <Article blog={blog} />}
    </View>
  );
};

export default Post;
