import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BackBtn from '../components/Auth/BackBtn';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

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
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
  </Auth.Navigator>
);
