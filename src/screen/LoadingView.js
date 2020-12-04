import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../base';
import { widthPercentage, heightPercentage } from '../helper/dimension';

const LoadingView = () => {
  const appReducer = useSelector(state => state.app);
  if(appReducer.isLoading){
    return(
      <View style={styles.rootContainer}>
        <ActivityIndicator size="large" color={Colors.bluePrimary} />
      </View>
    )
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: heightPercentage(100),
    width: widthPercentage(100)
  }
})

export default LoadingView;