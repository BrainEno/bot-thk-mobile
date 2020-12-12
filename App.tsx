import React from "react";
import { StyleSheet, Platform } from "react-native";
import "react-native-gesture-handler";
import { BaseRouter, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "./components/Icon";
import { HomeScreenNavigationProp, RootStackParamList } from "./types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

interface RootProps {
  navigation: HomeScreenNavigationProp;
}

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC<RootProps> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: "BOT-THK",
              headerRight: () => (
                <Ionicons
                  name='ios-menu'
                  size={28}
                  color='black'
                  style={{ marginRight: 25 }}
                />
              ),
              headerLeft: () => <Icon size={35} />,
              headerStyle: {
                height: 60,
                paddingLeft: 30,
                paddingRight: 30,
              },
            }}
          />
          <Stack.Screen
            name='About'
            component={AboutScreen}
            options={{
              title: "BOT-THK",
              headerRight: () => (
                <Ionicons
                  name='ios-menu'
                  size={28}
                  color='black'
                  style={{ marginRight: 25 }}
                />
              ),
              headerLeft: () => <Icon size={35} />,
              headerStyle: {
                height: 60,
                paddingLeft: 30,
                paddingRight: 30,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
