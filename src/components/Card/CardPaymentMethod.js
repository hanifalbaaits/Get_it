import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { VIcon } from '../Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function CardPaymentMethod({logoPayment, title, balance, onPress, styleContainer}){
  return(
    <TouchableOpacity style={[styles.rootContainer, styleContainer]} onPress={onPress} disabled={onPress ? false : true}>
      <View style={styles.leftComponent}>
        <Image 
          source={logoPayment}
          style={styles.imageLogo}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textBalance}>{`Rp. ${currencyFormat(balance)}`}</Text>
        </View>
      </View>
      {
        onPress ?
        <VIcon
          type={'MaterialIcons'}
          name={'chevron-right'}
          size={Dimens.FONT_SIZE_32}
          color={Colors.blackTextPackage}
        /> :
        <View style={styles.dotGreent}>
          <View style={styles.dotWhite}/>
        </View>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(85),
    height: undefined,
    aspectRatio: 329/82,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: '6%',
    paddingRight: '5%'
  },
  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageLogo: {
    width: widthPercentage(10.6),
    height: undefined,
    aspectRatio: 1/1
  },
  contentWrapper: {
    marginLeft: '10%'
  },
  textTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  textBalance: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextPackage
  },
  dotGreent: {
    width: widthPercentage(5),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(5),
    backgroundColor: Colors.greenAlert,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotWhite: {
    width: widthPercentage(2.2),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(2.5),
    backgroundColor: Colors.white
  }
})