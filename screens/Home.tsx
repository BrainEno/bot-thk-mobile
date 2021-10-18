import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { match } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selector";
import { AntDesign } from "@expo/vector-icons";
import { useHistory } from "react-router-native";
import { Alert, AlertType } from "../components/Alert";
interface HomeProps {
  match: match;
}

const Home: React.FC<HomeProps> = ({ match }) => {
  const currUser = useSelector(selectCurrentUser);
  const histroy = useHistory();

  return (
    <ScrollView style={styles.home} keyboardShouldPersistTaps='always'>
      <View>
        <Text>Bottom Think</Text>
        <Text>{currUser ? "Hello, " + currUser.username : "please login"}</Text>
      </View>
      <Alert message='登录成功!' type={AlertType.SUCCESS} />
      <AntDesign
        style={styles.newPost}
        name='pluscircle'
        size={40}
        color='black'
        onPress={() => {
          histroy.push("/new-post");
        }}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 28,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  newPost: {
    color: "#000000",
    position: "absolute",
    right: 0,
    bottom: 0,
    top: 650,
  },
});
