import { Dimensions, StyleSheet } from 'react-native';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const UNIT = windowWidth / 414;

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 40 * UNIT,
  },
});

export const viewStyles = StyleSheet.create({
  buttonStyle: {
    width: 150 * UNIT,
    height: 50 * UNIT,
    marginTop: 20 * UNIT,
  },
});
