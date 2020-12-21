import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Button } from 'react-native-elements';

import { RootStackParamList } from '_types';
import { createuser } from '_context/actions';
import { showAlert } from '_utils';
import CardItem from '_components/CardItem';
import { UNIT, textStyles, viewStyles } from '_styles';

interface ScreenProps {
  route: RouteProp<RootStackParamList, 'Signup'>;
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
}

const SignupScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const createUser = ({ email, password }) =>
    dispatch(createuser({ email, password }));

  const handleSignup = async () => {
    if (!email || !password) {
      showAlert({
        alertTitle: 'Missing Fields',
        alertMessage: 'Please ensure to fulfill all the fields',
      });
    }

    createUser({ email, password });

    navigation.navigate('Home');
  };

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle, cardStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[title, { marginBottom: 30 * UNIT }]}>Signup Screen</Text>
      <Card containerStyle={cardStyle}>
        <Card.Title>SIGNUP SCREEN</Card.Title>
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
        title="Signup"
        onPress={() => handleSignup()}
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

export default SignupScreen;
