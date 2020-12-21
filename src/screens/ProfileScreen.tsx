import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import { RootStackParamList } from '_types';
import { deleteuser } from '_context/actions';
import { UNIT, textStyles, viewStyles } from '_styles';

type ScreenProps = {
  route: RouteProp<RootStackParamList, 'Profile'>;
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };

  const dispatch = useDispatch();
  const deleteUser = () => dispatch(deleteuser());

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[title, { marginBottom: 30 * UNIT }]}>Profile Screen</Text>
      <Button
        title="Update"
        onPress={() => navigation.navigate('Signup')}
        buttonStyle={buttonStyle}
      />
      <Button
        title="Remove"
        onPress={() => deleteUser()}
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

export default ProfileScreen;
