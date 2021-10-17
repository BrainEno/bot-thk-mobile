import React from "react";
import { View, Text, Image } from "react-native";
import { Blog } from "../graphql/types";

interface ArticleProps {
  blog: Blog & { createdAt: any };
}

export const Article: React.FC<ArticleProps> = ({ blog }) => {
  const { title, author, body, imageUrn, createdAt } = blog;
  return (
    <View>
      {imageUrn && <Image source={{ uri: `${imageUrn}` }}></Image>}
      <Text>{title}</Text>
      <View>
        <Text>{createdAt}</Text>
        <Text>{author}</Text>
      </View>
      <View>{body}</View>
    </View>
  );
};
