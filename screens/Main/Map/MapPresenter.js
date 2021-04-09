import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import colors from '../../../colors';

const { width } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ScrollView = styled.ScrollView`
  position: absolute;
  bottom: 50px;
`;

const RoomContainer = styled.View`
  background-color: transparent;
  width: ${width};
  align-items: center;
`;

const RoomCard = styled.View`
  background-color: white;
  width: ${width - 50};
  height: 120px;
  border-radius: 10px;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
`;

const RoomPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 20px;
`;

const Column = styled.View`
  width: 70%;
`;

const RoomName = styled.Text`
  font-size: 18px;
`;

const RoomPrice = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const MarkerWrapper = styled.View`
  align-items: center;
`;

const MarkerContainer = styled.View`
  background-color: ${(props) => (props.selected ? colors.red : colors.green)};
  padding: 10px;
  border-radius: 10px;
  position: relative;
`;

const MarkerText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const MarkerTriangle = styled.View`
  border: 10px solid transparent;
  width: 10px;
  border-top-color: ${(props) => (props.selected ? colors.red : colors.green)};
`;

const RoomMarker = ({ price, selected }) => (
  <MarkerWrapper>
    <MarkerContainer selected={selected}>
      <MarkerText>${price}</MarkerText>
    </MarkerContainer>
    <MarkerTriangle selected={selected}></MarkerTriangle>
  </MarkerWrapper>
);

export default ({ rooms, mapRef, currentIndex, onScroll, onRegionChangeComplete }) => (
  <Container>
    <MapView
      ref={mapRef}
      onRegionChangeComplete={onRegionChangeComplete}
      style={StyleSheet.absoluteFill}
      camera={{
        center: {
          latitude: parseFloat(rooms[0].lat),
          longitude: parseFloat(rooms[0].lng),
        },
        altitude: 3000,
        pitch: 0,
        heading: 0,
        zoom: 10,
      }}
    >
      {rooms?.map((room, index) => (
        <Marker
          key={room.id}
          coordinate={{
            latitude: parseFloat(room.lat),
            longitude: parseFloat(room.lng),
          }}
        >
          <RoomMarker price={room.price} selected={index === currentIndex}></RoomMarker>
        </Marker>
      ))}
    </MapView>
    <ScrollView
      scrollEventThrottle={50}
      onScroll={onScroll}
      showsHorizontalScrollIndicator={false}
      horizontal
      pagingEnabled
    >
      {rooms?.map((room) => (
        <RoomContainer key={room.id}>
          <RoomCard>
            <RoomPhoto
              source={
                room.photos[0]?.file
                  ? { uri: room.photos[0]?.file }
                  : require('../../../assets/roomDefault.jpeg')
              }
            />
            <Column>
              <RoomName>{room.name}</RoomName>
              <RoomPrice>${room.price}</RoomPrice>
            </Column>
          </RoomCard>
        </RoomContainer>
      ))}
    </ScrollView>
  </Container>
);
