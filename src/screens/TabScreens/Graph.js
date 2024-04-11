import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { width } from '../../utils/dimensions';


const Graph = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ImageBackground source={require('../../assets/graph.jpg')} style={{width: '100%', height: '100%'}}>
    <Entypo name="chevron-small-left" size={width * 0.1} color="black" style={{ position: 'absolute', top: 10, left: 10 }} onPress={() => navigation.goBack()} />

    </ImageBackground>
</View>
  )
}

export default Graph

const styles = StyleSheet.create({})