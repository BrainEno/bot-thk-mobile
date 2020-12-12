import React from "react";
import { View, Text, Button } from "react-native";
import { HomeScreenNavigationProp } from "../types";

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text>首页</Text>
      <Button
        onPress={() => {
          navigation.push("About");
        }}
        title='About'
      />
    </View>
  );
};

export default HomeScreen;
