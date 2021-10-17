import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export enum AlertType {
  ERROR = "ERROR",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
}

interface AlertProps {
  type: AlertType;
  message: string;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  type = AlertType.SUCCESS,
}) => {
  const renderIcon = (type: AlertType) => {
    switch (type) {
      case AlertType.SUCCESS:
        return <AntDesign name='checkcircle' size={14} color='#5CB660' />;
      case AlertType.ERROR:
        return <AntDesign name='closecircleo' size={14} color='#F06360' />;
      case AlertType.INFO:
        return <AntDesign name='infocirlceo' size={14} color='#1AB1F5' />;
    }
  };

  return (
    <View
      style={{
        ...styles.alert,
        backgroundColor:
          type === "SUCCESS"
            ? "#EDF7ED"
            : type === "INFO"
            ? "#E5F6FD"
            : "#FFF4E5",
      }}>
      {renderIcon(type)}
      <Text style={styles[`${type.toLowerCase()}`]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    height: 20,
    padding: "4px 8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
});
