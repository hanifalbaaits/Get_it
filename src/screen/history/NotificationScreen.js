import React from 'react';
import { View, FlatList, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import moment from 'moment-with-locales-es6';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardHistory } from '../../components/Card';
import { Colors } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function NotificationScreen(props){

  const historyReducer = useSelector(state => state.history);

  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <HeaderImageLogoBG themes="dark"/>
      <HeaderNav 
        title={'Notifikasi'}
        themes={'dark'}
      />
      <FlatList 
        data={historyReducer.lastTransaction}
        style={styles.flatlist}
        keyExtractor={(item)=>item.children.filter(ar => ar.name == "No")[0].value}
        renderItem={({item, index}) => {
          return(
            <CardHistory 
              date={moment(item.children.filter(ar => ar.name == "Date")[0].value).locale('id').format('DD MMMM YYYY')}
              status={item.children.filter(ar => ar.name == "Status")[0].value}
              price={currencyFormat(item.children.filter(ar => ar.name == "Price")[0].value)}
              packageName={item.children.filter(ar => ar.name == "Product_x0020_Name")[0].value + ' '+item.children.filter(ar => ar.name == "Amount")[0].value}
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