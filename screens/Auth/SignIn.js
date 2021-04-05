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

export default ({ route: { params } }) => {
  const [username, setUsername] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const handelSubmit = () => alert(`${username} ${password}`);

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAvoidingView>
          <InputContainer>
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
          <Btn text={'Sign In'} accent onPress={handelSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
