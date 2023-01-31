import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import Colors from '../../../utils/colors';

export default function Category({text}) {
  return (
    <View style={styles.container}> 
      <Text style={[textStyles.h,styles.text]}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    container:{
        marginTop:5,
        backgroundColor:Colors.gray20,
        paddingVertical:5,
        paddingHorizontal:5,
        marginRight:10,
        borderRadius:5,

    },
     text:{
        color:Colors.gray,
       


     },

});