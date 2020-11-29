import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG } from '../../components/Header';
import { VIcon } from '../../components/Icon';
import { CardHistoryStatus } from '../../components/Card';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function HistoryDetailScreen(props){
  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <VIcon
            type={'MaterialIcons'}
            name={'arrow-back'}
            size={Dimens.FONT_SIZE_24}
            color={Colors.grayNavigationArrow}
          />
        </TouchableOpacity>
        <Image 
          source={require('../../assets/images/logo-text-colorfull.png')}
          style={styles.imageHeaderLogo}
        />
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <VIcon
            type={'MaterialIcons'}
            name={'home'}
            size={Dimens.FONT_SIZE_24}
            color={Colors.grayNavigationArrow}
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
        contentContainerStyle={{width: '100%', alignItems: 'center'}}>
        <CardHistoryStatus 
          status={props.route.params.status}
          date={'19 Nov 2020, 19.34'}
          alertText={'Saldo Tidak Cukup'}
        />
        <Text style={styles.textNotice}>{'Jika dalam 1x24 jam pembelian Anda belum diterima,\n silahkan klik Butuh Bantuan'}</Text>
        <Text style={styles.textHeader}>Nomer Ponsel</Text>
        <View style={styles.wrapperPhoneNumber}>
          <Image 
            source={require('../../assets/images/logo-xl.png')}
            style={styles.logoXL}
          />
          <View style={styles.wrapperRightPhone}>
            <Text style={styles.textXL}>XL Axiata</Text>
            <Text style={styles.textPhoneNumber}>0812 2240 0021</Text>
          </View>
        </View>
        <Text style={styles.textHeader}>No. Referensi</Text>
        <Text style={styles.textReference}>GIP19202011001</Text>
        <Text style={[styles.textHeader, {marginTop: heightPercentage(1)}]}>No. Referensi Biller/Nomer Serial</Text>
        <Text style={styles.textReference}>{props.route.params.status == 0 ? '10119202011003' : props.route.params.status == 1 ? '10119202011001' : '10119202011002'}</Text>
        <View style={styles.lineSeparator}/>
        <View style={styles.paymentMethodWrapper}>
          <View>
            <Text style={[styles.textHeader, {width: undefined}]}>Metode Pembayaran</Text>
            <Text style={[styles.textReference, {width: undefined}]}>Saldo Get.id</Text>
          </View>
          <Text style={[styles.textHeader, {width: undefined}]}>{`Rp.${currencyFormat(10000)}`}</Text>
        </View>
        <View style={styles.lineSeparator}/>
        <Text style={styles.textDetail}>Detail Pembelian</Text>
        <View style={styles.detailLineWrapper}>
          <Text style={[styles.textHeader, {width: undefined}]}>Pulsa 5.000</Text>
          <Text style={[styles.textHeader, {width: undefined}]}>{`Rp.${currencyFormat(5650)}`}</Text>
        </View>
        <View style={styles.detailLineWrapper}>
          <Text style={[styles.textHeader, {width: undefined}]}>Biaya Transaksi</Text>
          <Text style={[styles.textHeader, {width: undefined}]}>{`Rp.${currencyFormat(0)}`}</Text>
        </View>
        <View style={[styles.detailLineWrapper, {marginTop: heightPercentage(1)}]}>
          <Text style={[styles.textHeader, {width: undefined, fontFamily: Fonts.poppinsSemiBold}]}>Total</Text>
          <Text style={[styles.textHeader, {width: undefined, fontFamily: Fonts.poppinsSemiBold}]}>{`Rp.${currencyFormat(5650)}`}</Text>
        </View>
        <View style={styles.lineSeparator}/>
        <TouchableOpacity style={styles.buttonHelp}>
          <View style={styles.leftContentButtonHelp}>
            <VIcon
              type={'MaterialIcons'}
              name={'question-answer'}
              size={Dimens.FONT_SIZE_24}
              color={Colors.yellowPrimary}
            />
            <Text style={styles.textNeedHelp}>Butuh Bantuan ?</Text>
          </View>
          <VIcon
            type={'MaterialIcons'}
            name={'chevron-right'}
            size={Dimens.FONT_SIZE_24}
            color={Colors.grayNavigationArrow}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPercentage(85),
    marginBottom: heightPercentage(5)
  },
  imageHeaderLogo: {
    width: widthPercentage(22),
    height: undefined,
    aspectRatio: 82/26
  },
  textNotice: {
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(2.6),
    width: widthPercentage(85),
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_10,
    color: Colors.blackTextPackage,
    textAlign: 'center'
  },
  textHeader: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextPackage,
    width: widthPercentage(85),
    textAlign: 'left'
  },
  wrapperPhoneNumber: {
    flexDirection: 'row',
    width: widthPercentage(85),
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: heightPercentage(1)
  },
  logoXL: {
    width: widthPercentage(6.4),
    height: undefined,
    aspectRatio: 24/20,
    marginBottom: heightPercentage(0.5)
  },
  wrapperRightPhone: {
    marginLeft: widthPercentage(3),
    height: '100%'
  },
  textXL: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  textPhoneNumber: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blackTextPackage
  },
  textReference: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage,
    width: widthPercentage(85),
    textAlign: 'left'
  },
  lineSeparator: {
    width: widthPercentage(85),
    height: heightPercentage(2),
    marginBottom: heightPercentage(2),
    borderBottomColor: Colors.grayOutlineCircle,
    borderBottomWidth: 1
  },
  paymentMethodWrapper: {
    width: widthPercentage(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textDetail: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.bluePrimary,
    width: widthPercentage(85),
    textAlign: 'left',
    marginBottom: heightPercentage(1)
  },
  detailLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentage(85)
  },
  buttonHelp: {
    width: widthPercentage(85),
    paddingHorizontal: widthPercentage(5),
    height: undefined,
    aspectRatio: 314/45,
    backgroundColor: Colors.white,
    borderRadius: widthPercentage(20),
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(5),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftContentButtonHelp: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textNeedHelp: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.grayNavigationArrow,
    marginLeft: widthPercentage(2)
  }
})