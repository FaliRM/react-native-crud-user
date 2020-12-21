import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Button } from 'react-native-elements';

import { RootStackParamList, UserRaw, User } from '_types';
import { createuser, updateuser } from '_context/actions';
import { showAlert } from '_utils';
import CardItem from '_components/CardItem';
import { UNIT, textStyles, viewStyles } from '_styles';

interface ScreenProps {
  route: RouteProp<RootStackParamList, 'Signup'>;
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>;
}

const SignupScreen = (props: ScreenProps) => {
  const { navigation, route } = { ...props };
  const isUpdating = route.params?.isUpdating ?? false;

  const user = useSelector((state: { user: User }) => state.user);

  useEffect(() => {
    if (user.id) {
      setId(user.id);
    }
  }, [user]);

  const dispatch = useDispatch();
  const createUser = ({ email, password }: UserRaw) =>
    dispatch(createuser({ email, password }));
  const updateUser = ({ email, password, id }: User) =>
    dispatch(updateuser({ email, password, id }));

  const [id, setId] = useState<null | number>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleWrite = async () => {
    if (!email || !password || (isUpdating && !id)) {
      showAlert({
        alertTitle: 'Missing Fields',
        alertMessage: 'Please ensure to fulfill all the fields',
      });
      return;
    }

    if (isUpdating && id) {
      updateUser({ email, password, id });
    } else {
      createUser({ email, password });
    }
    navigation.navigate('Home');
  };

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle, cardStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[title, { marginBottom: 30 * UNIT }]}>Signup Screen</Text>
      <Card containerStyle={cardStyle}>
        <Card.Title>{isUpdating ? 'UPDATING' : 'SIGNING UP'}</Card.Title>
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
        title={isUpdating ? 'Update' : 'Signup'}
        onPress={() => handleWrite()}
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
