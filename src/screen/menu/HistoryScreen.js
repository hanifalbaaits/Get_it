import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import moment from 'moment-with-locales-es6';
import { HeaderImageLogoBG } from '../../components/Header';
import { CardHistory } from '../../components/Card';
import { Colors, Fonts, Dimens } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function HistoryScreen(props){

  const historyReducer = useSelector(state => state.history);
  const [selectedHistory, setSelectedHistory] = useState('transaction');

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      {/* <Text style={styles.title}>Riwayat</Text> */}
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={[styles.bottomSheet, selectedHistory == 'transaction' ? {borderTopLeftRadius: 0} : {borderTopLeftRadius: 0}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -heightPercentage(5), left: 0}}>
          <TouchableOpacity style={{
            width: widthPercentage(30),
            height: heightPercentage(5),
            backgroundColor: selectedHistory == 'transaction' ? Colors.white : Colors.blueBlurInactiveTab,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17
          }}
          onPress={()=>setSelectedHistory('transaction')}>
            <Text style={{ fontFamily: Fonts.poppinsRegular, fontSize: Dimens.FONT_SIZE_17, color: Colors.blackTextPackage, opacity: selectedHistory == 'transaction' ? 1 : 0.4}}>Transaksi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: widthPercentage(30),
            height: heightPercentage(5),
            backgroundColor: selectedHistory == 'deposit' ? Colors.white : Colors.blueBlurInactiveTab,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17
          }}
          onPress={()=>setSelectedHistory('deposit')}>
            <Text style={{ fontFamily: Fonts.poppinsRegular, fontSize: Dimens.FONT_SIZE_17, color: Colors.blackTextPackage, opacity: selectedHistory == 'deposit' ? 1 : 0.4}}>Deposit</Text>
          </TouchableOpacity>
        </View>

        {
          selectedHistory == 'transaction' ?
          <FlatList 
            data={historyReducer.lastTransaction}
            keyExtractor={(item)=>item.children.filter(ar => ar.name == "No")[0].value}
            renderItem={({item, index}) => {
              return(
                <CardHistory 
                  date={moment(item.children.filter(ar => ar.name == "Date")[0].value).locale('id').format('DD MMMM YYYY')}
                  status={item.children.filter(ar => ar.name == "Status")[0].value}
                  price={currencyFormat(item.children.filter(ar => ar.name == "Price")[0].value)}
                  packageName={item.children.filter(ar => ar.name == "Product_x0020_Name")[0].value + ' '+item.children.filter(ar => ar.name == "Amount")[0].value}
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
          :
          <FlatList 
            data={historyReducer.lastTopup}
            keyExtractor={(item)=>item.children.filter(ar => ar.name == "DateTime")[0].value}
            renderItem={({item, index}) => {
              return(
                <CardHistory 
                  date={moment(item.children.filter(ar => ar.name == "DateTime")[0].value).locale('id').format('DD MMMM YYYY')}
                  status={'SUCCESS'}
                  price={currencyFormat(item.children.filter(ar => ar.name == "Value")[0].value)}
                  packageName={'ISI SALDO'}
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
        }
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