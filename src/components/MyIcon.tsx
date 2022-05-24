import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MyIconProps {
  size: number;
  light?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const MyIcon: React.FC<MyIconProps> = ({ size, light = false }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={
            light
              ? require('../../assets/iconWhite.png')
              : require('../../assets/icon.png')
          }
          style={{ width: size, height: size }}
        />
      </View>
    </TouchableOpacity>
  );
};
