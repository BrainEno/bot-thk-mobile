import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { match } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selector";
import { AntDesign } from "@expo/vector-icons";
interface HomeProps {
  match: match;
}

const Home: React.FC<HomeProps> = ({ match }) => {
  const currUser = useSelector(selectCurrentUser);

  return (
    <ScrollView style={styles.home} keyboardShouldPersistTaps='always'>
      <View>
        <Text>Bottom Think</Text>
        <Text>{currUser ? currUser.username : "please login"}</Text>
        {currUser ? (
          <AntDesign
            style={styles.new}
            name='pluscircle'
            size={24}
            color='black'
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 28,
    width: "100%",
  },
  new: {
    color: "#000000",
  },
});
