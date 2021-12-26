import React, { useEffect, useState } from "react";
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
// import Home from "./screens/Home";
import About from "./screens/About";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { Avatar } from "./components/Avatar";
import { Entypo } from "@expo/vector-icons";
import { MyIcon } from "./components/MyIcon";
import { FontAwesome5 } from "@expo/vector-icons";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import Search from "./screens/Search";
import Blogs from "./screens/Blogs";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store, persistor } from "./redux/store";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { selectCurrentUser } from "./redux/auth/auth.selector";
import NewPost from "./screens/NewPost";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { PersistGate } from "redux-persist/integration/react";
import { checkUserAuth, logoutStart } from "./redux/auth/auth.actions";
import Dashboard from "./screens/Dashboard";
import { useHistory } from "react-router-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Editor from "./components/Editor";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const currUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
  };

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <SafeAreaProvider style={styles.container}>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to='/'>
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
              </Link>
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
              {currUser ? (
                <View style={styles.infoWrp}>
                  <View>
                    <Link to='/dashboard'>
                      <Avatar
                        style={styles.avatar}
                        source={{
                          uri: currUser?.avatar
                            ? currUser.avatar
                            : "https://res.cloudinary.com/hapmoniym/image/upload/v1608712074/icons/avatar_w5us1g.png",
                        }}
                      />
                    </Link>
                    <View style={styles.badge} />
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.infoText}>{currUser.username}</Text>
                    <MaterialCommunityIcons
                      style={{ marginTop: 2 }}
                      name='open-in-new'
                      size={18}
                      color='#fff'
                    />
                  </View>
                  <View style={styles.follow}>
                    <Text style={styles.followNum}>2</Text>
                    <Text style={styles.followLabel}>正在关注 · </Text>
                    <Text style={styles.followNum}>0</Text>
                    <Text style={styles.followLabel}>关注者</Text>
                  </View>
                </View>
              ) : null}
              <Link to='/'>
                <View style={styles.navItem}>
                  <SimpleLineIcons name='home' size={17} color='#fff' />
                  <Text style={styles.navLink}>首页</Text>
                </View>
              </Link>
              <Link to='/collection'>
                <View style={styles.navItem}>
                  <Feather name='bookmark' size={18} color='#fff' />
                  <Text style={styles.navLink}>收藏</Text>
                </View>
              </Link>
              <Link to='/collection'>
                <View style={styles.navItem}>
                  <Feather name='users' size={18} color='#fff' />
                  <Text style={styles.navLink}>关注</Text>
                </View>
              </Link>
              <Link to='/collection'>
                <View style={styles.navItem}>
                  <MaterialIcons
                    name='chat-bubble-outline'
                    size={18}
                    color='#fff'
                  />
                  <Text style={styles.navLink}>聊天</Text>
                </View>
              </Link>
              <Link to='/about'>
                <View style={styles.navItem}>
                  <Feather name='info' size={18} color='#fff' />
                  <Text style={styles.navLink}>关于</Text>
                </View>
              </Link>
              {currUser ? (
                <Link to='/login'>
                  <TouchableWithoutFeedback onPress={handleLogout}>
                    <View style={styles.navItem}>
                      <Feather name='log-out' size={18} color='#fff' />
                      <Text style={styles.navLink}>退出</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </Link>
              ) : (
                <View>
                  <Link to='/login'>
                    <View style={styles.navItem}>
                      <Entypo name='login' size={18} color='#fff' />
                      <Text style={styles.navLink}>登录</Text>
                    </View>
                  </Link>
                  <Link to='/register'>
                    <View style={styles.navItem}>
                      <Feather name='user' size={18} color='#fff' />
                      <Text style={styles.navLink}>注册</Text>
                    </View>
                  </Link>
                </View>
              )}
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
                  {/* <Route exact path='/' component={Home} /> */}
                  <Route exact path='/' component={NewPost} />
                  {/* <Route path='editor' component={Editor} />
                  <Route
                    path='/'
                    render={() =>
                      !currUser ? <NewPost /> : <Redirect to='/editor' />
                    }
                  /> */}
                  <Route path='/about' component={About} />
                  <Route path='/register' component={Register} />
                  <Route path='/login' component={Login} />
                  <Route path='/search' component={Search} />
                  <Route path='/blogs/:id' component={Blogs} />
                  <Route
                    path='/new-post'
                    exact
                    render={() =>
                      currUser ? (
                        <NewPost editMode={false} />
                      ) : (
                        <Redirect to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/dashboard'
                    exact
                    render={() =>
                      currUser ? <Dashboard /> : <Redirect to='/login' />
                    }
                  />
                </View>
              </TouchableWithoutFeedback>
            </Switch>
          </View>
        </SafeAreaProvider>
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
  infoWrp: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  infoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginRight: 5,
    marginLeft: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    borderColor: "#57606A",
    borderWidth: 1.5,
    position: "relative",
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#3BA55D",
    position: "absolute",
    right: 2,
    top: 36,
  },
  follow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  followLabel: {
    color: "#f7f7f7",
  },
  followNum: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    marginRight: 4,
  },
  navItem: {
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  navLink: {
    color: "white",
    marginLeft: 8,
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default AppWrapper;
