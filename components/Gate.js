import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/usersSlice';
import Auth from '../navigation/Auth';
import Main from '../navigation/Main';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return <NavigationContainer>{isLoggedIn ? <Main></Main> : <Auth></Auth>}</NavigationContainer>;
};
