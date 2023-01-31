import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';

export default function RestaurantProperty({image , text}) {
  return (
    <View style={styles.root}>
        <Image
        style={styles.image}
        source={image}/>
      <Text style={[textStyles.h6,styles.text]}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({


    root:{
        flexDirection:'row',
        alignContent:'center'
        

    },
    image:{
        width:16,
        height:16,
        marginTop:2,
        marginRight:5,
       


    },

    text:{
       textAlign:"center",
        color:"#7E8392",
        marginRight:5,

    }



});