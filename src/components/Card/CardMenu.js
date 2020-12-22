import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Dimens, Fonts } from '../../base';
import { VIcon } from '../Icon';
import { widthPercentage } from '../../helper/dimension';

export default function CardMenu(){

  const navigation = useNavigation();

  return(
    <View style={styles.rootContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('PackageStack', {screen: 'SelectPackageScreen', params: {type: 1}})} style={styles.menuContainer}>
        <VIcon
          type={'MaterialIcons'}
          name={'phone-android'}
          size={Dimens.FONT_SIZE_30}
          color={Colors.bluePrimary}
        />
        <View style={styles.badgeRp}>
          <Text style={styles.textBadge}>{'Rp'}</Text>
        </View>
        <Text style={styles.menuName}>{'Pulsa'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('PackageStack', {screen: 'SelectPackageScreen', params: {type: 2}})} style={styles.menuContainer}>
        {/* <VIcon
          type={'MaterialIcons'}
          name={'signal-wifi-4-bar'}
          size={Dimens.FONT_SIZE_30}
          color={Colors.bluePrimary}
        />
        <View style={styles.badgeGB}>
          <Text style={styles.textBadge}>{'GB'}</Text>
        </View> */}
        <Image 
          source={require('../../assets/images/icon-data.png')}
          style={styles.iconData}
          resizeMode='contain'
        />
        <Text style={styles.menuName}>{'Paket Data'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/76,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  menuContainer: {
    width: widthPercentage(20),
    height: undefined,
    aspectRatio: 1/1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: widthPercentage(5)
  },
  menuName: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.grayInactiveTab
  },
  badgeRp: {
    width: widthPercentage(4),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(5),
    position: 'absolute',
    top: '12%',
    right: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellowPrimary,
  },
  badgeGB: {
    width: widthPercentage(4),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(5),
    position: 'absolute',
    top: '30%',
    right: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellowPrimary,
  },
  textBadge: {
    color: Colors.blueTextBadge,
    fontSize: Dimens.FONT_SIZE_7,
    fontFamily: Fonts.poppinsRegular,
    textAlign: 'center'
  },
  overlayWifi: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconData: {
    width: widthPercentage(8.5),
    height: undefined,
    aspectRatio: 1/1
  }
})