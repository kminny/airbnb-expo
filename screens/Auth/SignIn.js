import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handelSubmit = () => alert(`${username} ${password}`);
  return (
    <Container>
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
      <Btn text={'Sign In'} accent onPress={handelSubmit}></Btn>
    </Container>
  );
};
