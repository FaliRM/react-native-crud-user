import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import { RootStackParamList } from '_types';
import { UNIT, textStyles, viewStyles } from '_styles';

type ScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[title, { marginBottom: 30 * UNIT }]}>Home Screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        buttonStyle={buttonStyle}
      />
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
