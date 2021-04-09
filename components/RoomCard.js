import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { toggleFavs } from '../redux/usersSlice';
import colors from '../colors';
import utils from '../utils';
import { useNavigation } from '@react-navigation/core';
import RoomPhotos from './RoomPhotos';

const Container = styled.View`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const FavButton = styled.View`
  background-color: white;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const TouchableOpacityContainer = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;

function getIconName(isFav) {
  const isAndroid = utils.isAndroid();
  if (isAndroid) {
    if (isFav) {
      return 'md-heart';
    }
    return 'md-heart-outline';
  } else {
    if (isFav) {
      return 'ios-heart';
    }
    return 'ios-heart-outline';
  }
}

const RoomCard = ({ id, isFav, isSuperhost, photos, name, price, roomObj }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacityContainer onPress={() => dispatch(toggleFavs(id))}>
        <FavButton>
          <Ionicons size={28} color={isFav ? colors.red : 'black'} name={getIconName(isFav)} />
        </FavButton>
      </TouchableOpacityContainer>
      <RoomPhotos photos={photos} />
      <TouchableOpacity
        style={{ width: '100%', alignItems: 'flex-start' }}
        onPress={() => navigation.navigate('RoomDetail', { roomObj })}
      >
        {isSuperhost ? (
          <Superhost>
            <SuperhostText>Superhost</SuperhostText>
          </Superhost>
        ) : null}
        <Name>{name}</Name>
        <PriceContainer>
          <PriceNumber>{price}</PriceNumber>
          <PriceText> / night</PriceText>
        </PriceContainer>
      </TouchableOpacity>
    </Container>
  );
};

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperhost: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roomObj: PropTypes.object.isRequired,
};

export default RoomCard;
