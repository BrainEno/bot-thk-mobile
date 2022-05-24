/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { connectToDevTools } from 'react-devtools-core';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import { Avatar } from './src/components/Avatar';
import { MyIcon } from './src/components/MyIcon';
import Search from './src/screens/Search';
import { store } from './src/redux/store';
import { selectCurrentUser } from './src/redux/auth/auth.selector';
import NewPost from './src/screens/NewPost';
import { checkUserAuth, logoutStart } from './src/redux/auth/auth.actions';
import Dashboard from './src/screens/Dashboard';
import Post from './src/screens/Post';
import { fetchFollowInfoAsync } from './src/redux/follow/follow.actions';
import {
  selectFollowerNum,
  selectFollowingNum,
} from './src/redux/follow/follow.selector';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore:next-line

// if (__DEV__) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   connectToDevTools({
//     host: 'localhost',
//     port: 8097,
//   });
// }

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <App />
      </NativeRouter>
    </Provider>
  );
};

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const currUser = useSelector(selectCurrentUser);
  const followingNum = useSelector(selectFollowingNum);
  const followerNum = useSelector(selectFollowerNum);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
  };

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [currUser, dispatch]);

  useEffect(() => {
    currUser && dispatch(fetchFollowInfoAsync() as any);
  }, [currUser, followerNum, followingNum, dispatch]);

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to='/'>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
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
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
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
        <View style={menuActive ? styles.menu : { display: 'none' }}>
          {currUser ? (
            <View style={styles.infoWrp}>
              <View>
                <Link to='/dashboard'>
                  <Avatar
                    style={styles.avatar}
                    source={{
                      uri: currUser.avatar
                        ? currUser.avatar
                        : 'https://res.cloudinary.com/hapmoniym/image/upload/v1608712074/icons/avatar_w5us1g.png',
                    }}
                  />
                </Link>
                <View style={styles.badge} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.infoText}>{currUser.username}</Text>
                <Text>{}</Text>
                <MaterialCommunityIcons
                  style={{ marginTop: 2 }}
                  name='open-in-new'
                  size={18}
                  color='#fff'
                />
              </View>
              <View style={styles.follow}>
                <Text style={styles.followNum}>{followingNum}</Text>
                <Text style={styles.followLabel}>正在关注 · </Text>
                <Text style={styles.followNum}>{followerNum}</Text>
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
          <Link to='/new-post'>
            <View style={styles.navItem}>
              <Entypo name='new-message' size={18} color='#fff' />
              <Text style={styles.navLink}>新建</Text>
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

        <TouchableWithoutFeedback onPress={() => setMenuActive(false)}>
          <View
            style={{
              width: '100%',
              height: '92%',
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
            }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/search' element={<Search />} />
              <Route path='/blogs/:slug' element={<Post />} />
              <Route
                path='/new-post'
                element={() =>
                  currUser ? <NewPost mode='create' /> : <Login />
                }
              />
              <Route
                path='/dashboard'
                element={() => (currUser ? <Dashboard /> : <Login />)}
              />
            </Routes>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({
      android: Platform.Version <= 20 ? 0 : undefined,
    }),
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  nav: {
    width: '100%',
    height: '8%',
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    height: '92%',
    backgroundColor: '#000000',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    bottom: 0,
  },
  infoWrp: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
  infoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 5,
    marginLeft: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    borderColor: '#57606A',
    borderWidth: 1.5,
    position: 'relative',
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#3BA55D',
    position: 'absolute',
    right: 2,
    top: 36,
  },
  follow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  followLabel: {
    color: '#f7f7f7',
  },
  followNum: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 4,
  },
  navItem: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default AppWrapper;
