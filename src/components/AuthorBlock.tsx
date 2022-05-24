import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../redux/auth/auth.selector';
// import { selectFollowerIds } from '../redux/follow/follow.selector';

import { NormalButton } from './NormalButton';
import { Avatar } from './Avatar';

interface AuthorBlockProps {
  authorName: string;
  authorAvatar?: string;
}

const AuthorBlock: React.FC<AuthorBlockProps> = ({
  authorName,
  authorAvatar,
}) => {
  const currUser = useSelector(selectCurrentUser);
  // const followingId = useSelector(selectFollowerIds);

  const handleFollow = () => {};

  return (
    <View style={styles.author}>
      <View>
        <Text style={styles.nameText}>发布者</Text>
        <View style={styles.avatarCon}>
          {authorAvatar ? (
            <Avatar
              source={{
                uri: authorAvatar,
              }}
            />
          ) : (
            <View style={styles.avatarWrp}>
              <Text style={styles.avatarText}>
                {authorName.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}
          <Text style={styles.nameText}>{authorName}</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        {currUser && currUser?.username !== authorName ? (
          <NormalButton onPress={() => {}}>
            <Text style={styles.btnText} onPress={handleFollow}>
              关注
            </Text>
          </NormalButton>
        ) : null}
      </View>
    </View>
  );
};

export default AuthorBlock;

const styles = StyleSheet.create({
  author: {
    flexDirection: 'row',
    backgroundColor: '#eef0f4',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
  },
  nameText: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '700',
  },
  avatarCon: {
    flexDirection: 'row',
    marginTop: 15,
  },
  avatarWrp: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#81ecec',
    marginRight: 20,
  },
  avatarText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: '800',
    color: '#fff',
  },
});
