import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardReviewSelectedPackage, CardPaymentMethod } from '../../components/Card';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function PaymentMethodScreen(props){

  const profileReducer = useSelector(state => state.profile);
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
          price={props.route.params.packageSelect.children.filter(ar => ar.name == "price")[0].value}
          notes={
            props.route.params.type == 1 ? 'Pulsa '+currencyFormat(props.route.params.packageSelect.children.filter(ar => ar.name == "amount")[0].value) : 
            props.route.params.type == 2 ? 'Paket Data '+props.route.params.packageSelect.children.filter(ar => ar.name == "productname")[0].value : 
            null
          }
          phoneNumber={props.route.params.phoneNumber}
        />
        <Text style={styles.textChoosePaymentMethod}>Pilih Metode Pembayaran</Text>
        <Text style={styles.textBalance}>Saldo</Text>
        <CardPaymentMethod 
          logoPayment={require('../../assets/images/logo-colorfull.png')}
          title={'Saldo Get.id'}
          balance={profileReducer.balance !== null ? profileReducer.balance.split('|')[0] !== 99 ? profileReducer.balance.split('|')[0] : 0 : 0}
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