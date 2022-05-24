/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Share, Alert, Dimensions } from 'react-native';
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

export const PostBtnGroup = () => {
  const [show, setShow] = useState(false);
  const offset = useSharedValue(0);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: '复制文章链接',
        message: '复制链接分享给朋友',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType);
        } else {
          Alert.alert('分享成功');
        }
      } else if (result.action === Share.dismissedAction) {
        Alert.alert('分享已取消');
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: offset.value * 255 }],
    };
  });

  const showMore = () => {
    setShow(!show);
  };

  return (
    <View style={styles.btnContainer}>
      <View style={styles.btnWrp}>
        <MaterialCommunityIcons
          name='thumbs-up-down'
          size={24}
          color='#474747'
        />
        <Text style={[styles.count]}>1</Text>
      </View>
      <View style={styles.btnWrp}>
        <Feather name='star' size={22} color='#474747' />
        <Text style={styles.count}>1</Text>
      </View>
      <View style={styles.btnWrp}>
        <FontAwesome5 name='comment' size={20} color='#474747' />
        <Text style={styles.count}>3</Text>
      </View>
      <Feather name='share-2' size={21} color='#474747' onPress={onShare} />
      <Feather
        name='more-vertical'
        size={22}
        color='#474747'
        onPress={showMore}
      />
      {show ? <Animated.View style={[styles.more, animatedStyles]} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    paddingVertical: 10,
    shadowOffset: { width: 0, height: -2 },
    shadowColor: '#292d32',
    shadowOpacity: 0.8,
    shadowRadius: 7,
  },
  count: {
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 5,
  },
  btnWrp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  more: {
    backgroundColor: 'gray',
    width: WIDTH / 5,
    height: 50,
  },
});
