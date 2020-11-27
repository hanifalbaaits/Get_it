import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function HeaderImageLogoBG(){
  return(
    <Image 
      source={require('../../assets/images/logo-white.png')}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: widthPercentage(40),
    height: undefined,
    aspectRatio: 56/54,
    top: -heightPercentage(6),
    right: -widthPercentage(10),
    opacity: 0.15,
  }
})