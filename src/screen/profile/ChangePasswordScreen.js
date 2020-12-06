import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { ModalAlert, ModalConfirm } from '../../components/Modal';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import * as profileAction from '../../redux/action/profileAction';

export default function ChangePasswordScreen(props){

  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalConfirm, setModalConfirm] = useState({
    isVisible: false,
    subtitle: 'Ganti Kata Sandi'
  })
  const [modalAlert, setModalAlert] = useState({
    isVisible: false,
    type: 'error',
    msg: 'Maaf, konfirmasi password baru tidak cocok, Silahkan coba lagi',
    onPress: ()=>setModalAlert({...modalAlert, isVisible: false})
  })

  useEffect(() => {
    if(profileReducer.isLoading === false && profileReducer.isError === false && profileReducer.changePassword !== null){
      setTimeout(() => {
        setModalAlert({
        ...modalAlert, 
        isVisible: true, 
        type: 'changePassword', 
        msg: undefined,
        onPress: ()=>{
          setModalAlert({...modalAlert, isVisible: false});
          props.navigation.pop();
        }});
      }, 1000);
      dispatch(profileAction.changePasswordReset());
    } else if(profileReducer.isLoading === false && profileReducer.isError === true){
      setModalAlert({...modalAlert, isVisible: true, msg: profileReducer.errorMsg});
      dispatch(profileAction.changePasswordReset());
    }
  }, [profileReducer])

  function onNext(){
    if(newPassword !== confirmPassword){
      setModalAlert({...modalAlert, isVisible: true})
    } else {
      setModalConfirm({...modalConfirm, isVisible: true})
    }
  }

  function onConfirmChange(){
    setModalConfirm({...modalConfirm, isVisible: false})
    let payload = {
      email: authReducer.credential.email,
      oldPass: oldPassword,
      newPass: newPassword
    }
    dispatch(profileAction.changePasswordRequest(payload));
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <HeaderNav 
        title={'Ganti Kata Sandi'}
        themes={'dark'}
        styleContainer={styles.header}
      />
      <View style={styles.contentWrapper}>
        <TextInput 
          title={'Masukkan Kata Sandi Sekarang'}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={oldPassword}
          onChangeText={(val)=>setOldPassword(val)}
          secureTextEntry={true}
        />
        <TextInput 
          title={'Masukkan Kata Sandi Baru'}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={newPassword}
          onChangeText={(val)=>setNewPassword(val)}
          secureTextEntry={true}
        />
        <TextInput 
          title={'Ulangi Kata Sandi Baru'}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={confirmPassword}
          onChangeText={(val)=>setConfirmPassword(val)}
          secureTextEntry={true}
        />
        <Button
          type={'fill'} 
          color={Colors.yellowPrimary}
          styleContainer={styles.buttonNext}
          styleLabel={{color: Colors.white}}
          label="Lanjutkan"
          onPress={()=>onNext()}
        />
      </View>
      <Image 
        source={require('../../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
      />
      <ModalConfirm 
        modalVisible={modalConfirm.isVisible}
        setModalVisible={()=>setModalConfirm({...modalConfirm, isVisible: false})}
        onConfirm={()=>onConfirmChange()}
        subtitle={modalConfirm.subtitle}
      />
      <ModalAlert 
        modalVisible={modalAlert.isVisible}
        setModalVisible={()=>setModalAlert({...modalAlert, isVisible: false})}
        onPress={()=>modalAlert.onPress()}
        type={modalAlert.type}
        msg={modalAlert.msg}
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
  header: {
    zIndex: 10
  },
  contentWrapper: {
    width: widthPercentage(85),
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextInput: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_18,
    color: Colors.blackTextPackage,
    marginBottom: heightPercentage(1)
  },
  textinputContainer: {
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
    marginTop: heightPercentage(3),
    aspectRatio: 329/39
  }
})