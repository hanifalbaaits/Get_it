import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { widthPercentage, heightPercentage, screenWidth, screenHeight } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';

export default function LoginScreen(props){

  function gotoSignup(){
    props.navigation.navigate('SignupScreen');
  }

  function onLogin(){
    props.navigation.navigate('MenuTab');
  }

  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' && 'position'} 
      style={styles.rootContainer}
    >
      <View style={styles.topContainer}>
        <Image 
          source={require('../../assets/images/logo-white.png')}
          style={styles.imageTop}
        />
        <View style={styles.wrapperTextTop}>
          <Text style={styles.title}>Hai. Apa Kabar?</Text>
          <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>
          <View style={styles.horizontalLineWhite}/>
        </View>
        <Image 
          source={require('../../assets/images/line-wave-white-green.png')}
          style={styles.imageBottom}
        />
        <View style={styles.maskBottomComponent}/>
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
          onPress={()=>onLogin()}
        />
        <View style={styles.wrapperOrLine}>
          <View style={styles.horizontalLineGray}/>
          <Text style={styles.textOr}>atau</Text>
          <View style={styles.horizontalLineGray}/>
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
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: widthPercentage(100), 
    height: heightPercentage(100), 
    backgroundColor: Colors.bluePrimary
  },
  topContainer: {
    flex: 1, 
    width: screenWidth, 
    height: screenHeight, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    backgroundColor: Colors.bluePrimary
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
  wrapperTextTop: {
    alignItems: 'center'
  },
  title: {
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_27,
    fontFamily: Fonts.poppinsBold,
  },
  subtitle: {
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_17,
    fontFamily: Fonts.poppinsRegular
  },
  horizontalLineWhite: {
    width: widthPercentage(30),
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.white,
    marginTop: heightPercentage(2)
  },
  imageBottom: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55,
  },
  maskBottomComponent: {
    width: screenWidth, 
    height: undefined, 
    aspectRatio: 375/440
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 375/440,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  input: {
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(4)
  },
  labelSignin: {
    color: Colors.white
  },
  wrapperOrLine: {
    width: widthPercentage(83.5),
    height: undefined,
    aspectRatio: 313/27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPercentage(2),
    marginBottom: heightPercentage(1)
  },
  horizontalLineGray: {
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
  },
  labelSigninGoogle: {
    color: Colors.grayText,
    fontSize: Dimens.FONT_SIZE_14
  },
  textSignupWrapper: {
    width: widthPercentage(83.5),
    textAlign: 'left',
    marginTop: heightPercentage(2),
    fontSize: Dimens.FONT_SIZE_13,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.grayText
  }
})