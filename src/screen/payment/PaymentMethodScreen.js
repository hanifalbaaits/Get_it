import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardReviewSelectedPackage, CardPaymentMethod } from '../../components/Card';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';

export default function PaymentMethodScreen(props){

  function gotoPaymentConfirm(){
    props.navigation.navigate('PaymentConfirmScreen', {
      type: props.route.params.type,
      packageSelect: props.route.params.packageSelect,
      phoneNumber: props.route.params.phoneNumber
    })
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <HeaderNav 
        title={'Metode Pembayaran'}
      />
      <View style={styles.bottomSheet}>
        <CardReviewSelectedPackage 
          styleContainer={styles.cardReview}
          price={props.route.params.packageSelect.price}
          notes={
            props.route.params.type == 1 ? 'Pulsa '+props.route.params.packageSelect.name : 
            props.route.params.type == 2 ? 'Paket Data '+props.route.params.packageSelect.name : 
            null
          }
          phoneNumber={props.route.params.phoneNumber}
        />
        <Text style={styles.textChoosePaymentMethod}>Pilih Metode Pembayaran</Text>
        <Text style={styles.textBalance}>Saldo</Text>
        <CardPaymentMethod 
          logoPayment={require('../../assets/images/logo-colorfull.png')}
          title={'Saldo Get.id'}
          balance={10000}
          onPress={()=>gotoPaymentConfirm()}
        />
        <Image 
          source={require('../../assets/images/bottom-wave.png')}
          style={styles.bottomWave}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bluePrimary
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(85),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  textChoosePaymentMethod: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.blackTextPackage,
    width: widthPercentage(85),
    textAlign: 'left',
    marginTop: '5%'
  },
  textBalance: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.blackTextPackage,
    width: widthPercentage(85),
    textAlign: 'left',
    marginTop: '1%',
    marginBottom: '1%'
  },
  cardReview: {
    marginTop: '-18%'
  },
  bottomWave: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 1/1,
    position: 'absolute',
    bottom: 0,
    zIndex: -1
  }
})