import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BackBtn from '../components/Auth/BackBtn';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Welcome from '../screens/Auth/Welcome';

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    mode="modal"
    headerMode="float"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerTitleStyle: { color: 'white' } }}
    ></Auth.Screen>
    <Auth.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}></Auth.Screen>
  </Auth.Navigator>
);
