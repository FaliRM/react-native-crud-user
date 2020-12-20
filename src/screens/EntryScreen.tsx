import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '_types';

type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Entry'>;
  route: RouteProp<RootStackParamList, 'Entry'>;
};

const EntryScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };
  const { containerStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text>Entry Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EntryScreen;
