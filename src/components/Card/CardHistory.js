import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Fonts, Dimens } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardHistory({date, status, price, packageName, onPress, isNotif}){
  // status 0 pending - 1 success - 2 failed
  return(
    <View style={styles.rootContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.textDate}>{date}</Text>
        <Text style={styles.textPackageName}>{packageName}</Text>
        <Text style={styles.textPay}>Pembayaran</Text>
      </View>
      <View style={styles.rightContainer}>
        {
          status == 0 ?
          <Text style={styles.textStatusPending}>Sedang Proses</Text> :
          status == 1 ?
          <Text style={styles.textStatusSuccess}>Transaksi Berhasil</Text> :
          status == 2 ? 
          <Text style={styles.textStatusFailed}>Transaksi Gagal</Text> :
          null
        }
        {
          !isNotif &&
          <Text style={styles.textPrice}>Rp. {price}</Text>
        }
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textDetail}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(85),
    height: undefined,
    aspectRatio: 30/6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftContainer: {
    height: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'space-between'
  },
  rightContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textDate: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextPackage
  },
  textPackageName: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  textPay: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blackTextPackage
  },
  textStatusPending: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.yellowPrimary
  },
  textStatusSuccess: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.greenStatusHistory
  },
  textStatusFailed: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.redAlert
  },
  textPrice: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.greenStatusHistory
  },
  textDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blueTextDetail
  }
})