import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import MapPresenter from './MapPresenter';

const { width } = Dimensions.get('screen');

export default ({ rooms }) => {
  const mapRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: parseFloat(rooms[currentIndex].lat),
          longitude: parseFloat(rooms[currentIndex].lng),
        },
      },
      { duration: 3000 }
    );
  }, [currentIndex]);

  const onScroll = (e) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    const position = Math.abs(Math.round(x / width));
    setCurrentIndex(position);
  };

  return (
    <MapPresenter rooms={rooms} mapRef={mapRef} currentIndex={currentIndex} onScroll={onScroll} />
  );
};
