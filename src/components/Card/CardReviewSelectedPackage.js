import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function CardReviewSelectedPackage({styleContainer, price, notes, phoneNumber}){
  return(
    <View style={[styles.rootContainer, styleContainer]}>
      <View style={styles.contentContainer}>
        <Text style={styles.textPrice}>{`Rp. ${currencyFormat(price)}`}</Text>
        <Text style={styles.textNotes}>{notes}</Text>
        <Text style={styles.textPhoneNumber}>{phoneNumber}</Text>
      </View>
      <View style={styles.imageCircleContainer}>
        <Image 
          source={require('../../assets/images/logo-xl.png')}
          style={styles.imageLogoXLCircle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(85),
    height: undefined,
    aspectRatio: 329/88,
    backgroundColor: Colors.blueHeaderCardPackageContent,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: '7%'
  },
  contentContainer: {

  },
  textPrice: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.white,
    marginBottom: '8%'
  },
  textNotes: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_9,
    color: Colors.white
  },
  textPhoneNumber: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_10,
    color: Colors.white
  },
  imageCircleContainer: {
    width: '15%',
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(20),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogoXLCircle: {
    width: '60%',
    height: undefined,
    aspectRatio: 34/27
  },
})