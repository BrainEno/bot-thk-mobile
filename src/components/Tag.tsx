import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TagProps {
  tagText: string;
  width?: string | number;
  height?: string | number;
}

export const Tag: React.FC<TagProps> = ({ tagText, width, height }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.tagWrp, { width, height }]}>
      <Text>{tagText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagWrp: {
    backgroundColor: '#e6e6e6',
    color: '#5e5e5e',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 8,
  },
});
