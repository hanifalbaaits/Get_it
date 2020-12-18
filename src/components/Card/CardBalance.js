import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import { widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';
import { Colors, Dimens, Fonts } from '../../base';

export default function CardBalance({styleContainer, balance}){
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const transactionReducer = useSelector(state => state.transaction);

  function gotoTopup(){

    if(transactionReducer.topupTime === null){
      navigation.navigate('TopupStack', {screen: 'TopupScreen'});
    } else {
      let startTime = transactionReducer.topupTime;
      let endTime = moment().valueOf();
      let diffSecond = (endTime - startTime)/1000;
      if(diffSecond <= 3600){
        navigation.navigate('TopupStack', {screen: 'TopupMethodScreen'});
      } else {
        dispatch(transactionAction.topupReset());
        dispatch(transactionAction.topupTimeReset());
        navigation.navigate('TopupStack', {screen: 'TopupScreen'});
      }
    }
  }
  return(
    <View style={[styles.rootContainer, styleContainer]}>
      <View style={styles.wrapperContent}>
        <Image 
          source={require('../../assets/images/logo-white.png')}
          style={styles.logo}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.textBalance}>Saldo</Text>
          <Text style={styles.textBalanceValueWrapper}>
            <Text style={styles.textCurrency}>Rp. </Text>
            <Text style={styles.textBalanceValue}>{currencyFormat(balance)}</Text>
          </Text>
          <Text style={styles.textTopup} onPress={()=>gotoTopup()}>Isi Saldo</Text>
        </View>
      </View>
      <Image 
        source={require('../../assets/images/pattern.png')}
        style={styles.image}
        resizeMode={'cover'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/157,
    backgroundColor: Colors.bluePrimary,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.45,
    shadowRadius: 2.21,
    elevation: 5
  },
  wrapperContent: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: widthPercentage(15),
    height: undefined,
    aspectRatio: 55/53,
    opacity: 2
  },
  textWrapper: {
    justifyContent: 'center',
    marginLeft: '4%'
  },
  textBalance: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_22,
    color: Colors.white
  },
  textBalanceValueWrapper: {
    marginTop: '-8%'
  },
  textCurrency: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_22,
    color: Colors.white
  },
  textBalanceValue: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_22,
    color: Colors.white
  },
  textTopup: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.yellowTextTopup
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    position: 'absolute',
    zIndex: -1
  }
})