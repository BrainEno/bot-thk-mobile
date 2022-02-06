import React from "react";
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableWithoutFeedback,
} from "react-native";

interface NormalButtonProps {
  children: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const NormalButton: React.FC<NormalButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.normalBtn}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  normalBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#0074CC",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
