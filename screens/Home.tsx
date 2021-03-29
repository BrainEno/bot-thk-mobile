import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { PostList } from "../components/PostList";
import { Cat } from "../types";

const cats = [
  {
    name: "novel",
    blogs: [
      {
        identifier: "1",
        title: "blog1",
        desc: "my first blog",
        author: "author1",
        createdAt: "2021/3/28",
        body: "blog1 body",
      },
      {
        identifier: "3",
        title: "blog3",
        desc: "my third blog",
        author: "author3",
        createdAt: "2021/1/28",
        body: "blog3 body",
      },
    ],
  },
  {
    name: "poem",
    blogs: [
      {
        identifier: "2",
        title: "blog2",
        desc: "my second blog",
        author: "author2",
        createdAt: "2021/2/28",
        body: "blog2 body",
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <View style={styles.home}>
      <FlatList
        data={cats}
        renderItem={({ item }) => <PostList cat={item} />}
        keyExtractor={(cat) => cat.name}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    padding: 20,
    width: "100%",
  },
});
