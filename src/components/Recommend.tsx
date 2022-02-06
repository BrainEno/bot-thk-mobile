import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Recommend = () => {
  return (
    <View style={styles.recommend}>
      <View>
        <Text style={styles.text}>相关推荐</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommend: {
    flexDirection: "row",
    backgroundColor: "#eef0f4",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderTopColor: "#e7e7e7",
    borderTopWidth: 1,
  },
  text: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "700",
  },
});
