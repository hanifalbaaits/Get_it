import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { TextInputMask, MaskService } from 'react-native-masked-text'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderImageLogoBG, HeaderNav } from '../../components/Header';
import { CardTopup } from '../../components/Card';
import { Button } from '../../components/Button';
import { Colors, Dimens, Fonts } from '../../base';
import { widthPercentage, heightPercentage } from '../../helper/dimension';

export default function TopupScreen(props){

  const inputNominal = useRef();
  const [nominal, setNominal] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  useEffect(() => {
    if(nominal !== 0){
      if(inputNominal.current.getRawValue() >= 10000 && selectedBank !== null){
        setIsReady(true);
      } else {
        setIsReady(false);
      }
    }
  }, [nominal, selectedBank])

  function goNext(){
    if(isReady){
      props.navigation.navigate('UploadReceiptScreen');
    }
  }

  function bankSelect(bank){
    setSelectedBank(bank);
  }

  const dataTopup = [
    {
      id: 1,
      name: '10rb',
      nominal: 10000,
    },
    {
      id: 2,
      name: '20rb',
      nominal: 20000,
    },
    {
      id: 3,
      name: '50rb',
      nominal: 50000,
    },
    {
      id: 4,
      name: '100rb',
      nominal: 100000,
    },
    {
      id: 5,
      name: '200rb',
      nominal: 200000,
    },
    {
      id: 6,
      name: '300rb',
      nominal: 300000,
    }
  ]

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <HeaderNav 
        title={'Isi Saldo'}
      />
      <View style={styles.bottomSheet}>
        <Text style={styles.textPaymentMethod}>Masukkan Nominal</Text>
        <View>
          <TextInputMask
            type={'money'}
            options={{
              precision: 0,
              separator: ',',
              delimiter: '.',
              unit: 'Rp.',
              suffixUnit: ''
            }}
            value={nominal}
            onChangeText={text => {setNominal(text)}}
            style={[styles.input, nominal == 0 ? { opacity: 0.62 } : { opacity: 1 }]}
            ref={inputNominal}
          />
        </View>
        <Text style={styles.textMinimal}>* Minimal Rp. 10.000</Text>
        <View style={{width: '100%', height: '27%'}}>
          <FlatList 
            style={{ width: '100%' }}
            scrollEnabled={false}
            contentContainerStyle={{ alignItems: 'center', height: heightPercentage(10), paddingHorizontal: widthPercentage(7.5), paddingTop: 10 }}
            numColumns={3}
            data={dataTopup}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item, index})=>{
              return(
                <CardTopup 
                  name={item.name}
                  nominal={item.nominal}
                  selectedNominal={nominal !== 0 ? inputNominal.current.getRawValue() : nominal}
                  styleContainer={
                    index == 1 ? {marginHorizontal: widthPercentage(10.4)} : 
                    index == 4 ? {marginHorizontal: widthPercentage(10.4)} : 
                    {}
                  }
                  onPress={()=>{console.log(item.nominal); setNominal(MaskService.toMask('money', item.nominal, {
                    precision: 0,
                    separator: ',',
                    delimiter: '.',
                    unit: 'Rp.',
                    suffixUnit: ''
                  }))}}
                />
              )
            }}
            ItemSeparatorComponent={()=>{
              return(
                <View style={styles.separatorFlatlist}/>
              )
            }}
          />
        </View>
        <Text style={styles.textPaymentMethod}>Metode Pembayaran</Text>
        <View style={styles.bankWrapper}>
          <TouchableOpacity onPress={()=>bankSelect('BCA')} style={styles.buttonBank}>
            <Image 
              source={require('../../assets/images/logo-bca.png')}
              style={styles.logoBCA}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>bankSelect('MANDIRI')} style={styles.buttonBank}>
            <Image 
              source={require('../../assets/images/logo-mandiri.png')}
              style={styles.logoMandiri}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>bankSelect('BNI')} style={styles.buttonBank}>
            <Image 
              source={require('../../assets/images/logo-bni.png')}
              style={styles.logoBNI}
            />
          </TouchableOpacity>
        </View>
        {
          selectedBank !== null &&
          <View style={styles.bankDetail}>
            <ScrollView>
              <Text style={styles.titleBankDetail}>{`Cara pembayaran melalui ${selectedBank}`}</Text>
              <Text style={styles.contentBankDetail}>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</Text>
            </ScrollView>
          </View>
        }
      </View>
      <View style={styles.footerMenu}>
        <Button
          type={isReady ? 'fill' : 'outline'} 
          color={isReady ? Colors.yellowPrimary : Colors.grayOutlineButtonNext}
          styleContainer={styles.containerButtonNext}
          styleLabel={[styles.labelDefaultNextButton, isReady ? { color: Colors.white } : { color: Colors.grayOutlineButtonNext }]}
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
  separatorFlatlist: {
    width: 1,
    height: heightPercentage(1.7)
  },
  textPaymentMethod: {
    width: widthPercentage(85),
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_15,
    color: Colors.blackTextTopup,
    textAlign: 'left'
  },
  input: {
    borderBottomColor: Colors.grayText3,
    borderBottomWidth: 1,
    textAlignVertical: 'top',
    height: 50,
    width: widthPercentage(85),
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: Dimens.FONT_SIZE_19,
    color: Colors.blackTextTopup,
  },
  textMinimal: {
    width: widthPercentage(85),
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_11,
    color: Colors.blackTextTopup,
    textAlign: 'left',
    marginTop: heightPercentage(1)
  },
  bankWrapper: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonBank: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthPercentage(5)
  },
  logoBCA: {
    width: widthPercentage(28.5),
    height: undefined,
    aspectRatio: 1/1,
    marginTop: '-20%'
  },
  logoMandiri: {
    width: widthPercentage(20),
    height: undefined,
    aspectRatio: 99/29,
    marginTop: '-20%'
  },
  logoBNI: {
    width: widthPercentage(20),
    height: undefined,
    aspectRatio: 82/27,
    marginTop: '-15%'
  },
  bankDetail: {
    width: widthPercentage(85),
    paddingHorizontal: '5%',
    height: undefined,
    aspectRatio: 316/310,
    backgroundColor: Colors.white,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleBankDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_12,
    color: Colors.blackTextTopup,
    marginTop: '7%'
  },
  contentBankDetail: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_10,
    color: Colors.grayInactiveTab,
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(90),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
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