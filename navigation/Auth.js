import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator>
    <Auth.Screen name="Welcome" component={Welcome}></Auth.Screen>
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
  </Auth.Navigator>
);
