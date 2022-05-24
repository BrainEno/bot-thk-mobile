import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useNavigate } from 'react-router-native';

import { selectCurrentUser } from '../redux/auth/auth.selector';
import { Alert, AlertType } from '../components/Alert';
import { CatList } from '../components/CatList';

const Home = () => {
  const currUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <View style={styles.home}>
      <CatList />
      <View style={styles.msgWrp}>
        {currUser ? null : (
          <Alert message='登录账号后可发布文章' type={AlertType.INFO} />
        )}
      </View>
      {currUser ? (
        <AntDesign
          style={styles.newPost}
          name='pluscircle'
          size={40}
          color='black'
          onPress={() => {
            navigate('/new-post');
          }}
        />
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 28,
    width: '100%',
    height: '100%',
    zIndex: 2,
    position: 'relative',
  },
  msgWrp: {
    position: 'absolute',
    top: '40%',
    left: '30%',
    zIndex: 10,
  },
  newPost: {
    color: '#000000',
    position: 'absolute',
    right: 30,
    bottom: 30,
    zIndex: 2,
  },
});
