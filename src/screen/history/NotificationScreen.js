import React from 'react';
import { View, FlatList, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardHistory } from '../../components/Card';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function NotificationScreen(props){

  // status 0 pending - 1 success - 2 failed
  const dataNotif = [
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
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <HeaderNav 
        title={'Notifikasi'}
        themes={'dark'}
      />
      <FlatList 
        data={dataNotif}
        style={styles.flatlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
          return(
            <CardHistory 
              date={item.date}
              status={item.status}
              price={currencyFormat(item.price)}
              packageName={item.name}
              onPress={()=>props.navigation.navigate('HistoryDetailStack', {screen: 'HistoryDetailScreen', params: item})}
              isNotif={true}
            />
          )
        }}
        ItemSeparatorComponent={()=>{
          return(
            <View style={styles.lineSeparator}/>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  flatlist: {
    marginTop: heightPercentage(5)
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