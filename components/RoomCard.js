import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { toggleFavs } from '../redux/usersSlice';
import colors from '../colors';
import utils from '../utils';

const { width, height } = Dimensions.get('screen');

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

const PhotosContainer = styled.View`
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
  height: ${height / 4}px;
`;

const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
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

const RoomCard = ({ id, isFav, isSuperhost, photos, name, price }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TouchableOpacityContainer onPress={() => dispatch(toggleFavs(id))}>
        <FavButton>
          <Ionicons
            size={28}
            color={isFav ? colors.red : 'black'}
            name={utils.isAndroid() ? 'md-heart-outline' : 'ios-heart-outline'}
          />
        </FavButton>
      </TouchableOpacityContainer>
      <PhotosContainer>
        {photos?.length === 0 ? (
          <SlideImage resizeMode="cover" source={require('../assets/roomDefault.jpeg')} />
        ) : (
          <Swiper
            controlsProps={{
              PrevComponent: () => null,
              NextComponent: () => null,
              dotActiveStyle: {
                backgroundColor: 'white',
              },
            }}
          >
            {photos?.map((photo) => (
              <View key={photo.id}>
                <SlideImage source={{ uri: photo.file }} />
              </View>
            ))}
          </Swiper>
        )}
      </PhotosContainer>
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
};

export default RoomCard;
