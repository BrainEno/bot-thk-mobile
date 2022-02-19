import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Avatar } from "./Avatar";
import { NormalButton } from "./NormalButton";

const AuthorBlock = ({ author }: { author: string }) => {
  return (
    <View style={styles.author}>
      <View>
        <Text style={styles.nameText}>发布者</Text>
        <View style={styles.avatarCon}>
          <View style={styles.avatarWrp}>
            <Text style={styles.avatarText}>
              {author.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.nameText}>{author}</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <NormalButton onPress={() => {}}>
          <Text style={styles.btnText}>关注</Text>
        </NormalButton>
      </View>
    </View>
  );
};

export default AuthorBlock;

const styles = StyleSheet.create({
  author: {
    flexDirection: "row",
    backgroundColor: "#eef0f4",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 1,
  },
  nameText: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "700",
  },
  avatarCon: {
    flexDirection: "row",
    marginTop: 15,
  },
  avatarWrp: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#81ecec",
    marginRight: 20,
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  btnText: {
    fontWeight: "800",
    color: "#fff",
  },
});
