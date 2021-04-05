import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handelSubmit = () => alert(`${username} ${password}`);

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder="First Name"
              autoCapitalize="none"
              stateFn={setFirstName}
            ></Input>
            <Input
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="none"
              stateFn={setLastName}
            ></Input>
            <Input
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              stateFn={setUsername}
            ></Input>
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            ></Input>
          </InputContainer>
          <Btn text={'Sign Up'} accent onPress={handelSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
