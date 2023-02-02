import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import textStyles from '../../utils/textStyles'
import Colors from '../../utils/colors'

export default function ChargesAttribute({title , price}) {
  return (
    <>
    <View style={styles.container}>
        <Text style={[textStyles.h4, styles.title]}>{title}</Text>
        <Text style={[textStyles.h4, styles.price]}>${price} <Text style={[textStyles.h6 ,styles.curreny]}>USD</Text></Text>
     
    </View>
    <View style={styles.bottomBorder}/>
    </>
  )
}


const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        display:'flex',
        marginHorizontal:20,

    },
    title:{
        flex:1

    },
    price:{
        flex:1,
        alignSelf:'flex-end',
        textAlign:'right'

    },
    curreny:{
        color:Colors.gray80

    },
    bottomBorder:{
        height:1,
        marginVertical:10,
        backgroundColor:Colors.gray20,
        marginHorizontal:20,
    }


})