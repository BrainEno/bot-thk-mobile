import React from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  StyleSheet,
} from "react-native";

interface AvatarProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({ source, style }) => {
  return (
    <View>
      <Image source={source} style={style} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
