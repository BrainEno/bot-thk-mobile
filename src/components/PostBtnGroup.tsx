import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PostBtnGroup = () => {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.btnWrp}>
        <MaterialCommunityIcons
          name='thumbs-up-down'
          size={24}
          color='#474747'
        />
        <Text style={[styles.count]}>1</Text>
      </View>
      <View style={styles.btnWrp}>
        <Feather name='star' size={22} color='#474747' />
        <Text style={styles.count}>1</Text>
      </View>
      <View style={styles.btnWrp}>
        <FontAwesome5 name='comment' size={20} color='#474747' />
        <Text style={styles.count}>3</Text>
      </View>
      <Feather name='share-2' size={21} color='#474747' />
      <Feather name='more-vertical' size={22} color='#474747' />
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#eee",
    paddingVertical: 10,
    shadowOffset: { width: 0, height: -2 },
    shadowColor: "#292d32",
    shadowOpacity: 0.8,
    shadowRadius: 7,
  },
  count: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 5,
  },
  btnWrp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
