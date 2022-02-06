import dayjs from "dayjs";
import React from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { Blog } from "../graphql/types";

interface ArticleProps {
  blog: Blog;
}

export const Article: React.FC<ArticleProps> = ({ blog }) => {
  const { title, body, imageUrn, createdAt } = blog;
  return (
    <View style={styles.article}>
      <View style={styles.titleWrp}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imgWrp}>
        {imageUrn ? (
          <Image source={{ uri: `${imageUrn}` }} style={styles.img} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
      <View>
        <Text style={styles.time}>
          {dayjs(createdAt as Date, "zh", true).format("MMMM,DD,YYYY") + "  "}
          发布
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgWrp: {
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  img: {
    borderWidth: 1,
    position: "relative",
    width: "90%",
    height: 180,
  },
  titleWrp: {
    width: "90%",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.2,
    color: "#000",
  },
  time: {
    color: "#444",
    letterSpacing: 0.3,
    marginVertical: 5,
    fontSize: 12,
  },
  content: {
    width: "90%",
    marginVertical: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
