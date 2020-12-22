import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { HeaderImageLogoBG } from '../../components/Header';
import { TextInput } from '../../components/TextInput';
import { ModalAlert } from '../../components/Modal';
import { widthPercentage, heightPercentage, screenWidth, screenHeight } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';
import * as authAction from '../../redux/action/authAction';
import * as profileAction from '../../redux/action/profileAction';

export default function LoginScreen(props){

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalAlert, setModalAlert] = useState({
    isVisible: false,
    type: 'error'
  })

  useEffect(() => {
    if(isFocused){
      if(authReducer.isLoading === false && authReducer.isError === false && authReducer.isLogin === true){
        onLogin();
      } else if(authReducer.isLoading === false && authReducer.isError === true && authReducer.isLogin === false){
        dispatch(authAction.loginReset());
        if(authReducer.errorMsg.split("|")[0] !== '04'){
          onError();
        }
      }

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
        if(authReducer.errorMsg.split("|")[0] === '04'){
          onLoginSoap();
        }
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
        onLoginSoap();
      } else if(authReducer.isLoading === false && authReducer.isError === true){
        dispatch(authAction.activationReset());
        if(authReducer.errorMsg.split("|")[0] !== '04'){
          setModalAlert({
            ...modalAlert,
            isVisible: true,
            type: 'error',
            msg: authReducer.errorMsg
          })
        }
      }
    }
  }, [authReducer, profileReducer])

  function gotoSignup(){
    props.navigation.navigate('SignupScreen');
  }

  function onLogin(){
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'MenuTab'}]
    });
  }

  function onError(){
    setModalAlert({...modalAlert, isVisible: true});
    revokeGoogle();
  }

  function onLoginSoap(){
    let payload = {
      email,
      password
    }
    dispatch(authAction.loginRequest(payload));
  }

  async function onLoginGoogle(){
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

  async function revokeGoogle(){
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' && 'position'} 
      style={styles.rootContainer}
    >
      <View style={styles.topContainer}>
        <HeaderImageLogoBG />
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
          title={'Email'}
          onChangeText={(val)=>setEmail(val)}
        />
        <TextInput 
          title={'Password'}
          secureTextEntry={true}
          styleContainer={styles.input}
          onChangeText={(val)=>setPassword(val)}
        />
        <Button
          type="fill" 
          color={Colors.yellowPrimary}
          styleLabel={styles.labelSignin}
          label="Masuk Sekarang"
          onPress={()=>onLoginSoap()}
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
          onPress={()=>onLoginGoogle()}
        />
        <Text style={styles.textSignupWrapper}>
          <Text>Belum punya Akun?</Text>
          <Text style={{ color: Colors.yellowPrimary }} onPress={()=>gotoSignup()}> Daftar</Text>
        </Text>
        <ModalAlert 
          modalVisible={modalAlert.isVisible}
          setModalVisible={()=>setModalAlert({...modalAlert, isVisible: false})}
          onPress={()=>setModalAlert({...modalAlert, isVisible: false})}
          type={modalAlert.type}
        />
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