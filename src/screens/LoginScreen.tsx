import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Button } from 'react-native-elements';

import { RootStackParamList, User } from '_types';
import { readuser } from '_redux/actions';
import { showAlert } from '_utils';
import CardItem from '_components/CardItem';
import { UNIT, textStyles, viewStyles } from '_styles';

interface ScreenProps {
  route: RouteProp<RootStackParamList, 'Login'>;
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const readUser = ({ email, password }: User) =>
    dispatch(readuser({ email, password }));

  const handleLogin = async () => {
    if (!email || !password) {
      showAlert({
        alertTitle: 'Missing Fields',
        alertMessage: 'Please ensure to fulfill all the fields',
      });
    }
    readUser({ email, password });
    navigation.navigate('Home');
  };

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle, cardStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[title, { marginBottom: 30 * UNIT }]}>Login Screen</Text>
      <Card containerStyle={cardStyle}>
        <Card.Title>LOGIN</Card.Title>
        <Card.Divider />
        <CardItem
          label="Email"
          placeholder="user@email.com"
          onChangeText={(email: string) => setEmail(email)}
          value={email}
        />
        <CardItem
          label="Password"
          placeholder="******"
          onChangeText={(password: string) => setPassword(password)}
          value={password}
          secureTextEntry
        />
      </Card>
      <Button
        title="Login"
        onPress={() => handleLogin()}
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
  cardStyle: {
    width: 360 * UNIT,
  },
});

export default LoginScreen;
