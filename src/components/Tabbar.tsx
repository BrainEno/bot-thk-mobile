import React from 'react';
import { View, Text } from 'react-native';
import { Svg, LinearGradient } from 'react-native-svg';

const WIDTH = 200;
const HEIGHT = 50;

export const Tabbar = () => {
  return (
    <View>
      <Svg width={WIDTH} height={HEIGHT}>
        <LinearGradient id='gradient' x1={WIDTH / 2} y1={0} />
      </Svg>
    </View>
  );
};

export default Tabbar;
