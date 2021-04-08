import React from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  margin: 80px 0px 10px 0px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText>Search...</FakeText>
          </FakeBar>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: '100%' }}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                isFav={room.is_fav}
                isSuperhost={room.user.superhost}
                photos={room.photos}
                name={room.name}
                price={room.price}
              />
            ))}
            <TouchableOpacity>
              <Text>Load More</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};
