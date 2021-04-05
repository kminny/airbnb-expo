import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, View } from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';

const Auth = createStackNavigator();

const isAndroid = Platform.OS === 'android';

export default () => (
  <Auth.Navigator
    mode="modal"
    headerMode="float"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerBackImage: () => (
        <View style={{ paddingLeft: 20 }}>
          <Ionicons
            name={isAndroid ? 'md-arrow-down' : 'ios-arrow-down'}
            size={28}
            color="#4689fb"
          ></Ionicons>
        </View>
      ),
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome}></Auth.Screen>
    <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
    <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
  </Auth.Navigator>
);
