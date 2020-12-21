import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';

import { RootStackParamList, User } from '_types';
import { removestateuser } from '_redux/actions';
import { UNIT, textStyles, viewStyles } from '_styles';

type ScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen = (props: ScreenProps) => {
  const { navigation } = { ...props };

  const user = useSelector((state: { user: User }) => state.user);

  const dispatch = useDispatch();
  const removeStateUser = () => dispatch(removestateuser());

  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.id) {
      setIsLoading(false);
    } else {
      if (user.error) {
        removeStateUser();
        navigation.navigate('Signup');
        setIsLoading(false);
      }
    }
  }, [user]);

  const { title } = textStyles;
  const { buttonStyle } = viewStyles;
  const { containerStyle } = styles;

  return (
    <SafeAreaView style={containerStyle}>
      {isLodaing ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={[title, { marginBottom: 30 * UNIT }]}>Home Screen</Text>
          <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
            buttonStyle={buttonStyle}
          />
        </>
      )}
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
