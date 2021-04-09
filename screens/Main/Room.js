import React, { useEffect } from 'react';
import styled from 'styled-components';
import RoomPhotos from '../../components/RoomPhotos';

const Container = styled.ScrollView``;

const Text = styled.Text``;

export default ({
  route: {
    params: { roomObj },
  },
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({ title: roomObj.name });
  }, []);
  return (
    <Container>
      <RoomPhotos photos={roomObj.photos} />
    </Container>
  );
};
