import React, { useState } from 'react';
import { View, Image, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { Button } from '../../components/Button';
import { VIcon } from '../../components/Icon';
import { TextInput } from '../../components/TextInput';
import { ModalConfirm } from '../../components/Modal';
import { Colors, Dimens, Fonts } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function ChangeProfileScreen(props){

  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [modalConfirm, setModalConfirm] = useState({
    isVisible: false,
    subtitle: 'Ganti Kata Sandi'
  })

  function goNext(){
    setModalConfirm({...modalConfirm, isVisible: true});
  }

  function onConfirmChange(){
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'MenuTab'}]
    });
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
    position: 'absolute',
    bottom: heightPercentage(4.5)
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(73.2),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '15%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  labelNextButton: {
    color: Colors.white
  }
})