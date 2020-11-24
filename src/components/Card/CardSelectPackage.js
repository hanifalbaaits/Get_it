import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardSelectPackage(props){
  return(
    <View style={styles.rootContainer}>
      <View style={styles.leftContent}>
        <Text style={styles.textPackageName}>{props.packageName}</Text>
        <Text style={styles.textPackageDuration}>{props.packageDuration}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.textPackagePrice}>{props.packagePrice}</Text>
        <TouchableOpacity style={[styles.wrapperButton, props.styleButton]} onPress={props.onPress}>
          <Text style={styles.textSelect}>Pilih</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(80),
    height: undefined,
    aspectRatio: 300/50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContent: {
    width: '65%',
    height: '100%',
    justifyContent: 'space-between'
  },
  rightContent: {
    width: '35%',
    height: '100%',
    justifyContent: 'space-between'
  },
  textPackageName: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  textPackageDuration: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_10,
    color: Colors.blackTextPackage
  },
  textPackagePrice: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  wrapperButton: {
    width: '90%',
    height: undefined,
    aspectRatio: 75/19,
    borderRadius: widthPercentage(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellowPrimary
  },
  textSelect: {
    fontFamily: Fonts.poppinsRegular,
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_10
  }
})