import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selector";

const Dashboard = () => {
  const { userRole } = useSelector(selectCurrentUser);
  return (
    <View>
      <Text>DashBoard</Text>
      <Text>{userRole === "ADMIN" ? "admin" : "user"}</Text>
    </View>
  );
};

export default Dashboard;
