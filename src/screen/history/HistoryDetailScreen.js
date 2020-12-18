import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment-with-locales-es6';
import { HeaderImageLogoBG } from '../../components/Header';
import { VIcon } from '../../components/Icon';
import { CardHistoryStatus } from '../../components/Card';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function HistoryDetailScreen(props){
  
  async function openHelp(){
    const canOpenHelp = await Linking.canOpenURL('https://wa.me/6287814001118');
    if(canOpenHelp){
      Linking.openURL('https://wa.me/6287814001118');
    }
  }

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
          status={props.route.params.type === 'deposit' ? 'SUCCESS' : props.route.params.item.children.filter(ar => ar.name == "Status")[0].value}
          date={props.route.params.type === 'deposit' ? 
          moment(props.route.params.item.children.filter(ar => ar.name == "DateTime")[0].value).locale('id').format('DD MMM YYYY, HH:mm') : 
          moment(props.route.params.item.children.filter(ar => ar.name == "Date")[0].value).locale('id').format('DD MMM YYYY, HH:mm')}
          alertText={''}
        />
        <Text style={styles.textNotice}>{'Jika dalam 1x24 jam pembelian Anda belum diterima,\n silahkan klik Butuh Bantuan'}</Text>
        <Text style={styles.textHeader}>{props.route.params.type === 'deposit' ? 'Username' : 'Nomor Ponsel'}</Text>
        {
          props.route.params.type === 'deposit' ?
          <View style={styles.wrapperUsername}>  
            <Text style={[styles.textPhoneNumber, { fontFamily: Fonts.poppinsSemiBold }]}>{'get.id'}</Text>
            <Text style={styles.textPhoneNumber}>{props.route.params.item.children.filter(ar => ar.name == "storeid")[0].value}</Text>
          </View>
          :
          <View style={styles.wrapperPhoneNumber}>  
            <Image 
              source={require('../../assets/images/logo-xl.png')}
              style={styles.logoXL}
            />
            <View style={styles.wrapperRightPhone}>
              <Text style={styles.textXL}>XL Axiata</Text>
              <Text style={styles.textPhoneNumber}>{props.route.params.item.children.filter(ar => ar.name == "Phone")[0].value}</Text>
            </View>
          </View>
        }
        {
          props.route.params.type === 'transaction' &&
          <View>
            <Text style={styles.textHeader}>No. Referensi</Text>
            <Text style={styles.textReference}>{props.route.params.item.children.filter(ar => ar.name == "OriginalTransID")[0].value}</Text>
            <Text style={[styles.textHeader, {marginTop: heightPercentage(1)}]}>No. Referensi Biller/Nomer Serial</Text>
            <Text style={styles.textReference}>{props.route.params.item.children.filter(ar => ar.name == "SerialNumber")[0].value}</Text>
          </View>
        }
        <View style={styles.lineSeparator}/>
        <Text style={styles.textDetail}>Detail Pembelian</Text>
        <View style={styles.paymentMethodWrapper}>
          <Text style={[styles.textHeader, {width: undefined}]}>{props.route.params.type === 'deposit' ? 'Isi Saldo' : 'Metode Pembayaran'}</Text>
          <Text style={[styles.textHeader, {width: undefined}]}>{props.route.params.type === 'deposit' ? `Rp.${currencyFormat(props.route.params.item.children.filter(ar => ar.name == "Value")[0].value)}` : `Rp.${currencyFormat(props.route.params.item.children.filter(ar => ar.name == "Price")[0].value)}`}</Text>
        </View>
        <View style={styles.paymentMethodWrapper}>
          <Text style={[styles.textHeader, {width: undefined}]}>{'Biaya Transaksi'}</Text>
          <Text style={[styles.textHeader, {width: undefined}]}>{`Rp.${currencyFormat(0)}`}</Text>
        </View>
        <View style={[styles.detailLineWrapper, {marginTop: heightPercentage(1)}]}>
          <Text style={[styles.textHeader, {width: undefined, fontFamily: Fonts.poppinsSemiBold}]}>Total</Text>
          <Text style={[styles.textHeader, {width: undefined, fontFamily: Fonts.poppinsSemiBold}]}>{props.route.params.type === 'deposit' ? `Rp.${currencyFormat(props.route.params.item.children.filter(ar => ar.name == "Value")[0].value)}` : `Rp.${currencyFormat(props.route.params.item.children.filter(ar => ar.name == "Price")[0].value)}`}</Text>
        </View>
        <View style={styles.lineSeparator}/>
        <TouchableOpacity style={styles.buttonHelp} onPress={()=>openHelp()}>
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
  wrapperUsername: {
    width: widthPercentage(85),
    alignItems: 'flex-start'
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