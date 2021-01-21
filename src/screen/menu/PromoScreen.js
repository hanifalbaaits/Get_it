import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { HeaderImageLogoBG } from '../../components/Header';
import { CardPromo } from '../../components/Card';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function PromoScreen(){

  const productReducer = useSelector(state => state.product);

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
          data={productReducer.banner}
          keyExtractor={item => item.children.filter(ar => ar.name == "guid")[0].value}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return(
              <CardPromo 
                image={item.children.filter(ar => ar.name == "pathfile")[0].value}
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