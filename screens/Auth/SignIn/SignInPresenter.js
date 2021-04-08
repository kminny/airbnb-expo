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

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAvoidingView>
          <InputContainer>
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
          <Btn text={'Sign In'} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
