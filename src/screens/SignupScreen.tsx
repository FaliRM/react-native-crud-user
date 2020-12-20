import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '_types';
import { signup } from '_services';

type ScreenProps = {
  route: RouteProp<RootStackParamList, 'Signup'>;
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { containerStyle, cardItemStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text>Signup Screen</Text>
      <View style={cardItemStyle}>
        <Text>Username</Text>
        <TextInput
          onChangeText={(username: string) => setUserName(username)}
          value={userName}
          placeholder="Username"
          autoCorrect={false}
        />
      </View>
      <View style={cardItemStyle}>
        <Text>Email</Text>
        <TextInput
          onChangeText={(email: string) => setEmail(email)}
          value={email}
          placeholder="Email"
          autoCorrect={false}
        />
      </View>
      <View style={cardItemStyle}>
        <Text>Password</Text>
        <TextInput
          onChangeText={(password: string) => setPassword(password)}
          value={password}
          placeholder="Password"
          autoCorrect={false}
        />
      </View>
      <Button
        title="Done"
        onPress={() => {
          signup(userName);
          navigation.navigate('Home');
        }}
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
  cardItemStyle: {
    flexDirection: 'row',
  },
});

export default SignupScreen;
