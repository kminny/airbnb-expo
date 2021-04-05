import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome!!</Text>
      <Button onPress={() => navigation.navigate('SignUp')} title="Sign Up"></Button>
      <Button onPress={() => navigation.navigate('SignIn')} title="Sign In"></Button>
    </View>
  );
};
