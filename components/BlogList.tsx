import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
} from "react-native";
import { LBlog } from "../types";
import { Feather } from "@expo/vector-icons";
import { StyleProp } from "react-native";
import { Link, match } from "react-router-native";

interface BlogListProps {
  blog: LBlog;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: object;
  textColor: object;
  match: match;
}

const MemoText = React.memo(
  ({
    text,
    style,
  }: {
    text: string | number | null;
    style?: StyleProp<TextStyle>;
  }) => <Text style={style}>{text}</Text>
);

export const BlogList: React.FC<BlogListProps> = ({
  blog,
  onPress,
  backgroundColor,
  textColor,
  match,
}) => {
  const { identifier, title, author, createdAt } = blog;
  return (
    <TouchableOpacity onPress={onPress} style={backgroundColor}>
      <View style={styles.container}>
        <View style={styles.blog}>
          <MemoText style={[styles.title, textColor]} text={title} />
          <View style={styles.msgContainer}>
            <MemoText style={styles.author} text={author} />
            <Text style={styles.author}>·</Text>
            <MemoText style={styles.time} text={createdAt} />
          </View>
          <Feather
            style={{ marginTop: 8, marginLeft: 3 }}
            name='more-horizontal'
            size={22}
            color='#474747'
          />
        </View>
        <Link to={`/blogs/${identifier}`}>
          <Image
            source={{
              uri:
                "http://www.krugerpark.co.za/images/black-maned-lion-shem-compion-590x390.jpg",
            }}
            style={styles.image}
          />
        </Link>
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
    fontWeight: "700",
    letterSpacing: 0.2,
    marginBottom: 8,
    marginLeft: 5,
  },
  msgContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  author: {
    fontSize: 13,
    fontWeight: "400",
    color: "#141414",
    letterSpacing: 1,

    marginLeft: 5,
  },
  time: {
    fontSize: 13,
    fontWeight: "400",
    color: "#141414",
    letterSpacing: 1,
    marginLeft: 5,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: "100%",
  },
});
