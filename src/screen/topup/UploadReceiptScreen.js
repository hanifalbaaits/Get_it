import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG } from '../../components/Header';
import { Button } from '../../components/Button';
import { VIcon } from '../../components/Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';

export default function PaymentProcessScreen(props){

  const [imageReceipt, setImageReceipt] = useState(null);

  function onSelectImage(){
    let options = {
      mediaType: 'photo'
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if(response.uri !== undefined){
        setImageReceipt(response.uri);
      }
    });
  }

  function onDone(){
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'MenuTab'}]
    });
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
      <View style={styles.contentWrapper}>
        {
          imageReceipt == null ?
          <View style={styles.iconWrapper}>
            <VIcon
              type={'MaterialIcons'}
              name={'insert-drive-file'}
              size={widthPercentage(30)}
              color={Colors.white}
            />
            <View style={styles.uploadWrapper}>
              <VIcon
                type={'MaterialIcons'}
                name={'file-upload'}
                size={widthPercentage(6)}
                color={Colors.white}
              />
            </View>
          </View>
          :
          <Image 
            source={{ uri: imageReceipt}}
            style={{ width: widthPercentage(65), height: undefined, aspectRatio: 244/246, borderRadius: 15 }}
          />
        }
        <Text style={styles.textUploadReceipt}>{'Upload Bukti Pembayaran'}</Text>
        <Text style={styles.textUploadSubtitle}>{'upload bukti pembayaran kamu \n dalam waktu 1x24 jam'}</Text>
        <Button
          type={imageReceipt == null ? 'fill' : 'outline'} 
          color={imageReceipt == null ? Colors.yellowPrimary : Colors.white}
          styleContainer={styles.buttonDone}
          styleLabel={{color: Colors.white, marginLeft: widthPercentage(3) }}
          label={imageReceipt == null ? "Upload Bukti" : "Upload Ulang"}
          iconName="cloud-upload"
          iconColor={Colors.white}
          onPress={()=>onSelectImage()}
        />
        {
          imageReceipt !== null &&
          <Button
            type={'fill'} 
            color={Colors.yellowPrimary}
            styleContainer={[styles.buttonDone, {marginTop: heightPercentage(2.5)}]}
            styleLabel={{color: Colors.white}}
            label="Lanjutkan"
            onPress={()=>onDone()}
          />
        }
      </View>
      <HeaderImageLogoBG />
      <Image 
        source={require('../../assets/images/bottom-wave.png')}
        style={styles.bottomWave}
      />
      <Image 
        source={require('../../assets/images/line-wave-white.png')}
        style={styles.lineWave}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bluePrimary
  },
  contentWrapper: {
    alignItems: 'center'
  },
  iconWrapper: {
    alignItems: 'center'
  },
  uploadWrapper: {
    width: widthPercentage(10),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(10),
    backgroundColor: Colors.yellowPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    right: 0
  },
  textUploadReceipt: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_18,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: heightPercentage(1),
    marginTop: heightPercentage(3)
  },
  textUploadSubtitle: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_15,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: heightPercentage(4),
  },
  buttonDone: {
    width: widthPercentage(64),
    aspectRatio: 240/39
  },
  bottomWave: {
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 1/1,
    position: 'absolute',
    bottom: 0,
    zIndex: -1
  },
  lineWave: {
    position: 'absolute',
    bottom: 0,
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  }
})