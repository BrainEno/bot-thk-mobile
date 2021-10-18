import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import {
  NativeRouter,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-native";
import Home from "./screens/Home";
import About from "./screens/About";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { Entypo } from "@expo/vector-icons";
import { MyIcon } from "./components/MyIcon";
import { FontAwesome5 } from "@expo/vector-icons";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import Search from "./screens/Search";
import Blogs from "./screens/Blogs";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
// import { checkUserAuth } from "./redux/auth/auth.actions";
import { selectCurrentUser } from "./redux/auth/auth.selector";
import NewPost from "./screens/NewPost";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const currUser = useSelector(selectCurrentUser);

  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <View style={styles.container}>
          {/* <StatusBar translucent={true} style='auto' animated={true} /> */}
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
              <MyIcon size={50} light />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Link to='/search'>
                <FontAwesome5
                  name='search'
                  size={15}
                  color='white'
                  style={{ marginRight: 15 }}
                  // onPress={handleSearch}
                />
              </Link>
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
            <Link to='/collection'>
              <Text style={styles.navLink}>收藏</Text>
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
                  alignItems: "center",
                }}>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/search' component={Search} />
                <Route path='/blogs/:id' component={Blogs} />
                <Route
                  path='/new-post'
                  exact
                  render={() =>
                    currUser ? <NewPost /> : <Redirect to='/login' />
                  }
                />
              </View>
            </TouchableWithoutFeedback>
          </Switch>
        </View>
      </NativeRouter>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({
      android: Platform.Version <= 20 ? 0 : null,
    }),
    flex: 1,
    backgroundColor: "#f5f5f5",
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

export default AppWrapper;
