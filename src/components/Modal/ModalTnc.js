import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from '../Button';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function ModalAlert({modalVisible, setModalVisible, setAccept}){
  return(
    <Modal 
      swipeDirection={'down'}
      isVisible={modalVisible}
      onBackdropPress={()=>setModalVisible(false)}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}
    >
      <View style={styles.rootWrapper}>
        <Text style={styles.title}>Terms & Conditions</Text>
        <View style={styles.wrapperContent}>
          <ScrollView>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </ScrollView>
        </View>
        <View style={styles.footerWrapper}>
          <Button
            type="outline" 
            color={Colors.grayOutline}
            styleContainer={styles.containerButton}
            styleLabel={styles.labelBack}
            label="Kembali"
            onPress={()=>setModalVisible(false)}
          />
          <Button
            type="fill" 
            color={Colors.bluePrimary}
            styleContainer={styles.containerButton}
            styleLabel={styles.labelConfirm}
            label="Setuju"
            onPress={()=>setAccept(true)}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  rootWrapper: {
    // justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    width: widthPercentage(100),
    height: heightPercentage(75),
    borderTopLeftRadius: 43,
    borderTopRightRadius: 43,
    paddingTop: heightPercentage(4),
    paddingHorizontal: widthPercentage(10)
  },
  title: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_23,
    color: Colors.blueText,
    width: '100%'
  },
  wrapperContent: {
    width: '100%', 
    height: '70%',
    marginTop: heightPercentage(1)
  },
  content: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_15,
    color: Colors.blackText,
    textAlign: 'left',
    lineHeight: 23
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: widthPercentage(90),
    marginTop: heightPercentage(7)
  },
  containerButton: {
    width: widthPercentage(26),
    height: undefined,
    aspectRatio: 99/31,
    marginHorizontal: 5
  },
  labelBack: {
    color: Colors.grayText3,
    fontSize: Dimens.FONT_SIZE_17
  },
  labelConfirm: {
    color: Colors.white,
    fontSize: Dimens.FONT_SIZE_17
  }
})