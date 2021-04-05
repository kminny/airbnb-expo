import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/usersSlice';
import Auth from '../navigation/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <Auth></Auth>
      )}
    </NavigationContainer>
  );
};
