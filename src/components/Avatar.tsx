import React from 'react';
import type { ImageSourcePropType, StyleProp, ImageStyle } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';

interface AvatarProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({ source, style }) => {
  return (
    <View style={styles.avatar}>
      <Image source={source} style={style} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
