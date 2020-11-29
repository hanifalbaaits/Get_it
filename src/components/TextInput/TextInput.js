import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors, Fonts, Dimens } from '../../base';
import { widthPercentage } from '../../helper/dimension';

export default function TextInputDefault(props){
  return(
    <View style={[styles.rootContainer, props.styleContainer]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      <TextInput 
        style={styles.input}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(84),
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    color: Colors.grayText,
    fontSize: Dimens.FONT_SIZE_19,
    fontFamily: Fonts.poppinsRegular,
  },
  input: {
    borderColor: Colors.grayOutline,
    borderWidth: 1,
    borderRadius: 10,
    width: widthPercentage(84),
    height: undefined,
    aspectRatio: 313/46,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.grayText,
    marginTop: 6,
    paddingLeft: widthPercentage(5)
  }
})