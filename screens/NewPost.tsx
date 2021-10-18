import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const NewPost = () => {
  return (
    <View>
      <View>
        <TextInput multiline={true} />
        <Button title='发布' onPress={() => console.log("publish")} />
      </View>
    </View>
  );
};

export default NewPost;
