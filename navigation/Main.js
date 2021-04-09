import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../colors';
import BackBtn from '../components/Auth/BackBtn';
import Explore from '../screens/Main/Explore';
import MapScreen from '../screens/Main/Map';
import Profile from '../screens/Main/Profile';
import Room from '../screens/Main/Room';
import Saved from '../screens/Main/Saved';
import Search from '../screens/Main/Search';
import utils from '../utils';

const TabsNavigator = createBottomTabNavigator();
const MainNavigator = createStackNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 5,
      },
      labelStyle: {
        textTransform: 'uppercase',
        fontWeight: '600',
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? 'md-' : 'ios-'}`;
        if (route.name === 'Explore') {
          iconName += 'search';
        } else if (route.name === 'Map') {
          iconName += 'map';
        } else if (route.name === 'Profile') {
          iconName += 'person';
        } else if (route.name === 'Saved') {
          iconName += 'heart';
        }
        return <Ionicons name={iconName} size={22} color={focused ? colors.red : 'grey'} />;
      },
    })}
  >
    <TabsNavigator.Screen name="Explore" component={Explore} />
    <TabsNavigator.Screen name="Map" component={MapScreen} />
    <TabsNavigator.Screen name="Profile" component={Profile} />
    <TabsNavigator.Screen name="Saved" component={Saved} />
  </TabsNavigator.Navigator>
);

export default () => (
  <MainNavigator.Navigator
    mode="modal"
    screenOptions={{
      headerTintColor: 'rgb(50, 50, 50)',
      headerBackTitleVisible: false,
      headerBackImage: () => <BackBtn />,
    }}
  >
    <MainNavigator.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
    <MainNavigator.Screen
      name="RoomDetail"
      component={Room}
      options={{
        headerTransparent: true,
        headerBackground: () => (
          <BlurView intensity={50} tint="light" style={StyleSheet.absoluteFill} />
        ),
      }}
    />
    <MainNavigator.Screen name="Search" component={Search} options={{ headerShown: false }} />
  </MainNavigator.Navigator>
);
