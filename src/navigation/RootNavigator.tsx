import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '_types';
import EntryScreen from '_screens/EntryScreen';
import HomeScreen from '_screens/HomeScreen';
import SingupScreen from '_screens/SignupScreen';
import LoginScreen from '_screens/LoginScreen';
import ProfileScreen from '_screens/ProfileScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Entry" mode="card">
    <Stack.Screen name="Entry" component={EntryScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Signup" component={SingupScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
