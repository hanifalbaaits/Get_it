import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VIcon } from '../Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardHistoryStatus({type, date, alertText, styleContainer}){
  return(
    <View style={[styles.rootContainer, 
      type == 'success' || type == 'error' ? { aspectRatio: 212/77, width: widthPercentage(56.5) } :
      type == 'pending' ? { aspectRatio: 259/77, width: widthPercentage(69) } : { }, styleContainer ]}>
      <View style={styles.titleWrapper}>
        <VIcon
          type={'MaterialIcons'}
          name={type == 'success' ? 'check-circle' : type == 'pending' ? 'hourglass-full' : 'report-problem'}
          size={Dimens.FONT_SIZE_30}
          color={type == 'success' ? Colors.greenAlert : type == 'pending' ? Colors.yellowPrimary : Colors.redAlert}
        />
        <Text style={[styles.title, 
        type == 'success' ? { color: Colors.greenAlert } :
        type == 'pending' ? { color: Colors.yellowPrimary } :
        { color: Colors.redAlert }]}>{type == 'success' ? 'BERHASIL' : type == 'pending' ? 'SEDANG PROSES' : 'GAGAL'}</Text>
      </View>
      <Text style={styles.subtitle}>{type == 'pending' ? 'Mohon Tunggu' : type == 'error' ? alertText : date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(56.5),
    height: undefined,
    aspectRatio: 212/77,
    borderRadius: 23,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 5
  },
  title: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_20,
    marginLeft: 5
  },
  subtitle: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_15,
    color: Colors.blackTextPackage,
    marginTop: '1%'
  }
})