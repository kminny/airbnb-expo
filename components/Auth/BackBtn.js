import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import utils from '../../utils';

const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons
      name={utils.isAndroid() ? 'md-arrow-down' : 'ios-arrow-down'}
      size={28}
      color="#4689fb"
    ></Ionicons>
  </Container>
);
