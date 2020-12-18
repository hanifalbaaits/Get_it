import React, { useState, useEffect } from 'react';
import { View, Image, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { Button } from '../../components/Button';
import { VIcon } from '../../components/Icon';
import { TextInput } from '../../components/TextInput';
import { ModalConfirm, ModalAlert } from '../../components/Modal';
import { Colors, Dimens, Fonts } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import * as profileAction from '../../redux/action/profileAction';

export default function ChangeProfileScreen(props){

  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const [fullname, setFullname] = useState(profileReducer.info.length !== 0 ? profileReducer.info.filter(ar => ar.name == "storename")[0].value : '');
  const [phoneNumber, setPhoneNumber] = useState(profileReducer.info.length !== 0 ? profileReducer.info.filter(ar => ar.name == "telephone")[0].value : '');
  const [address, setAddress] = useState(profileReducer.info.length !== 0 ? profileReducer.info.filter(ar => ar.name == "address")[0].value : '');
  const [modalConfirm, setModalConfirm] = useState({
    isVisible: false,
    subtitle: 'Mengubah Profil'
  })
  const [modalAlert, setModalAlert] = useState({
    isVisible: false,
    type: 'error',
    msg: 'Maaf, terjadi kesalahan request \n silahkan coba lagi',
    onPress: ()=>setModalAlert({...modalAlert, type: 'error', isVisible: false})
  })

  useEffect(() => {
    if(profileReducer.isLoading === false && profileReducer.isError === false && profileReducer.updateProfile.length !== 0){
      setTimeout(() => {
        setModalAlert({
          ...modalAlert,
          isVisible: true,
          type: 'updateProfile',
          msg: undefined,
          onPress: ()=>{
            setModalAlert({...modalAlert, type: 'updateProfile', isVisible: false});
            dispatch(profileAction.updateReset());
            dispatch(profileAction.infoRequest({email: authReducer.credential?.email}));
            props.navigation.pop();
          }
        })
      }, 1000);
    } else if(profileReducer.isLoading === false && profileReducer.isError === true){
      setTimeout(() => {
        setModalAlert({
          ...modalAlert,
          isVisible: true,
          type: 'error',
          msg: 'Maaf, terjadi kesalahan request \n silahkan coba lagi',
          onPress: ()=>{
            setModalAlert({...modalAlert, type: 'error', isVisible: false});
            dispatch(profileAction.updateReset());
          }
        })
      }, 1000);
    }
  }, [profileReducer])

  function goNext(){
    setModalConfirm({...modalConfirm, isVisible: true});
  }

  function onConfirmChange(){
    setModalConfirm({...modalConfirm, isVisible: false});
    let payload = {
      guid: profileReducer.info.filter(ar => ar.name == "guid")[0].value,
      storename: fullname,
      address: address,
      city: profileReducer.info.filter(ar => ar.name == "city")[0].value,
      province: profileReducer.info.filter(ar => ar.name == "province")[0].value,
      region: profileReducer.info.filter(ar => ar.name == "region")[0].value,
      telephone: phoneNumber,
      email: profileReducer.info.filter(ar => ar.name == "email")[0].value,
      deviceid: '123456',
      openingdate: profileReducer.info.filter(ar => ar.name == "openingdate")[0].value,
      // closingdate: moment(profileReducer.info.filter(ar => ar.name == "openingdate")[0].value).add(1, 'months').format('YYYYMMDD')
    }
    dispatch(profileAction.updateRequest(payload));
  }

  return(
    <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' && 'position'} 
      keyboardVerticalOffset={-heightPercentage(10)}
      style={styles.rootContainer}
    >
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <HeaderNav 
        title={'Ubah Profil'}
      />
      <View style={styles.circleContainer}>
        <VIcon
          type={'MaterialIcons'}
          name={'person'}
          size={Dimens.FONT_SIZE_40}
          color={Colors.bluePrimary}
        />
      </View>
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={styles.bottomSheet}>
        <TextInput 
          title={'Nama Lengkap'}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={fullname}
          onChangeText={(val)=>setFullname(val)}
        />
        <TextInput 
          title={'Nomer Telpon'}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={phoneNumber}
          onChangeText={(val)=>setPhoneNumber(val)}
        />
        <TextInput 
          title={'Alamat'}
          styleInput={{ aspectRatio: 313/120 }}
          titleStyle={styles.titleTextInput}
          styleContainer={styles.textinputContainer}
          value={address}
          onChangeText={(val)=>setAddress(val)}
          multiline={true}
          textAlignVertical={'top'}
        />
        <Button
          type={'fill'} 
          color={Colors.yellowPrimary}
          styleContainer={styles.containerButtonNext}
          styleLabel={[styles.labelNextButton]}
          label="Ubah Profil"
          onPress={()=>goNext()}
        />
      </View>
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
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bluePrimary
  },
  circleContainer: {
    width: widthPercentage(23.2),
    aspectRatio: 1/1,
    height: undefined,
    borderRadius: widthPercentage(20),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPercentage(2)
  },
  imageWave: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  },
  titleTextInput: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_19,
    color: Colors.grayText
  },
  textinputContainer: {
    marginBottom: heightPercentage(2)
  },
  containerButtonNext: {
    aspectRatio: 329/39,
    // marginTop: heightPercentage(16.4)
    position: 'absolute',
    bottom: heightPercentage(4.5)
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(73.2),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '10%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  labelNextButton: {
    color: Colors.white
  }
})