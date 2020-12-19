import React, { useEffect } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors } from '../base';
import { widthPercentage } from '../helper/dimension';

export default function SplashScreen(props){
  const authReducer = useSelector(state => state.auth);
  useEffect(() => {
    if(authReducer.isLogin === true){
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'MenuTab'}]
      });
    } else {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Auth'}]
        });
      }, 2000);
    }
  }, [])
  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <Image 
        source={require('../assets/images/logo-text-colorfull2.png')}
        style={styles.logoCenter}
      />
      <Image 
        source={require('../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
      />
      <Image 
        source={require('../assets/images/line-wave-white.png')}
        style={styles.lineWave}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center'
  },
  logoCenter: {
    width: widthPercentage(53.6),
    height: undefined,
    aspectRatio: 300/100
  },
  bottomWave: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 1/1,
    position: 'absolute',
    bottom: 0
  },
  lineWave: {
    position: 'absolute',
    bottom: 0,
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  }
})