import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { Fonts, Colors, Dimens } from '../../base';

export default function CardPromo({title, image, onPress}){

  const [showDetail, setShowDetail] = useState(false);

  const ImagePromo = ({styleImage}) => {
    return(
      <Image 
        source={{ uri: image }}
        style={[styles.image, styleImage]}
        resizeMode={'cover'}
      />
    )
  }

  if(title){
    if(showDetail){
      return(
        <View style={[styles.rootContainer, 
          { 
            aspectRatio: 329/285, 
            marginTop: 0, 
            marginBottom: 0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            elevation: 5,
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            justifyContent: 'flex-start',
            borderRadius: 10
          }
        ]}>
          <ImagePromo/>
          <View style={styles.contentDetail}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textMoreDetail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
          <Text style={styles.textCloseDetail} onPress={()=>setShowDetail(false)}>Tutup</Text>
        </View>
      )
    } else {
      return(
        <View style={[styles.rootContainer, { aspectRatio: 329/130, marginTop: 0, marginBottom: 0}]}>
          <View style={styles.headerWrapper}>
            <Text style={styles.textTitle}>{title}</Text>
            <TouchableOpacity onPress={()=>setShowDetail(!showDetail)}>
              <Text style={styles.textDetail}>Lihat Selengkapnya</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: '90%'}}>
            <ImagePromo />
          </View>
        </View>
      )
    }
  } else {
    return(
      <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
        <ImagePromo />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.white,
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(1),
    marginBottom: heightPercentage(1)
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  textTitle: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextPackage
  },
  textDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_9,
    color: Colors.bluePrimary
  },
  textMoreDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.black,
    width: '100%',
    height: undefined,
    aspectRatio: 310/135
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 329/100
  },
  contentDetail: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: '2%'
  },
  textCloseDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_9,
    color: Colors.bluePrimary,
    width: '90%',
    textAlign: 'right',
    position: 'absolute',
    bottom: '5%'
  }
})