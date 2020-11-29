import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardTopup({name, nominal, selectedNominal, onPress, styleContainer}){
  return(
    <TouchableOpacity style={[styles.rootContainer, nominal === selectedNominal && { backgroundColor: Colors.greenAlert }, styleContainer]} onPress={onPress}>
      <Text style={[styles.textName, nominal === selectedNominal && { color: Colors.white }]}>{`Rp${name}`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(21.3),
    height: undefined,
    aspectRatio: 1/1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rootContainer2: {
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/76,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  textName: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextTopup
  }
})