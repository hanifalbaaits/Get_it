import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function HeaderImageLogoBG({themes}){
  return(
    <Image 
      source={themes == 'dark' ? require('../../assets/images/logo-grey.png') : require('../../assets/images/logo-white.png')}
      style={[styles.image, themes == 'dark' && { opacity: 1 }]}
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