import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen(){
  return(
    <View style={styles.rootContainer}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})