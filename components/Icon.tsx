import React from "react";
import { Image, View } from "react-native";

interface IconProps {
  size: number;
}

export const Icon: React.FC<IconProps> = ({ size }) => {
  return (
    <View>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: size, height: size, marginLeft: 25 }}
      />
    </View>
  );
};
