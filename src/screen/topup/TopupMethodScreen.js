import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { VIcon } from '../../components/Icon';
import { Button } from '../../components/Button';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import * as transactionAction from '../../redux/action/transactionAction';

export default function TopupMethodScreen(props){

  const dispatch = useDispatch();
  const transactionReducer = useSelector(state => state.transaction);

  function onDone(){
    dispatch(transactionAction.topupReset());
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'MenuTab'}]
    });
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <HeaderNav 
        title={'Cara Pembayaran'}
        themes="dark"
      />
      <Text style={styles.textTotalPayment}>Total Pembayaran</Text>
      <View style={styles.containerNominal}>
        {transactionReducer.topup !== null &&
          <Text>
            <Text style={styles.textCurrency}>{`Rp. ${transactionReducer.topup[0].children[0].value.split("|")[1].substring(0, transactionReducer.topup[0].children[0].value.split("|")[1].length-3)}.`}</Text>
            <Text style={styles.uniqAmount}>{transactionReducer.topup[0].children[0].value.split("|")[1].substr(-3)}</Text>
          </Text>
        }
      </View>
      <View style={styles.containerDetail}>
        <Text style={styles.textDetail}>Silahkan melakukan pembayaran ke nomor rekening berikut :</Text>
        <View style={{ width: widthPercentage(85), flexDirection: 'row', marginTop: heightPercentage(2) }}>
          <Text style={[styles.textDetail, { width: widthPercentage(25) }]}>Nama Bank</Text>
          <Text style={[styles.textDetail, { width: widthPercentage(2)}]}>:</Text>
          <Text style={[styles.textDetail, { fontFamily: Fonts.poppinsBold }]}>{transactionReducer.topupAccount?.filter(ar => ar.children.some(ch => ch.value === "BANK TRANSFER"))[0].children.filter(item => item.name == "Institution_Name")[0].value}</Text>
        </View>
        <View style={{ width: widthPercentage(85), flexDirection: 'row' }}>
          <Text style={[styles.textDetail, { width: widthPercentage(25) }]}>No Rek</Text>
          <Text style={[styles.textDetail, { width: widthPercentage(2)}]}>:</Text>
          <Text style={[styles.textDetail, { fontFamily: Fonts.poppinsBold }]}>{transactionReducer.topupAccount?.filter(ar => ar.children.some(ch => ch.value === "BANK TRANSFER"))[0].children.filter(item => item.name == "Account_Number")[0].value}</Text>
        </View>
        <View style={{ width: widthPercentage(85), flexDirection: 'row' }}>
          <Text style={[styles.textDetail, { width: widthPercentage(25) }]}>Atas Nama</Text>
          <Text style={[styles.textDetail, { width: widthPercentage(2)}]}>:</Text>
          <Text style={[styles.textDetail, { fontFamily: Fonts.poppinsBold }]}>{transactionReducer.topupAccount?.filter(ar => ar.children.some(ch => ch.value === "BANK TRANSFER"))[0].children.filter(item => item.name == "Account_Name")[0].value}</Text>
        </View>
        <Text style={[styles.textDetail, {marginTop: heightPercentage(2)}]}>
          <Text>Pastikan jumlah </Text>
          <Text style={{ fontFamily: Fonts.poppinsBold }}>3 digit </Text>
          <Text>terakhir benar</Text>
        </Text>
        <Text style={[styles.textDetail, {marginTop: heightPercentage(2)}]}>Setelah melakukan pembayaran harap konfirmasi ke :</Text>
        <TouchableOpacity style={styles.buttonHelp}>
          <View style={styles.leftContentButtonHelp}>
            <VIcon
              type={'MaterialIcons'}
              name={'question-answer'}
              size={Dimens.FONT_SIZE_24}
              color={Colors.yellowPrimary}
            />
            <Text style={styles.textNeedHelp}>Konfirmasi Pembayaran</Text>
          </View>
          <VIcon
            type={'MaterialIcons'}
            name={'chevron-right'}
            size={Dimens.FONT_SIZE_24}
            color={Colors.grayNavigationArrow}
          />
        </TouchableOpacity>
        <Button
          type={'fill'} 
          color={Colors.yellowPrimary}
          styleContainer={styles.containerButtonNext}
          styleLabel={[styles.labelDefaultNextButton]}
          label="Selesai"
          onPress={()=>onDone()}
        />
      </View>
      <Image 
        source={require('../../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
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
  textTotalPayment: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blackTextPackage,
    marginTop: heightPercentage(5)
  },
  containerNominal: {
    width: widthPercentage(85),
    height: undefined,
    aspectRatio: 85/17,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.grayText3,
    borderBottomWidth: 1
  },
  textCurrency: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_35,
    color: Colors.blackTextPackage
  },
  uniqAmount: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_35,
    color: Colors.blackTextPackage,
    textDecorationLine: 'underline'
  },
  containerDetail: {
    width: widthPercentage(85),
    marginTop: heightPercentage(3)
  },
  textDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage
  },
  buttonHelp: {
    width: widthPercentage(85),
    paddingHorizontal: widthPercentage(5),
    height: undefined,
    aspectRatio: 314/45,
    backgroundColor: Colors.white,
    borderRadius: widthPercentage(20),
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(2),
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
  },
  containerButtonNext: {
    width: widthPercentage(85),
    aspectRatio: 314/45
  },
  labelDefaultNextButton: {
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.white
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