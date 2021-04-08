import React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import styled from 'styled-components';
import Btn from '../../../components/Auth/Btn';
import Input from '../../../components/Auth/Input';
import DismissKeyboard from '../../../components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder="First Name"
              autoCapitalize="words"
              stateFn={setFirstName}
            ></Input>
            <Input
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="words"
              stateFn={setLastName}
            ></Input>
            <Input
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              stateFn={setEmail}
              keyboardType="email-address"
            ></Input>
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            ></Input>
          </InputContainer>
          <Btn loading={loading} text={'Sign Up'} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
