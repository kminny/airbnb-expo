import React from 'react';
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import colors from '../../colors';

const { width } = Dimensions.get('screen');

const Button = styled.View`
  margin-bottom: 15px;
  border: 1px solid ${(props) => (props.accent ? 'transparent' : colors.black)};
  border-radius: 10px;
  width: ${width / 1.5}px;
  padding: 15px 0px;
  align-items: center;
  background-color: ${(props) => (props.accent ? colors.red : 'transparent')};
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.accent ? 'white' : colors.black)};
`;

const Btn = ({ loading, onPress, text, accent = false }) => (
  <TouchableOpacity onPress={loading ? null : onPress}>
    <Button accent={accent}>
      {loading ? (
        <ActivityIndicator color={accent ? 'white' : 'black'} />
      ) : (
        <Text accent={accent}>{text}</Text>
      )}
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default Btn;
