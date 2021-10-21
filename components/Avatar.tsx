import React from "react";
import {
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface AvatarProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  handleOpen: () => void | undefined;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  style,
  handleOpen,
}) => {
  return (
    <TouchableOpacity onPress={handleOpen}>
      <View>
        <Image source={source} style={style} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
