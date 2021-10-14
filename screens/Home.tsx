import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { match } from "react-router";

interface HomeProps {
  match: match;
}

const Home: React.FC<HomeProps> = ({ match }) => {
  useEffect(() => {}, []);

  return (
    <ScrollView style={styles.home} keyboardShouldPersistTaps='always'>
      <View>
        <Text>Homepage</Text>
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
});
