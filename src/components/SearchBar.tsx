import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'react-router-native';
import { TextInput } from 'react-native-gesture-handler';

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.SearchBar}>
      <TextInput style={styles.Input} placeholder='搜索...' />
      <Link to='/'>
        <Ionicons name='ios-close' size={24} color='black' />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    backgroundColor: '#eaeaee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    position: 'absolute',
    top: 25,
  },
  Input: {
    width: 280,
    backgroundColor: '#eaeaee',
    padding: 8,
    color: '#000',
    letterSpacing: 0.5,
  },
});
