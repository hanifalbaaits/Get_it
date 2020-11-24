import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { VIcon } from '../Icon';
import { Button } from '../Button';
import { Colors, Fonts, Dimens } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function ModalConfirm({modalVisible, setModalVisible, onConfirm}){
  return(
    <Modal 
      swipeDirection={'down'}
      isVisible={modalVisible}
      onBackdropPress={()=>setModalVisible(false)}
    >
      <View style={[styles.rootWrapper]}>
        <View style={styles.titleWrapper}>
          <VIcon
            type={'MaterialIcons'}
            name={'help'}
            size={Dimens.FONT_SIZE_30}
            color={Colors.bluePrimary}
          />
          <Text style={styles.textTitle}>{'YAKIN'}</Text>
        </View>
        <Text style={styles.textSubtitle}>
          <Text>{'Apakah Anda yakin untuk \n'}</Text>
          <Text style={{ color: Colors.bluePrimary }}>{'Ganti Kata Sandi'}</Text>
        </Text>
        <View style={styles.buttonWrapper}>
          <Button
            type="outline" 
            color={Colors.grayText3}
            styleLabel={styles.labelCancel}
            label="Tidak"
            onPress={()=>setModalVisible(false)}
            styleContainer={styles.buttonConfirm}
          />
          <Button
            type="fill" 
            color={Colors.bluePrimary}
            styleLabel={styles.labelConfirm}
            label="Yakin"
            onPress={()=>onConfirm()}
            styleContainer={styles.buttonConfirm}
          />
        </View>
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
    width: '67%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%'
  },
  labelCancel: {
    color: Colors.grayText2
  },
  buttonConfirm: {
    width: '45%',
    aspectRatio: 99/31
  },
  labelConfirm: {
    color: Colors.white
  }
})