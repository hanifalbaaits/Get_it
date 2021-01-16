import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VIcon } from '../Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardHistoryStatus({status, date, alertText, styleContainer}){
  return(
    <View style={[styles.rootContainer, 
      status == 'SUCCESS' || status == 'FAILED' ? { aspectRatio: 212/77, width: widthPercentage(56.5) } :
      status == 'PENDING' ? { aspectRatio: 259/77, width: widthPercentage(69) } : { }, styleContainer ]}>
      <View style={styles.titleWrapper}>
        <VIcon
          type={'MaterialIcons'}
          name={status == 'SUCCESS' ? 'check-circle' : status == 'PENDING' ? 'hourglass-full' : 'report-problem'}
          size={Dimens.FONT_SIZE_30}
          color={status == 'SUCCESS' ? Colors.greenAlert : status == 'PENDING' ? Colors.yellowPrimary : Colors.redAlert}
        />
        <Text style={[styles.title, 
        status == 'SUCCESS' ? { color: Colors.greenAlert } :
        status == 'PENDING' ? { color: Colors.yellowPrimary } :
        { color: Colors.redAlert }]}>{status == 'SUCCESS' ? 'BERHASIL' : status == 'PENDING' ? 'SEDANG PROSES' : 'GAGAL'}</Text>
      </View>
      {
        status !== 'PENDING' &&
        <Text style={styles.subtitle}>{date}</Text>
      }
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