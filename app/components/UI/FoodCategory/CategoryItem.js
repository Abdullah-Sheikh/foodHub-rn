import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../utils/colors'
import textStyles from '../../../utils/textStyles'

export default function CategoryItem({item , image , onPress ,styleSelected}) {
   
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root ,  styleSelected === true ? {backgroundColor:Colors.primary}: { backgroundColor:'#ffffff'} ]}>
        <Image
        style={styles.image}
       
        source={image}/>
        <Text style={[ textStyles.h ,styles.textActive ,styleSelected === true ? {color:'#ffffff'} :{ color:'#000000',} ]}>{item.name}</Text>
     
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
    root:{
        width:65,
        height:105,
        marginHorizontal:5,
        borderRadius:50,
        alignItems:'center',
        elevation:10,
        backgroundColor:'#ffffff',
        flexDirection:'column',
        shadowColor: Colors.gray50,
        marginVertical:10,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        padding:5,
        marginRight:10,


    },
    image:{
        
        height:50,
        width:55,
        borderRadius:50,
        alignContent:'center'
    },
    textActive:{
        color:'#000000',
        marginTop:8,
    }
})