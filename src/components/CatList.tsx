import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Blog } from "../graphql/types";
import { BlogList } from "./BlogList";
import { fetchAllCatAsync } from "../redux/cats/cats.action";
import { selectAllCatSelector } from "../redux/cats/cats.selector";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-native";

export const CatList = () => {
  const allCat = useSelector(selectAllCatSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    dispatch(fetchAllCatAsync());
  }, [dispatch]);

  const handleSelected = (identifier: string, slug: string) => () => {
    setSelectedId(identifier);
    history.push(`/blogs/${slug}`);
  };

  const renderItem = ({ item }: { item: Blog }) => {
    const backgroundColor =
      item.identifier === selectedId ? "#f6f8fa" : "#f5f5f5";
    const color = item.identifier === selectedId ? "white" : "black";

    return (
      <BlogList
        blog={item}
        onPress={handleSelected(item.identifier, item.slug)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
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
            <FlatList
              data={allCat.blogs}
              renderItem={renderItem}
              keyExtractor={(blog) => blog.identifier}
            />
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
