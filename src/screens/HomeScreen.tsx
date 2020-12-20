import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '_types';

type ScreenProps = {
  route: RouteProp<RootStackParamList, 'Signup'>;
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
};

const HomeScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };
  const { containerStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
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

export default HomeScreen;
