import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "../components/SearchBar";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <View style={styles.SearchContainer}>
      <SearchBar />
      <Text>subtitle</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  SearchContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
});
