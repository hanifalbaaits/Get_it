import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG } from '../../components/Header';
import { CardPromo } from '../../components/Card';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function PromoScreen(){

  const dataPromo = [
    {
      id: 1,
      title: 'Promo 1',
      image: 'https://tri.co.id/image/files/20201012WebsiteMochanOffline3GBdesktop.jpg'
    },
    {
      id: 2,
      title: 'Promo 1',
      image: 'https://assets.indosatooredoo.com/Assets/Upload/01%20Personal/Promo/Bank/BCA/210420/07_BCA%20BAHASA.jpg'
    },
    {
      id: 3,
      title: 'Promo 1',
      image: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/02/11101745/selasa-diskon-pulsa-landing-page.jpg'
    },
    {
      id: 4,
      title: 'Promo 1',
      image: 'https://lelogama.go-jek.com/post_thumbnail/GOPAY-PROMO.jpg'
    },
    {
      id: 5,
      title: 'Promo 1',
      image: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/07/21151924/Airtime-x-Transport-Collab-July_landingpage.jpg'
    }
  ]

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <Text style={styles.title}>Promo</Text>
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={styles.bottomSheet}>
        <FlatList 
          style={{ width: widthPercentage(100) }}
          contentContainerStyle={{alignItems: 'center', paddingTop: 10 }}
          data={dataPromo}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return(
              <CardPromo 
                title={item.title}
                image={item.image}
              />
            )
          }}
          ItemSeparatorComponent={()=>{
            return(
              <View style={{ height: heightPercentage(1)}}/>
            )
          }}
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
  title: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_20,
    color: Colors.white,
    width: widthPercentage(85),
    textAlign: 'left'
  },
  imageWave: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55,
    position: 'absolute',
    bottom: heightPercentage(76)
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(80),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: heightPercentage(8)
  },
})