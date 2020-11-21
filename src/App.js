import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './screen/auth/LoginScreen';
import SignupScreen from './screen/auth/SignupScreen';

const headerShown = false;
const gestureEnabled = true;

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

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator
  screenOptions={{
    headerShown: headerShown,
    gestureEnabled: gestureEnabled,
    ...TransitionPresets.SlideFromRightIOS,
  }}>
    <RootStack.Screen name="Auth" component={AuthStackScreen}/>
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