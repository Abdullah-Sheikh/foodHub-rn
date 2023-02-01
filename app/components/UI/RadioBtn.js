import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors';

export default function RadioBtn( {active , onPress}) {
  return (

    <TouchableOpacity 
    onPress={onPress}
    style={styles.outerContainer}>
        {
          active ?
            <View style={styles.innerContainer}/>
            : null
        }
      </TouchableOpacity >
  )
}


const styles = StyleSheet.create({

    outerContainer:{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    innerContainer:{

        height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: Colors.primary80,

    }


});