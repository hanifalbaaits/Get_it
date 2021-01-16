import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { HeaderNav } from '../components/Header';
import { Colors } from '../base';
import { widthPercentage, heightPercentage } from '../helper/dimension';

export default function WebviewScreen(props) {
  return(
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle="dark-content"/>
      <HeaderNav 
        title={props.route.params.title}
        themes={'dark'}
      />
      <WebView
        source={{ uri: props.route.params.uri }}
        style={{ 
          marginTop: 20,
          width: widthPercentage(100),
          height: heightPercentage(80)
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.log('WebView error: ', nativeEvent);
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
  }
})