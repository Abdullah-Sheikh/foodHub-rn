import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import RadioBtn from '../RadioBtn';

export default function AddOnItem({name , price , image , active , onPress}) {
  return (
    <View style={styles.container}>
         <View style={{flex:1, flexDirection:'row' , justifyContent:'flex-start' ,  alignItems:'center'} }>
        <Image
        style={styles.image}
        source={image}/>
        <Text style={[textStyles.h6,styles.name]} >{name}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row' , justifyContent:'flex-end' ,alignItems:'center'} }>
        <Text style={[textStyles.h6,styles.price]} >+${price}</Text>    
        <RadioBtn active={active} onPress={onPress}/>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center'
    },
    image:{

        backgroundColor:'#ffffff'
    },
    name:{
        marginLeft:10,
        textAlignVertical:'center',
       
        

    },
    price:{
        marginRight:10,
        textAlignVertical:'center',
       
        

    }


});