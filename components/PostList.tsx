import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { match } from "react-router";
import { Cat, LBlog } from "../types";
import { BlogList } from "./BlogList";

interface PostListProps {
  cat: Cat;
  match: match;
}

export const PostList: React.FC<PostListProps> = ({ cat, match }) => {
  const { name, blogs } = cat;
  const [selectedId, setSelectedId] = useState("");
  const renderItem = ({ item }: { item: LBlog }) => {
    const backgroundColor =
      item.identifier === selectedId ? "#f6f8fa" : "#f5f5f5";
    const color = item.identifier === selectedId ? "white" : "black";
    return (
      <BlogList
        blog={item}
        onPress={() => setSelectedId(item.identifier)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        match={match}
      />
    );
  };

  return (
    <View style={styles.postList}>
      {name && <Text style={styles.catName}>{name.toUpperCase()}</Text>}
      <FlatList
        data={blogs}
        renderItem={renderItem}
        keyExtractor={(blog) => blog.identifier}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postList: {
    width: "100%",
  },
  catName: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1,
    marginBottom: 15,
    paddingVertical: 15,
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});
