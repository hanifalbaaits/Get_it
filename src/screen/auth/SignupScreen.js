import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { ModalTnc } from '../../components/Modal';
import { VIcon } from '../../components/Icon';
import { widthPercentage, heightPercentage, screenWidth, screenHeight } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';

export default function LoginScreen(props){

  const [modalTnc, setModalTnc] = useState({
    isVisible: false,
    isAccept: false
  })

  function gotoLogin(){
    props.navigation.pop();
  }

  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' && 'position'} 
      keyboardVerticalOffset={-heightPercentage(10)}
      style={styles.rootContainer}
    >
      <View style={styles.topContainer}>
        <Image 
          source={require('../../assets/images/logo-white.png')}
          style={styles.imageTop}
        />
        <View style={styles.wrapperTextTop}>
          <Text style={{textAlign: 'center'}}>
            <Text style={styles.title}>Selamat Datang{'\n'}</Text>
            <Text style={styles.subtitle}>Silahkan daftar terlebih dahulu</Text>
          </Text>
          <View style={styles.horizontalLineWhite}/>
        </View>
        <Image 
          source={require('../../assets/images/line-wave-white-green.png')}
          style={styles.imageBottom}
        />
        <View style={styles.maskBottomComponent}/>
      </View>
      <View style={styles.bottomSheet}>
        <ScrollView style={{ width: widthPercentage(100)}} contentContainerStyle={{alignItems: 'center'}}>
        <TextInput 
          title={'Username'}
          styleContainer={styles.input}
        />
        <TextInput 
          title={'Email'}
          styleContainer={styles.input}
        />
        <TextInput 
          title={'Password'}
          secureTextEntry={true}
          styleContainer={styles.input}
        />
        <TouchableOpacity style={styles.wrapperTnc} onPress={()=>setModalTnc({...modalTnc, isVisible: true})}>
          <View style={styles.circleCheck} />
          {
            modalTnc.isAccept &&
            <VIcon
              type={'MaterialIcons'}
              name={'check'}
              size={Dimens.FONT_SIZE_28}
              color={Colors.yellowPrimary}
              style={styles.iconCheck}
            />
          }
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 20 }}>
            <Text style={styles.textTncWrapper}>
              <Text>Saya setuju dengan </Text>
              <Text style={{color: Colors.greenPrimary}}>Syarat & Ketentuan</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <Button
          type="fill" 
          color={Colors.yellowPrimary}
          styleLabel={styles.labelSignin}
          label="Daftar Sekarang"
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
          label="Daftar Dengan Akun Google"
          image={require('../../assets/images/logo-google.png')}
        />
        <Text style={styles.textSignupWrapper}>
          <Text>Sudah punya Akun?</Text>
          <Text style={{ color: Colors.yellowPrimary }} onPress={()=>gotoLogin()}> Masuk</Text>
        </Text>
        </ScrollView>
      </View>
      <ModalTnc 
        modalVisible={modalTnc.isVisible} 
        setModalVisible={(val)=>{setModalTnc({...modalTnc, isVisible: val})}}
        setAccept={(val)=>{setModalTnc({...modalTnc, isVisible: false, isAccept: val})}}
      />
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
    marginTop: -heightPercentage(12)
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
    aspectRatio: 375/570
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 375/570,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  input: {
    marginBottom: 18
  },
  labelSignin: {
    color: Colors.white
  },
  wrapperTnc: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: widthPercentage(83.5),
    alignItems: 'center',
    marginBottom: 18
  },
  circleCheck: {
    width: widthPercentage(5),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(5),
    borderColor: Colors.grayOutlineCircle,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  iconCheck: {
    position: 'absolute',
    top: -heightPercentage(1)
  },
  textTncWrapper: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_13,
    color: Colors.grayText2,
    marginLeft: 10,
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