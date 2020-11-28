import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function CardInputNumber({styleContainer, onChangeText, value}){
  return(
    <View style={[styles.rootContainer, styleContainer]}>
      <Image 
        source={require('../../assets/images/logo-xl.png')}
        style={styles.logoXL}
      />
      <View style={styles.containerInput}>
        <Text style={styles.textTitleInput}>Masukkan Nomer</Text>
        <TextInput 
          multiline={false}
          numberOfLines={1}
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder={'08XX XXXX XXXX'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(85),
    height: undefined,
    aspectRatio: 329/88,
    backgroundColor: Colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoXL: {
    width: widthPercentage(9),
    height: undefined,
    aspectRatio: 34/27
  },
  containerInput: {
    width: widthPercentage(62.13),
    marginLeft: widthPercentage(3.7)
  },
  textTitleInput: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_9,
    color: Colors.blackTextPackage
  },
  input: {
    borderBottomColor: Colors.grayText3,
    borderBottomWidth: 1,
    textAlignVertical: 'top',
    height: 35
  }
})