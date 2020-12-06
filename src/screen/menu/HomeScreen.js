import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderImageLogoBG } from '../../components/Header';
import { CardBalance, CardMenu, CardPromo } from '../../components/Card';
import { VIcon } from '../../components/Icon';
import { Colors, Dimens, Fonts } from '../../base';
import { heightPercentage, widthPercentage } from '../../helper/dimension';
import * as profileAction from '../../redux/action/profileAction';
import * as productAction from '../../redux/action/productAction';

export default function HomeScreen(props){
  
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const profileReducer = useSelector(state => state.profile);
  const [modalAlert, setModalAlert] = useState({
    isVisible: false,
    type: 'changePassword'
  })
  const [modalConfirm, setModalConfirm] = useState({
    isVisible: false,
    onConfirm: ()=>null
  })

  const dataPromo = [
    {
      id: 1,
      image: 'https://tri.co.id/image/files/20201012WebsiteMochanOffline3GBdesktop.jpg'
    },
    {
      id: 2,
      image: 'https://assets.indosatooredoo.com/Assets/Upload/01%20Personal/Promo/Bank/BCA/210420/07_BCA%20BAHASA.jpg'
    },
    {
      id: 3,
      image: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/02/11101745/selasa-diskon-pulsa-landing-page.jpg'
    },
    {
      id: 4,
      image: 'https://lelogama.go-jek.com/post_thumbnail/GOPAY-PROMO.jpg'
    },
    {
      id: 5,
      image: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/07/21151924/Airtime-x-Transport-Collab-July_landingpage.jpg'
    }
  ]

  useEffect(() => {
    dispatch(profileAction.infoRequest({email: authReducer.credential?.email}));
    dispatch(profileAction.balanceRequest({email: authReducer.credential?.email}));
    dispatch(productAction.productRequest({email: authReducer.credential?.email}));
    dispatch(productAction.bannerRequest({email: authReducer.credential?.email}));
  }, [])

  function gotoNotif(){
    props.navigation.navigate('HistoryDetailStack', {screen: 'NotificationScreen'})
  }

  return(
    <SafeAreaView style={styles.rootContainer}>
      <HeaderImageLogoBG />
      <View style={styles.headerWrapper}>
        <Image 
          source={require('../../assets/images/logo-text-white.png')}
          style={styles.logoHeader}
        />
        <TouchableOpacity style={styles.iconNotifWrapper} onPress={()=>gotoNotif()}>
          <VIcon
            type={'MaterialIcons'}
            name={'notifications'}
            size={Dimens.FONT_SIZE_26}
            color={Colors.white}
          />
          {
            <View style={styles.iconBadges}/>
          }
        </TouchableOpacity>
      </View>
      <CardBalance 
        styleContainer={styles.cardBalance}
        balance={profileReducer.balance !== null ? profileReducer.balance : 0}
      />
      <Image 
        source={require('../../assets/images/line-wave-white-green.png')}
        style={styles.imageWave}
      />
      <View style={styles.bottomSheet}>
        <CardMenu />
        <FlatList 
          data={dataPromo}
          keyExtractor={item => item.id.toString()}
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={()=>{
            return(
              <Text style={styles.headerFlatlist}>Info & Promo</Text>
            )
          }}
          renderItem={({item})=>{
            return(
              <CardPromo 
                image={item.image}
              />
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentage(88),
    marginBottom: heightPercentage(3)
  },
  logoHeader: {
    width: widthPercentage(20),
    height: undefined,
    aspectRatio: 73/23
  },
  iconNotifWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBadges: {
    width: widthPercentage(3),
    height: undefined,
    aspectRatio: 1/1,
    borderRadius: widthPercentage(3),
    backgroundColor: Colors.yellowPrimary,
    position: 'absolute',
    left: 0,
    top: '5%'
  },
  cardBalance: {
    zIndex: 1,
    marginBottom: heightPercentage(1)
  },
  imageWave: {
    width: widthPercentage(110),
    height: undefined,
    aspectRatio: 375/55
  },
  bottomSheet: {
    width: widthPercentage(100),
    height: heightPercentage(52),
    // aspectRatio: 375/440,
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    paddingTop: '7%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  flatlist: {
    marginTop: '4%'
  },
  headerFlatlist: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: Dimens.FONT_SIZE_14,
    color: Colors.blackTextPackage,
    marginBottom: '1%'
  }
})