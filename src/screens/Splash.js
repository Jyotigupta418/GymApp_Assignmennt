import React, { useState, useEffect } from 'react';
import { Animated, View, Image, Text, ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Routes } from '../navigation/Routes';

const Splash = ({ navigation }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(Routes.TAB);
    }, 3000);
  }, []);

  return (
    <Animated.View style={{ flex: 1, opacity }}>
      <Image
        source={require('../assets/splash_background.jpg')}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        blurRadius={2}
      />
      <Animated.View style={{ flex: 1, opacity, alignItems: 'center' }}>
        <FontAwesome5 name="dumbbell" size={100} color="lightgreen" style={{  marginTop: 100 }} />
        <Text style={{ fontSize: 30, color: 'orange', margin: 20 }}>My Fitness App</Text>
        <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center' }}>

        {isLoading && <ActivityIndicator size="large" color="white" />}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default Splash;

