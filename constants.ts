import { Dimensions, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight=Dimensions.get('window').height;