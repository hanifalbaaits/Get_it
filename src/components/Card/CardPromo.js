import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { Fonts, Colors, Dimens } from '../../base';

export default function CardPromo({title, image, onPress}){

  const ImagePromo = () => {
    return(
      <Image 
        source={{ uri: image }}
        style={styles.image}
        resizeMode={'cover'}
      />
    )
  }

  if(title){
    return(
      <View style={[styles.rootContainer, { aspectRatio: 329/130, marginTop: 0, marginBottom: 0}]}>
        <View style={styles.headerWrapper}>
          <Text style={styles.textTitle}>{title}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.textDetail}>Lihat Selengkapnya</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: '90%'}}>
          <ImagePromo />
        </View>
      </View>
    )
  } else {
    return(
      <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
        <ImagePromo />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(1),
    marginBottom: heightPercentage(1)
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  textTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextPackage
  },
  textDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_9,
    color: Colors.bluePrimary
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 329/100
  }
})