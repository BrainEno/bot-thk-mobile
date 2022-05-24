import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';

import type { Blog } from '../graphql/types';
import { fetchAllCatAsync } from '../redux/cats/cats.action';
import { selectAllCatSelector } from '../redux/cats/cats.selector';

import { BlogPost } from './BlogPost';

export const CatList = () => {
  const allCat = useSelector(selectAllCatSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCatAsync() as any);
  }, [dispatch]);

  const handleSelected = (slug: string) => () => {
    navigate(`/blogs/${slug}`);
  };

  const renderItem = ({ item }: { item: Blog }) => {
    return <BlogPost blog={item} onPress={handleSelected(item.slug)} />;
  };

  return (
    <>
      {allCat !== null ? (
        <View style={styles.postList}>
          {allCat.name ? (
            <Text style={styles.catName}>{allCat.name.toUpperCase()}</Text>
          ) : (
            <Text>loading</Text>
          )}
          {allCat.blogs ? (
            <SafeAreaView>
              <FlatList
                data={allCat.blogs}
                renderItem={renderItem}
                keyExtractor={(blog) => blog.identifier}
              />
            </SafeAreaView>
          ) : (
            <Text>loading</Text>
          )}
        </View>
      ) : (
        <View>
          <Text>暂时没有新的博客...</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  postList: {
    width: '100%',
  },
  catName: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingVertical: 10,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});
