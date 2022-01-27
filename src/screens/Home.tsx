import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selector";
import { AntDesign } from "@expo/vector-icons";
import { useHistory } from "react-router-native";
import { Alert, AlertType } from "../components/Alert";
import { CatList } from "../components/CatList";

const Home = () => {
  const currUser = useSelector(selectCurrentUser);
  const histroy = useHistory();

  return (
    <View style={styles.home}>
      <CatList />
      <View>
        {currUser ? (
          <Alert message='登录成功!' type={AlertType.SUCCESS} />
        ) : (
          <Alert message='登录账号后可发布文章' type={AlertType.INFO} />
        )}
      </View>
      {currUser ? (
        <AntDesign
          style={styles.newPost}
          name='pluscircle'
          size={40}
          color='black'
          onPress={() => {
            histroy.push("/new-post");
          }}
        />
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 28,
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  newPost: {
    color: "#000000",
    position: "absolute",
    right: 30,
    bottom: 30,
    zIndex: 2,
  },
});
