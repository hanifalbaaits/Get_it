import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';

export default function LoginScreen(props){

  function gotoSignup(){
    props.navigation.navigate('SignupScreen');
  }

  return(
    <KeyboardAvoidingView 
      behavior={'position'} 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <SafeAreaView style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <Image 
          source={require('../../assets/images/logo-white.png')}
          style={styles.imageTop}
        />
        <Text style={styles.title}>Hai. Apa Kabar?</Text>
        <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>
        <Image 
          source={require('../../assets/images/line-wave-white-green.png')}
          style={styles.imageBottom}
        />
      </View>
      <View style={styles.bottomSheet}>
        <TextInput 
          title={'Username'}
        />
        <TextInput 
          title={'Password'}
          secureTextEntry={true}
          styleContainer={styles.input}
        />
        <Button
          type="fill" 
          color={Colors.yellowPrimary}
          styleLabel={styles.labelSignin}
          label="Masuk Sekarang"
        />
        <View style={styles.wrapperOrLine}>
          <View style={styles.horizontalLine}/>
          <Text style={styles.textOr}>atau</Text>
          <View style={styles.horizontalLine}/>
        </View>
        <Button
          type="outline" 
          color={Colors.yellowPrimary}
          styleLabel={styles.labelSigninGoogle}
          label="Masuk Dengan Akun Google"
          image={require('../../assets/images/logo-google.png')}
        />
        <Text style={styles.textSignupWrapper}>
          <Text>Belum punya Akun?</Text>
          <Text style={{ color: Colors.yellowPrimary }} onPress={()=>gotoSignup()}> Daftar</Text>
        </Text>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bluePrimary
  },
  topContainer: {
    width: widthPercentage(100),
    height: heightPercentage(50),
    backgroundColor: Colors.bluePrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageTop: {
    position: 'absolute',
    width: widthPercentage(40),
    height: undefined,
    aspectRatio: 56/54,
    top: -heightPercentage(8),
    right: -widthPercentage(10),
    opacity: 0.15
  },
  title: {
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_27,
    fontFamily: Fonts.poppinsBold,
    marginTop: -heightPercentage(12)
  },
  subtitle: {
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_17,
    fontFamily: Fonts.poppinsRegular
  },
  imageBottom: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55,
    position: 'absolute',
    bottom: heightPercentage(13)
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(64),
    backgroundColor: Colors.white,
    marginTop: -heightPercentage(13),
    paddingTop: '12%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  input: {
    marginTop: 18,
    marginBottom: 22
  },
  labelSignin: {
    color: Colors.white
  },
  wrapperOrLine: {
    width: widthPercentage(83.5),
    height: undefined,
    aspectRatio: 313/27,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 7
  },
  horizontalLine: {
    width: widthPercentage(32),
    height: 2,
    borderRadius: 2,
    backgroundColor: Colors.grayText,
    opacity: 0.5
  },
  textOr: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_19,
    color: Colors.grayText,
    marginHorizontal: 12
  },
  labelSigninGoogle: {
    color: Colors.grayText,
    fontSize: Dimens.FONT_SIZE_14
  },
  textSignupWrapper: {
    width: widthPercentage(83.5),
    textAlign: 'left',
    marginTop: 13,
    fontSize: Dimens.FONT_SIZE_13,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.grayText
  }
})