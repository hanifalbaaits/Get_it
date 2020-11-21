import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentage } from '../../helper/dimension';
import { Colors, Dimens, Fonts } from '../../base';

export default function ButtonFill(props){
  return(
    <TouchableOpacity 
      style={[styles.rootContainer, props.styleContainer,
        props.type == 'fill' ? 
        { backgroundColor: props.color } :
        { borderColor: props.color, borderWidth: 1 }
      ]} onPress={props.onPress}>
      {
        props.image &&
        <Image 
          source={props.image}
          style={styles.image}
        />
      }
      <Text style={[styles.label, props.styleLabel]}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(83.5),
    height: undefined,
    aspectRatio: 313/46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  label: {
    fontSize: Dimens.FONT_SIZE_19,
    fontFamily: Fonts.poppinsRegular
  },
  image: {
    width: widthPercentage(6),
    height: undefined,
    aspectRatio: 1/1,
    marginRight: 10
  }
})