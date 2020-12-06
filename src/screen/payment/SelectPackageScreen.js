import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardInputNumber, CardSelectPackage } from '../../components/Card';
import { Button } from '../../components/Button';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';
import { currencyFormat } from '../../helper/format';

export default function SelectPackageScreen(props){

  const productReducer = useSelector(state => state.product);
  const [title, setTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    let titleTmp;
    if(props.route.params.type == 1){
      titleTmp = 'Pulsa';
    } else if(props.route.params.type == 2){
      titleTmp = 'Paket Data';
    } else {
      titleTmp = '';
    }
    setTitle(titleTmp);
  }, [])

  function onSelectPackage(id){
    setSelectedPackage(id);
  }

  function goNext(){
    if(selectedPackage !== null){
      let packageSelect;
      if(props.route.params.type == 1){
        packageSelect = productReducer.product.filter(ar => ar.children.some(ch => ch.value === selectedPackage))[0];
      } else if(props.route.params.type == 2){
        packageSelect = dataInternet.filter(ar => ar.id == selectedPackage)[0];
      }
      props.navigation.navigate('PaymentMethodScreen', 
        {packageSelect, phoneNumber, type: props.route.params.type});
    }
  }

  const dataPulsa = [
    {
      id: 1,
      name: '5.000',
      price: 5650,
      period: 'Menambahkan Masa Aktif 7 Hari'
    },
    {
      id: 2,
      name: '10.000',
      price: 10850,
      period: 'Menambahkan Masa Aktif 15 Hari'
    },
    {
      id: 3,
      name: '20.000',
      price: 20450,
      period: 'Menambahkan Masa Aktif 30 Hari'
    },
    {
      id: 4,
      name: '50.000',
      price: 49450,
      period: 'Menambahkan Masa Aktif 45 Hari'
    },
    {
      id: 5,
      name: '100.000',
      price: 97450,
      period: 'Menambahkan Masa Aktif 60 Hari'
    },
    {
      id: 6,
      name: '150.000',
      price: 146700,
      period: 'Menambahkan Masa Aktif 75 Hari'
    },
    {
      id: 7,
      name: '200.000',
      price: 194650,
      period: 'Menambahkan Masa Aktif 80 Hari'
    }
  ]

  const dataInternet = [
    {
      id: 1,
      name: '500 MB',
      price: 7250,
      period: 'Menambahkan Masa Aktif 7 Hari'
    },
    {
      id: 2,
      name: '1 GB',
      price: 10850,
      period: 'Menambahkan Masa Aktif 15 Hari'
    },
    {
      id: 3,
      name: '3 GB',
      price: 30450,
      period: 'Menambahkan Masa Aktif 30 Hari'
    },
    {
      id: 4,
      name: '5 GB',
      price: 50850,
      period: 'Menambahkan Masa Aktif 45 Hari'
    },
    {
      id: 5,
      name: '10 GB',
      price: 98450,
      period: 'Menambahkan Masa Aktif 60 Hari'
    },
    {
      id: 6,
      name: '13 GB',
      price: 128700,
      period: 'Menambahkan Masa Aktif 75 Hari'
    },
    {
      id: 7,
      name: '25 GB',
      price: 194650,
      period: 'Menambahkan Masa Aktif 80 Hari'
    }
  ]


  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <HeaderNav 
        title={props.route.params.type == 1 ? 'Pulsa' : props.route.params.type == 2 ? 'Paket Data' : ''}
      />
      <View style={styles.bottomSheet}>
        <CardInputNumber 
          styleContainer={styles.cardInput}
          value={phoneNumber}
          onChangeText={(val)=>setPhoneNumber(val)}
        />
        <View style={styles.cardContent}>
          <View style={styles.headerCardContent}>
            <View style={styles.imageCircleContainer}>
              <Image 
                source={require('../../assets/images/logo-xl.png')}
                style={styles.imageLogoXLCircle}
              />
            </View>
            <Text style={styles.titleCardContent}>{title}</Text>
          </View>
          <View style={{width: '100%', height: '85%'}}>
            <FlatList 
              style={{ width: '100%', flex: 1 }}
              contentContainerStyle={{ alignItems: 'center', paddingHorizontal: widthPercentage(7.5), paddingTop: 10, paddingBottom: heightPercentage(15) }}
              data={props.route.params.type == 1 ? productReducer.product : props.route.params.type == 2 ? dataInternet : []}
              keyExtractor={(item)=>item.children.filter(ar => ar.name == "barcode")[0].value}
              renderItem={({item, index})=>{
                return(
                  <CardSelectPackage 
                    id={item.children.filter(ar => ar.name == "barcode")[0].value}
                    packageName={currencyFormat(item.children.filter(ar => ar.name == "amount")[0].value)}
                    packageDuration={null}
                    packagePrice={item.children.filter(ar => ar.name == "price")[0].value}
                    onPress={()=>onSelectPackage(item.children.filter(ar => ar.name == "barcode")[0].value)}
                    selectedId={selectedPackage}
                  />
                )
              }}
              ItemSeparatorComponent={()=>{
                return(
                  <View style={styles.separatorContent}/>
                )
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerMenu}>
        <Button
          type={selectedPackage == null || phoneNumber == '' ? 'outline' : 'fill'} 
          color={selectedPackage == null || phoneNumber == '' ? Colors.grayOutlineButtonNext : Colors.yellowPrimary}
          styleContainer={styles.containerButtonNext}
          styleLabel={[styles.labelDefaultNextButton, selectedPackage !== null && phoneNumber !== '' ? { color: Colors.white } : {}]}
          label="Lanjutkan"
          onPress={()=>goNext()}
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
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(85),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  cardInput: {
    marginTop: '-18%'
  },
  cardContent: {
    width: widthPercentage(85),
    height: '80%',
    borderRadius: 15,
    backgroundColor: Colors.white,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 9
  },
  headerCardContent: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '12%',
    backgroundColor: Colors.blueHeaderCardPackageContent,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '6.7%'
  },
  imageCircleContainer: {
    width: '10%',
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(20),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogoXLCircle: {
    width: '60%',
    height: undefined,
    aspectRatio: 34/27
  },
  titleCardContent: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_20,
    color: Colors.white,
    marginLeft: widthPercentage(5)
  },
  flatlist: {
    paddingTop: heightPercentage(2),
    height: heightPercentage(100),
    paddingBottom: heightPercentage(10)
  },
  separatorContent: {
    width: '100%',
    height: '5%'
  },
  footerMenu: {
    width: widthPercentage(100),
    backgroundColor: Colors.white,
    height: undefined,
    aspectRatio: 375/64,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButtonNext: {
    aspectRatio: 329/39
  },
  labelDefaultNextButton: {
    fontSize: Dimens.FONT_SIZE_16,
    color: Colors.grayOutlineButtonNext
  }
})