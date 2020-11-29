import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG } from '../../components/Header';
import { CardHistory } from '../../components/Card';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function HistoryScreen(props){

  // status 0 pending - 1 success - 2 failed
  const dataHistory = [
    {
      id: 1,
      date: '19 November 2020',
      name: 'XL (Paket Data)',
      status: 2,
      price: 7250,
    },
    {
      id: 2,
      date: '19 November 2020',
      name: 'XL (Pulsa)',
      status: 1,
      price: 5850,
    },
    {
      id: 3,
      date: '18 November 2020',
      name: 'Isi Saldo',
      status: 0,
      price: 10000,
    }
  ]

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <Text style={styles.title}>Riwayat</Text>
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={styles.bottomSheet}>
        <FlatList 
          data={dataHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return(
              <CardHistory 
                date={item.date}
                status={item.status}
                price={currencyFormat(item.price)}
                packageName={item.name}
                onPress={()=>props.navigation.navigate('HistoryDetailStack', {screen: 'HistoryDetailScreen', params: item})}
              />
            )
          }}
          ItemSeparatorComponent={()=>{
            return(
              <View style={styles.lineSeparator}/>
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
    paddingTop: heightPercentage(3)
  },
  lineSeparator: {
    width: widthPercentage(85),
    height: heightPercentage(2),
    borderBottomColor: Colors.grayText3,
    borderBottomWidth: 1,
    marginBottom: heightPercentage(2)
  }
})