import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VIcon } from '../Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardHistoryStatus({status, date, alertText, styleContainer}){
  return(
    <View style={[styles.rootContainer, 
      status == 1 || status == 2 ? { aspectRatio: 212/77, width: widthPercentage(56.5) } :
      status == 0 ? { aspectRatio: 259/77, width: widthPercentage(69) } : { }, styleContainer ]}>
      <View style={styles.titleWrapper}>
        <VIcon
          type={'MaterialIcons'}
          name={status == 1 ? 'check-circle' : status == 0 ? 'hourglass-full' : 'report-problem'}
          size={Dimens.FONT_SIZE_30}
          color={status == 1 ? Colors.greenAlert : status == 0 ? Colors.yellowPrimary : Colors.redAlert}
        />
        <Text style={[styles.title, 
        status == 1 ? { color: Colors.greenAlert } :
        status == 0 ? { color: Colors.yellowPrimary } :
        { color: Colors.redAlert }]}>{status == 1 ? 'BERHASIL' : status == 0 ? 'SEDANG PROSES' : 'GAGAL'}</Text>
      </View>
      <Text style={styles.subtitle}>{status == 0 ? 'Mohon Tunggu' : status == 2 ? alertText : date}</Text>
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