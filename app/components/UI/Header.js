import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import BackBtn from './BackBtn'
import textStyles from '../../utils/textStyles'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export default function Header({image}) {
  return (
    <View style={styles.root}>
        <BackBtn/>
        <Text style={[ textStyles.h4,styles.text]}>add new address</Text>
        { image ?  <Image
        style={styles.image}
        source={require('../../assets/images/profileImg.png')}/>
        : null
       }
     
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        
        paddingHorizontal:20,
        paddingVertical:10,
    },
    text:{
    
      marginHorizontal:widthPercentageToDP("16%"),

    },
    image:{
        borderRadius:14,
        width:42,
        height:42,
    }
})