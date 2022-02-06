import React from "react";
import { View, StyleSheet } from "react-native";
import { Tag } from "./Tag";

const data = ["tag1", "tag2", "tag3"];

export const TagRow = () => {
  return (
    <View style={styles.tagRow}>
      {data.map((item) => (
        <Tag tagText={item} width={60} height={28} key={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagRow: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
});
