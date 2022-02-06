import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTimeout } from "../hooks/useTimeout";

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
  const [visiable, setVisiable] = useState(true);
  useTimeout(() => setVisiable(false));

  const renderIcon = (type: AlertType) => {
    switch (type) {
      case AlertType.SUCCESS:
        return (
          <AntDesign
            style={styles.alertIcon}
            name='checkcircle'
            size={14}
            color='#5CB660'
          />
        );
      case AlertType.ERROR:
        return (
          <AntDesign
            style={styles.alertIcon}
            name='closecircleo'
            size={14}
            color='#F06360'
          />
        );
      case AlertType.INFO:
        return (
          <AntDesign
            style={styles.alertIcon}
            name='infocirlceo'
            size={14}
            color='#1AB1F5'
          />
        );
    }
  };

  return (
    <>
      {visiable ? (
        <View
          style={{
            ...styles.alert,
            backgroundColor:
              type === "SUCCESS"
                ? "#EDF7ED"
                : type === "INFO" // eslint-disable-next-line indent
                ? "#E5F6FD" // eslint-disable-next-line indent
                : "#FFF4E5",
          }}>
          <Text style={styles.alertMsg}>
            {renderIcon(type)}
            {"  " + message}
          </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  alert: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  alertMsg: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  alertIcon: {
    marginRight: 5,
  },
});
