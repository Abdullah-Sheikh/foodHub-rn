import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function WishListBtn( {active , style}) {
  return (
    <View style={[styles.container , style]} >
        <Ionicons  name="heart" color="#ffffff" size={16}/>
     
    </View>
  )
}

const styles = StyleSheet.create({container:{
    width:32,
    height:32,
    borderRadius:50,
    backgroundColor: Colors.primary,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'


}

})