import React from 'react';
import type {
  GestureResponderEvent,
  TextStyle,
  ColorValue,
  StyleProp,
} from 'react-native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'react-router-native';
import dayjs from 'dayjs';

import type { Blog } from '../graphql/types';

interface BlogPostProps {
  blog: Blog;
  onPress: (event: GestureResponderEvent) => void;
  textColor?: ColorValue;
}

const MemoText = React.memo(
  ({
    text,
    style,
  }: {
    text: string | number | null;
    style?: StyleProp<TextStyle>;
  }) => <Text style={style}>{text}</Text>
);

export const BlogPost: React.FC<BlogPostProps> = ({ blog, onPress }) => {
  const { slug, title, author, createdAt, imageUrn } = blog;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.blog}>
          <MemoText style={[styles.title]} text={title} />
          <View style={styles.msgContainer}>
            <MemoText style={styles.author} text={author} />
            <Text style={styles.author}>·</Text>
            <MemoText
              style={styles.time}
              text={dayjs(createdAt as Date, 'zh', true).format('MMMM,DD,YYYY')}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Feather
              style={{ marginTop: 8, marginLeft: 3 }}
              name='star'
              size={22}
              color='#474747'
            />
            <Feather
              style={{ marginTop: 8, marginLeft: 8 }}
              name='more-horizontal'
              size={22}
              color='#474747'
            />
          </View>
        </View>
        <Link to={`/blogs/${slug}`}>
          {imageUrn ? (
            <Image
              source={{
                uri: imageUrn,
              }}
              style={styles.image}
            />
          ) : null}
        </Link>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    height: 80,
    marginTop: 8,
  },
  blog: {
    marginRight: 20,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    marginBottom: 8,
    marginLeft: 5,
    color: '#000',
  },
  msgContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  author: {
    fontSize: 13,
    fontWeight: '400',
    color: '#141414',
    letterSpacing: 1,
    marginLeft: 5,
  },
  time: {
    fontSize: 13,
    fontWeight: '400',
    color: '#474747',
    letterSpacing: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: '100%',
  },
});
