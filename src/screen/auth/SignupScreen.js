import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { ModalTnc, ModalAlert } from '../../components/Modal';
import { VIcon } from '../../components/Icon';
import { widthPercentage, heightPercentage, screenWidth, screenHeight } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';
import * as authAction from '../../redux/action/authAction';
import * as profileAction from '../../redux/action/profileAction';

export default function LoginScreen(props){

  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [modalTnc, setModalTnc] = useState({
    isVisible: false,
    isAccept: false
  })
  const [modalAlert, setModalAlert] = useState({
    isVisible: false,
    type: 'error',
    msg: undefined
  })

  useEffect(() => {
    if(authReducer.isLoading === false && authReducer.isError === false && authReducer.register !== null){
      dispatch(authAction.registerReset());
      let payload = {
        guid: authReducer.register.result[0].value.split("|")[1],
        storename: authReducer.register.email,
        address: null,
        city: null,
        province: null,
        region: null,
        telephone: null,
        email: authReducer.register.email,
        deviceid: null,
        openingdate: moment().format('YYYYMMDD')
      }
      dispatch(profileAction.updateRequest(payload));
    } else if(authReducer.isLoading === false && authReducer.isError === true){
      dispatch(authAction.registerReset());
      setModalAlert({
        ...modalAlert,
        isVisible: true,
        type: 'error',
        msg: authReducer.errorMsg
      })
    }

    if(profileReducer.isLoading === false && profileReducer.isError === false && profileReducer.updateProfile.length !== 0){
      dispatch(profileAction.updateReset());
      dispatch(authAction.activationRequest({email: email}));
    } else if(profileReducer.isLoading === false && profileReducer.isError === true){
      dispatch(profileAction.updateReset());
      setModalAlert({
        ...modalAlert,
        isVisible: true,
        type: 'error',
        msg: profileReducer.errorMsg
      })
    }

    if(authReducer.isLoading === false && authReducer.isError === false && authReducer.activation !== null){
      dispatch(authAction.activationReset());
      let payload = {
        email,
        password
      }
      dispatch(authAction.loginRequest(payload));
    } else if(authReducer.isLoading === false && authReducer.isError === true){
      dispatch(authAction.activationReset());
      setModalAlert({
        ...modalAlert,
        isVisible: true,
        type: 'error',
        msg: authReducer.errorMsg
      })
    }
  }, [authReducer, profileReducer])

  function onSignup(){
    if(modalTnc.isAccept === false){
      setModalAlert({
        ...modalAlert,
        isVisible: true,
        type: 'error',
        msg: 'Harap setuju dengan Syarat & Ketentuan \nuntuk melanjutkan'
      })
    } else if(password !== passwordConfirm){
      setModalAlert({
        ...modalAlert,
        isVisible: true,
        type: 'error',
        msg: 'Konfirmasi password tidak sesuai'
      })
    } else {
      let payload = {
        email: email,
        password: password
      }
      dispatch(authAction.registerRequest(payload))
    }
  }

  async function onSignupGoogle(){
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setEmail(userInfo.user.email);
      setPassword('12345');
      let payload = {
        email: userInfo.user.email,
        password: '12345'
      }
      dispatch(authAction.registerRequest(payload))
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

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
          title={'Email'}
          styleContainer={styles.input}
          onChangeText={(val)=>setEmail(val)}
          value={email}
        />
        <TextInput 
          title={'Password'}
          styleContainer={styles.input}
          secureTextEntry={true}
          onChangeText={(val)=>setPassword(val)}
          value={password}
        />
        <TextInput 
          title={'Ulangi Password'}
          secureTextEntry={true}
          styleContainer={styles.input}
          onChangeText={(val)=>setPasswordConfirm(val)}
          value={passwordConfirm}
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
          onPress={()=>onSignup()}
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
          onPress={()=>onSignupGoogle()}
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
      <ModalAlert 
        modalVisible={modalAlert.isVisible}
        setModalVisible={()=>setModalAlert({...modalAlert, isVisible: false})}
        onPress={()=>setModalAlert({...modalAlert, isVisible: false})}
        type={modalAlert.type}
        msg={modalAlert.msg}
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