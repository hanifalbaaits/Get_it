import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VIcon } from './components/Icon';
import { Colors, Dimens, Fonts } from './base';

import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/auth/LoginScreen';
import SignupScreen from './screen/auth/SignupScreen';
import HomeScreen from './screen/menu/HomeScreen';
import HistoryScreen from './screen/menu/HistoryScreen';
import PromoScreen from './screen/menu/PromoScreen';
import ProfileScreen from './screen/menu/ProfileScreen';
import SelectPackageScreen from './screen/payment/SelectPackageScreen';
import PaymentMethodScreen from './screen/payment/PaymentMethodScreen';
import PaymentConfirmScreen from './screen/payment/PaymentConfirmScreen';
import PaymentProcessScreen from './screen/payment/PaymentProcessScreen';
import TopupScreen from './screen/topup/TopupScreen';
import UploadReceiptScreen from './screen/topup/UploadReceiptScreen';
import HistoryDetailScreen from './screen/history/HistoryDetailScreen';

const headerShown = false;
const gestureEnabled = true;

const PackageStack = createStackNavigator();
const PackageStackScreen = () => (
  <PackageStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <PackageStack.Screen name="SelectPackageScreen" component={SelectPackageScreen} />
    <PackageStack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
    <PackageStack.Screen name="PaymentConfirmScreen" component={PaymentConfirmScreen} />
    <PackageStack.Screen name="PaymentProcessScreen" component={PaymentProcessScreen} />
  </PackageStack.Navigator>
)

const TopupStack = createStackNavigator();
const TopupStackScreen = () => (
  <TopupStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <TopupStack.Screen name="TopupScreen" component={TopupScreen}/>
    <TopupStack.Screen name="UploadReceiptScreen" component={UploadReceiptScreen}/>
  </TopupStack.Navigator>
)

const HistoryDetailStack = createStackNavigator();
const HistoryDetailStackScreen = () => (
  <HistoryDetailStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <HistoryDetailStack.Screen name="HistoryDetailScreen" component={HistoryDetailScreen}/>
  </HistoryDetailStack.Navigator>
)

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
  </AuthStack.Navigator>
)

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => (
  <HomeStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
)

const HistoryStack = createStackNavigator();
const HistoryStackNavigator = () => (
  <HistoryStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <HistoryStack.Screen name="HistoryScreen" component={HistoryScreen} />
  </HistoryStack.Navigator>
)

const PromoStack = createStackNavigator();
const PromoStackNavigator = () => (
  <PromoStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <PromoStack.Screen name="PromoScreen" component={PromoScreen} />
  </PromoStack.Navigator>
)

const ProfileStack = createStackNavigator();
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
)

const Tabs = createBottomTabNavigator();
const TabsScreen = ({ navigation, route }) => {
  return(
    <Tabs.Navigator tabBarOptions={{
      activeTintColor: Colors.bluePrimary,
      inactiveTintColor: Colors.grayInactiveTab,
    }}>
      <Tabs.Screen 
        name={"Home"} 
        component={HomeStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <VIcon
              type={'MaterialIcons'}
              name={'home'}
              size={Dimens.FONT_SIZE_25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name={"History"} 
        component={HistoryStackNavigator} 
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({ color }) => (
            <VIcon
              type={'MaterialIcons'}
              name={'event-note'}
              size={Dimens.FONT_SIZE_25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name={"Promo"} 
        component={PromoStackNavigator} 
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({ color }) => (
            <VIcon
              type={'MaterialIcons'}
              name={'star'}
              size={Dimens.FONT_SIZE_25}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen 
        name={"Profile"} 
        component={ProfileStackNavigator} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <VIcon
              type={'MaterialIcons'}
              name={'person'}
              size={Dimens.FONT_SIZE_25}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <RootStack.Screen name="Splash" component={SplashScreen}/>
    <RootStack.Screen name="Auth" component={AuthStackScreen}/>
    <RootStack.Screen name="MenuTab" component={TabsScreen} /> 
    <RootStack.Screen name="PackageStack" component={PackageStackScreen} />
    <RootStack.Screen name="TopupStack" component={TopupStackScreen} />
    <RootStack.Screen name="HistoryStack" component={HistoryDetailStackScreen} />
  </RootStack.Navigator>
)

export default function App(){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}