import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components';
import colors from '../../colors';
import RoomPhotos from '../../components/RoomPhotos';
import utils from '../../utils';

const Container = styled.ScrollView``;

const DataContainer = styled.View`
  padding: 0px 20px;
`;

const Address = styled.Text`
  margin-top: 10px;
  font-size: 24px;
`;

const PropertyInfoContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const PropertyInfoData = styled.View`
  background-color: ${colors.green};
  margin-right: 10px;
  border-radius: 5px;
`;

const PropertyInfoText = styled.Text`
  color: white;
  font-weight: 500;
  padding: 5px 10px;
`;

const CheckContainer = styled.View`
  margin-top: 40px;
`;

const CheckTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  font-size: 18px;
  margin-left: 15px;
`;

const CheckTime = styled.Text`
  margin-top: 10px;
`;

const MapContainer = styled.View`
  width: 100%;
  height: 200px;
  margin-top: 30px;
`;

function formatQtt(number, name) {
  if (number === 1) {
    return `${number} ${name}`;
  } else {
    return `${number} ${name}s`;
  }
}

function formatTime(time) {
  const [hours, min, sec] = time.split(':');
  return `${hours} o'clock`;
}

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
      <RoomPhotos photos={roomObj.photos} factor={2} />
      <DataContainer>
        <Address>
          {roomObj.address} / ${roomObj.price}
        </Address>
        <PropertyInfoContainer>
          <PropertyInfoData>
            <PropertyInfoText>{formatQtt(roomObj.beds, 'bed')}</PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>{formatQtt(roomObj.bedrooms, 'bedroom')} </PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>{formatQtt(roomObj.bathrooms, 'bathroom')}</PropertyInfoText>
          </PropertyInfoData>
        </PropertyInfoContainer>
        <CheckContainer>
          <CheckTitleContainer>
            <Ionicons
              name={utils.isAndroid() ? 'md-timer-outline' : 'ios-timer-outline'}
              size={24}
            />
            <CheckTitle>Check-in / Check-out</CheckTitle>
          </CheckTitleContainer>
          <CheckTime>
            {formatTime(roomObj.check_in)} / {formatTime(roomObj.check_out)}
          </CheckTime>
        </CheckContainer>
        <MapContainer>
          <MapView
            camera={{
              center: {
                latitude: parseFloat(roomObj.lat),
                longitude: parseFloat(roomObj.lng),
              },
              altitude: 10 * 200,
              //   pitch: 20,
              heading: 0,
              zoom: 10,
            }}
            style={{ height: '100%', width: '100%' }}
            zoomEnabled={false}
            scrollEnabled={false}
          >
            <Marker
              coordinate={{ latitude: parseFloat(roomObj.lat), longitude: parseFloat(roomObj.lng) }}
            />
          </MapView>
        </MapContainer>
      </DataContainer>
    </Container>
  );
};
