import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

interface FloatingButtonProps {
  handlePress: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ handlePress }) => {
  return (
    <View>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button]}>
          <AntDesign
            style={styles.newPost}
            name='pluscircle'
            size={40}
            color='black'
            onPress={handlePress}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  newPost: {
    color: '#000000',
    position: 'absolute',
    right: 30,
    bottom: 30,
    zIndex: 2,
  },
  button: {},
});
