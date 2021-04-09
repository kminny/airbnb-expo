import React from 'react';
import styled from 'styled-components';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 30px;
`;

const ScrollViewContainer = styled.ScrollView``;

const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 10px;
`;

const NoFavsText = styled.Text``;

export default ({ rooms }) => (
  <Container>
    <Title>Favourites ({rooms.length})</Title>
    <ScrollViewContainer
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {rooms.length !== 0 ? (
        rooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            isFav={room.is_fav}
            isSuperhost={room.user.superhost}
            photos={room.photos}
            name={room.name}
            price={room.price}
            roomObj={room}
          />
        ))
      ) : (
        <NoFavsText>You don't have favs.</NoFavsText>
      )}
    </ScrollViewContainer>
  </Container>
);
