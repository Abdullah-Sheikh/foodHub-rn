import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import textStyles from '../../utils/textStyles'

export default function SideBarItem({label , image}) {

    

   

   
  return (
    <TouchableOpacity style={styles.container}>
        
        <Image
        source={image}
        style={styles.image}/>
        <Text style={[textStyles.h4, styles.text]}>{label}</Text>
     
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:30,

    },
    image:{
        width:17.5,
        height:17.5,


    },
    text:{
        marginLeft:20,

    }
})