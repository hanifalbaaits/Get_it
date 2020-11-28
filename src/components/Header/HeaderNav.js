import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VIcon } from '../Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';

export default function HeaderNav({title}){

  const navigation = useNavigation();

  return(
    <View style={styles.rootContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <VIcon
          type={'MaterialIcons'}
          name={'arrow-back'}
          size={Dimens.FONT_SIZE_24}
          color={Colors.white}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(100),
    height: heightPercentage(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: widthPercentage(7.5)
  },
  title: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_20,
    color: Colors.white,
    marginLeft: widthPercentage(4.5)
  }
})