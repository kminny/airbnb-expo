import { BlurView } from 'expo-blur';
import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const LOGO_URL = 'https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <BlurView
        intensity={40}
        tint="light"
        style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <Logo source={{ uri: LOGO_URL }}></Logo>
      </BlurView>

      <Image source={require('../assets/loginBg.jpeg')}></Image>
      <StatusBar barStyle="light-content"></StatusBar>
    </Container>
  );
};
