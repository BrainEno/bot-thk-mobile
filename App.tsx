import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Home from "./screens/Home";
import About from "./screens/About";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { Entypo } from "@expo/vector-icons";
import { MyIcon } from "./components/MyIcon";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.nav}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                marginRight: 10,
                fontSize: 18,
              }}>
              BOT THK
            </Text>
            <MyIcon size={34} light />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <FontAwesome5
              name='search'
              size={15}
              color='white'
              style={{ marginRight: 15 }}
            />
            <Entypo
              name='menu'
              size={24}
              color='white'
              onPress={() => setMenuActive(!menuActive)}
            />
          </View>
        </View>
        <View style={menuActive ? styles.menu : { display: "none" }}>
          <View>
            <Link to='/login'>
              <Text style={styles.navLink}>登录</Text>
            </Link>
            <Link to='/register'>
              <Text style={styles.navLink}>注册</Text>
            </Link>
          </View>
          <Link to='/'>
            <Text style={styles.navLink}>首页</Text>
          </Link>
          <Link to='/about'>
            <Text style={styles.navLink}>关于</Text>
          </Link>
        </View>
        <Switch>
          <TouchableWithoutFeedback onPress={() => setMenuActive(false)}>
            <View
              style={{
                width: "100%",
                height: "92%",
                position: "absolute",
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Route exact path='/' component={Login} />
              <Route path='/about' component={About} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
            </View>
          </TouchableWithoutFeedback>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    width: "100%",
    height: "8%",
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    height: "92%",
    backgroundColor: "#000000",
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 0,
  },
  navLink: {
    color: "white",
    marginBottom: 24,
    fontSize: 16,
    letterSpacing: 2,
  },
});
