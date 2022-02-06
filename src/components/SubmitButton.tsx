import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface SubmitButtonProps {
  children: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onPress,
}) => {
  const [isDown, SetDown] = useState(false);
  const handlePressIn = useCallback(() => {
    SetDown(true);
  }, [SetDown]);
  const handlePressOut = useCallback(() => {
    SetDown(false);
  }, [SetDown]);

  const gradColors = isDown ? ["#292d32", "#30343a"] : ["#30343a", "#292d32"];

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}>
      <View style={styles.buttonOuter}>
        <View style={styles.buttonInner}>
          <LinearGradient
            colors={gradColors}
            style={styles.buttonFace}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}>
            {children}
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonOuter: {
    width: 220,
    height: 40,
    padding: 0,
    shadowColor: "#292d32",
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 5,
  },
  buttonInner: {
    width: 220,
    height: 40,
    margin: 0,
    padding: 0,
    shadowOffset: { width: -3, height: -3 },
    shadowColor: "#30343a",
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 5,
  },
  buttonFace: {
    padding: 12,
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
