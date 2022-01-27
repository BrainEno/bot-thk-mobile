import dayjs from "dayjs";
import React from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { Blog } from "../graphql/types";

interface ArticleProps {
  blog: Blog;
}

export const Article: React.FC<ArticleProps> = ({ blog }) => {
  const { title, author, body, imageUrn, createdAt } = blog;
  return (
    <View>
      {imageUrn ? (
        <Image source={{ uri: `${imageUrn}` }} style={styles.img} />
      ) : (
        <ActivityIndicator />
      )}
      <Text>{title}</Text>
      <View>
        <Text>
          {dayjs(createdAt as Date, "zh", true).format("MMMM,DD,YYYY")}
        </Text>
        <Text>{author}</Text>
      </View>
      <View>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderWidth: 1,
    position: "relative",
    width: "100%",
    height: 135,
  },
});
