import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { Button } from '../../components/Button';
import { CardPaymentMethod } from '../../components/Card';
import { ModalConfirm } from '../../components/Modal';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';
import * as transactionAction from '../../redux/action/transactionAction';

export default function PaymentConfirmScreen(props){

  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const transactionReducer = useSelector(state => state.transaction);
  const [modalConfirm, setModalConfirm] = useState({
    isVisible: false,
    subtitle: 'Melanjutkan ?'
  })

  useEffect(() => {
    if(transactionReducer.isLoading === false && transactionReducer.isError === false && transactionReducer.payment !== null){
      props.navigation.navigate('PaymentProcessScreen');
    }
  }, [transactionReducer])

  function onConfirm(){
    setModalConfirm({...modalConfirm, isVisible: false});
    let payload = {
      email: authReducer.credential?.email,
      requestid: new Date().getTime(),
      password: authReducer.credential?.password,
      phone: props.route.params.phoneNumber,
      nom: props.route.params.packageSelect.children.filter(ar => ar.name == "barcode")[0].value
    }
    dispatch(transactionAction.paymentRequest(payload));
  }

  function gotoTransactionProcess(){
    setModalConfirm({...modalConfirm, isVisible: true});
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <HeaderNav 
        title={'Konfirmasi Pembayaran'}
        themes={'dark'}
      />
      <View style={styles.wrapperLineXL}>
        <Image 
          source={require('../../assets/images/logo-xl.png')}
          style={styles.logoXL}
        />
        <Text style={styles.textXL}>XL Axiata</Text>
      </View>
      <Text style={styles.textTotalPayment}>Total Pembayaran</Text>
      <Text style={styles.textPrice}>{`Rp. ${currencyFormat(props.route.params.packageSelect.children.filter(ar => ar.name == "price")[0].value)}`}</Text>
      <Text style={styles.textPackageName}>
        {
          props.route.params.type == 1 ? 'Pulsa '+currencyFormat(props.route.params.packageSelect.children.filter(ar => ar.name == "amount")[0].value) : 
          props.route.params.type == 2 ? 'Paket Data '+props.route.params.packageSelect.children.filter(ar => ar.name == "productname")[0].value : 
          null
        }
      </Text>
      <Text style={styles.textPaymentMethod}>Metode Pembayaran</Text>
      <CardPaymentMethod 
        logoPayment={require('../../assets/images/logo-colorfull.png')}
        title={'Saldo Get.id'}
        balance={profileReducer.balance}
      />
      <Image 
        source={require('../../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
      />
      <Button
        type={'fill'} 
        color={Colors.yellowPrimary}
        styleContainer={styles.buttonNext}
        styleLabel={{color: Colors.white}}
        label="Lanjutkan"
        onPress={()=>gotoTransactionProcess()}
      />
      <ModalConfirm 
        modalVisible={modalConfirm.isVisible}
        setModalVisible={()=>setModalConfirm({...modalConfirm, isVisible: false})}
        onConfirm={()=>onConfirm()}
        subtitle={modalConfirm.subtitle}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  wrapperLineXL: {
    flexDirection: 'row',
    width: widthPercentage(100),
    paddingLeft: widthPercentage(7.5),
    alignItems: 'center',
    marginTop: heightPercentage(6)
  },
  logoXL: {
    width: widthPercentage(6),
    height: undefined,
    aspectRatio: 24/20
  },
  textXL: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage,
    marginLeft: widthPercentage(3)
  },
  textTotalPayment: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blackTextPackage,
    width: widthPercentage(100),
    paddingLeft: widthPercentage(7.5),
    textAlign: 'left',
    marginTop: heightPercentage(1)
  },
  textPrice: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_17,
    color: Colors.blackTextPackage,
    width: widthPercentage(100),
    paddingLeft: widthPercentage(7.5),
    textAlign: 'left'
  },
  textPackageName: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_10,
    color: Colors.blackTextPackage,
    width: widthPercentage(100),
    paddingLeft: widthPercentage(7.5),
    textAlign: 'left'
  },
  textPaymentMethod: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.blackTextPackage,
    width: widthPercentage(100),
    paddingLeft: widthPercentage(7.5),
    textAlign: 'left',
    marginTop: heightPercentage(3),
    marginBottom: heightPercentage(2.5)
  },
  bottomWave: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 1/1,
    position: 'absolute',
    bottom: 0,
    zIndex: -1
  },
  buttonNext: {
    position: 'absolute',
    bottom: 20,
    aspectRatio: 329/39
  }
})