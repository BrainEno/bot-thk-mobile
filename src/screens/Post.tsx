import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';

import { Article } from '../components/Article';
import AuthorBlock from '../components/AuthorBlock';
import type { Blog } from '../graphql/types';
import { getBlogBySlug, getRelatedBlogs } from '../requests/blog';
import { PostBtnGroup } from '../components/PostBtnGroup';
import { BlogPost } from '../components/BlogPost';
import { useNavigate, useParams } from 'react-router-native';

const Post = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState<Blog[]>([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  const getBlogAndRelated = useCallback(() => {
    if (slug) {
      getBlogBySlug(slug)
        .then((b: Blog) => {
          setBlog(b);
          const rbs = getRelatedBlogs({
            identifier: b.identifier,
            author: b.author,
          });
          return rbs;
        })
        .then((rbs) => {
          setRelated(rbs);
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [slug]);

  useEffect(() => {
    getBlogAndRelated();
  }, [getBlogAndRelated]);

  return (
    <View style={styles.post}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View>
              {loading ? (
                <ActivityIndicator />
              ) : (
                blog && <Article blog={blog} />
              )}
              {blog ? <AuthorBlock authorName={blog.author} /> : null}
            </View>
            <View style={styles.textWrp}>
              <Text style={styles.text}>相关推荐</Text>
            </View>
          </View>
        }
        data={related}
        keyExtractor={(item) => item.identifier}
        renderItem={({ item }) => (
          <View style={styles.related}>
            <BlogPost
              blog={item}
              onPress={() => navigate(`/blogs/${item.slug}`)}
            />
          </View>
        )}
      />
      <PostBtnGroup />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    width: '100%',
    position: 'relative',
    height: '100%',
    paddingBottom: 40,
  },
  related: {
    flexDirection: 'row',
    backgroundColor: '#eef0f4',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  textWrp: {
    backgroundColor: '#eef0f4',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '700',
  },
});
