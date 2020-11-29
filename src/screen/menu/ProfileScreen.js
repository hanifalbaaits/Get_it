import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VIcon } from '../../components/Icon';
import { HeaderImageLogoBG } from '../../components/Header';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function ProfileScreen(props){

  const ListItemIcon = ({iconName, value, onPress, style, isLogout}) => {
    return(
      <TouchableOpacity style={[styles.listContainer, style]} onPress={onPress} disabled={onPress ? false : true}>
        <VIcon
          type={'MaterialIcons'}
          name={iconName}
          size={Dimens.FONT_SIZE_18}
          color={isLogout ? Colors.redAlert : Colors.blackTextProfileName}
        />
        <Text style={[styles.listTextValue, isLogout && { color: Colors.redAlert }]}>{value}</Text>
      </TouchableOpacity>
    )
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <View style={styles.topContainer}>
        <View style={styles.circleContainer}>
          <VIcon
            type={'MaterialIcons'}
            name={'person'}
            size={Dimens.FONT_SIZE_40}
            color={Colors.bluePrimary}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.textName}>Aldi Abdul Aziz</Text>
          <Text style={styles.textUsername}>aldiabdul.a</Text>
        </View>
      </View>
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={styles.bottomSheet}>
        <Text style={styles.subHeader}>Akun Profil</Text>
        <ListItemIcon 
          iconName={'call'}
          value={'0812 2240 0021'}
        />
        <ListItemIcon 
          iconName={'email'}
          value={'aldiabdulaziz204@gmail.com'}
        />
        <View style={styles.lineSeparator}/>
        <Text style={styles.subHeader}>Pengaturan</Text>
        <ListItemIcon 
          iconName={'person'}
          value={'Ubah Profil'}
        />
        <ListItemIcon 
          iconName={'lock'}
          value={'Ganti Kata Sandi'}
          onPress={()=>props.navigation.navigate('ProfileDetailStack', {screen: 'ChangePasswordScreen'})}
        />
        <View style={[styles.lineSeparator, { marginTop: heightPercentage(1) }]}/>
        <ListItemIcon 
          iconName={'power-settings-new'}
          value={'Keluar'}
          isLogout={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.bluePrimary
  },
  imageWave: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  },
  topContainer: {
    width: widthPercentage(100),
    height: heightPercentage(29.5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleContainer: {
    width: '20%',
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(20),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    width: widthPercentage(56.5),
    height: undefined,
    aspectRatio: 212/76,
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthPercentage(5)
  },
  textName: {
    fontFamily: Fonts.poppinsBold,
    fontSize: Dimens.FONT_SIZE_22,
    color: Colors.blackTextProfileName
  },
  textUsername: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.bluePrimary
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(54),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  subHeader: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_18,
    color: Colors.bluePrimary,
    width: widthPercentage(85),
    textAlign: 'left'
  },
  listContainer: {
    width: widthPercentage(85),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPercentage(1)
  },
  listTextValue: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.blackTextProfileName,
    marginLeft: widthPercentage(5)
  },
  lineSeparator: {
    width: widthPercentage(85),
    height: heightPercentage(2),
    borderBottomColor: Colors.grayText3,
    borderBottomWidth: 1,
    marginBottom: heightPercentage(2)
  }
})