import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { HeaderImageLogoBG } from '../../components/Header';
import { Button } from '../../components/Button';
import { VIcon } from '../../components/Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import * as transactionAction from '../../redux/action/transactionAction';

export default function PaymentProcessScreen(props){

  const dispatch = useDispatch();

  function onDone(){
    dispatch(transactionAction.paymentReset());
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'MenuTab'}]
    });
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
      <View style={styles.contentWrapper}>
        <View style={styles.iconWrapper}>
          <VIcon
            type={'MaterialIcons'}
            name={'timer'}
            size={widthPercentage(30)}
            color={Colors.white}
          />
          <View style={styles.uploadWrapper}>
            <VIcon
              type={'MaterialIcons'}
              name={'file-upload'}
              size={widthPercentage(6)}
              color={Colors.white}
            />
          </View>
        </View>
        <Text style={styles.textProcess}>{'Transaksi Anda sedang \n diproses..'}</Text>
        <Button
          type={'outline'} 
          color={Colors.white}
          styleContainer={styles.buttonDone}
          styleLabel={{color: Colors.white}}
          label="Selesai"
          onPress={()=>onDone()}
        />
      </View>
      <HeaderImageLogoBG />
      <Image 
        source={require('../../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
      />
      <Image 
        source={require('../../assets/images/line-wave-white.png')}
        style={styles.lineWave}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bluePrimary
  },
  contentWrapper: {
    alignItems: 'center'
  },
  iconWrapper: {
    alignItems: 'center'
  },
  uploadWrapper: {
    width: widthPercentage(10),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(10),
    backgroundColor: Colors.yellowPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    right: 0
  },
  textProcess: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_18,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: heightPercentage(4),
    marginTop: heightPercentage(3)
  },
  buttonDone: {
    width: widthPercentage(43),
    aspectRatio: 161/46
  },
  bottomWave: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 1/1,
    position: 'absolute',
    bottom: 0,
    zIndex: -1
  },
  lineWave: {
    position: 'absolute',
    bottom: 0,
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  }
})