import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { Image, Text } from 'react-native';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady((isReady) => !isReady);
  const loadAssets = async () => {
    const images = [
      require('./assets/loginBg.jpeg'),
      'https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png',
    ];
    console.log(cacheImages(images));
  };

  return isReady ? (
    <Text>I'm Ready</Text>
  ) : (
    <AppLoading onError={console.error} onFinish={handleFinish} startAsync={loadAssets} />
  );
}
