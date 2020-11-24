import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../helper/dimension';

export default function CardPromo(props){
  return(
    <TouchableOpacity style={styles.rootContainer} onPress={props.onPress}>
      <Image 
        source={{ uri: props.image }}
        style={styles.image}
        resizeMode={'cover'}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    width: widthPercentage(88),
    height: undefined,
    aspectRatio: 329/100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(1),
    marginBottom: heightPercentage(1)
  },
  image: {
    width: '100%',
    height: '100%'
  }
})