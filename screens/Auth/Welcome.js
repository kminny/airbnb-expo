import { BlurView } from 'expo-blur';
import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Btn from '../../components/Auth/Btn';

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
  margin-top: 100px;
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View`
  margin-top: 50px;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate('SignUp');
  const goToSignIn = () => navigation.navigate('SignIn');

  return (
    <Container>
      <BlurView
        intensity={40}
        tint="light"
        style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <Logo source={{ uri: LOGO_URL }}></Logo>
        <BtnContainer>
          <Btn onPress={goToSignUp} text={'Sign Up'} accent={true}></Btn>
          <Btn onPress={goToSignIn} text={'Sign In'}></Btn>
        </BtnContainer>
      </BlurView>
      <Image source={require('../../assets/loginBg.jpeg')}></Image>
      <StatusBar barStyle="light-content"></StatusBar>
    </Container>
  );
};
