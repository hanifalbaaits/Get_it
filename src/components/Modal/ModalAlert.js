import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { VIcon } from '../Icon';
import { Colors, Fonts, Dimens } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function ModalAlert({modalVisible, setModalVisible, onPress, type}){
  return(
    <Modal 
      swipeDirection={'down'}
      isVisible={modalVisible}
      onBackdropPress={()=>setModalVisible(false)}
    >
      <View style={[styles.rootWrapper, type == 'changePassword' && { aspectRatio: 282/130 }]}>
        <View style={styles.titleWrapper}>
          <VIcon
            type={'MaterialIcons'}
            name={type == 'success' || type == 'changePassword' ? 'check-circle' : 'report-problem'}
            size={Dimens.FONT_SIZE_30}
            color={type == 'success' || type == 'changePassword' ? Colors.greenAlert : Colors.redAlert}
          />
          <Text style={styles.textTitle}>{type == 'success' ? 'Berhasil' : 'Gagal'}</Text>
        </View>
        <Text style={styles.textSubtitle}>
          {
            type == 'success' ?
            <Text>
              <Text>{'Pendaftaran Anda '}</Text>
              <Text style={{ color: Colors.greenAlert }}>{'Berhasil \n'}</Text>
              <Text>{'Silahkan '}</Text>
              <Text style={{ color: Colors.greenAlert}}>{'Cek Email '}</Text>
              <Text>{'untuk Verifikasi'}</Text>
            </Text>
            :
            type == 'changePassword' ?
            <Text>
              <Text>{'Kata Sandi Anda '}</Text>
              <Text style={{ color: Colors.greenAlert }}>{'Berhasil '}</Text>
              <Text>{'diubah'}</Text>
            </Text>
            :
            <Text>
              <Text>{'Maaf, Nama Pengguna/Kata Sandi Anda \n'}</Text>
              <Text style={{ color: Colors.redAlert }}>{'Salah'}</Text>
              <Text>{', harap coba lagi dengan benar'}</Text>
            </Text>
          }
        </Text>
        <TouchableOpacity onPress={onPress} style={[styles.buttonWrapper, type == 'success' || type == 'changePassword' ? { backgroundColor: Colors.greenAlert } : { backgroundColor: Colors.redAlert }]}>
          <Text style={styles.textDone}>Selesai</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: widthPercentage(83.5),
    height: undefined,
    aspectRatio: 313/171,
    borderRadius: 20
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  textTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_20,
    color: Colors.grayText2,
    marginLeft: '3%'
  },
  textSubtitle: {
    color: Colors.grayText2,
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_13,
    textAlign: 'center'
  },
  buttonWrapper: {
    width: '32%',
    height: undefined,
    aspectRatio: 99/31,
    borderRadius: widthPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%'
  },
  textDone: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_17,
    color: Colors.white
  }
})