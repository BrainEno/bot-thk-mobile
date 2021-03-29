import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { LBlog } from "../types";

interface BlogListProps {
  blog: LBlog;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: object;
  textColor: object;
}

export const BlogList: React.FC<BlogListProps> = ({
  blog,
  onPress,
  backgroundColor,
  textColor,
}) => {
  const { title, author, createdAt } = blog;
  return (
    <TouchableOpacity onPress={onPress} style={backgroundColor}>
      <View style={styles.container}>
        <View style={styles.blog}>
          <Text style={[styles.title, textColor]}>{title}</Text>
          <View style={styles.msgContainer}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.time}>{createdAt}</Text>
          </View>
        </View>
        <Image
          source={{
            uri:
              "http://www.krugerpark.co.za/images/black-maned-lion-shem-compion-590x390.jpg",
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
    width: "100%",
    height: 80,
  },
  blog: {
    marginRight: 20,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  msgContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  author: {
    fontSize: 14,
    fontWeight: "300",
    color: "#707070",
    marginRight: 20,
  },
  time: {
    fontSize: 14,
    fontWeight: "300",
    color: "#707070",
  },
  image: {
    width: 80,
    height: "100%",
  },
});
