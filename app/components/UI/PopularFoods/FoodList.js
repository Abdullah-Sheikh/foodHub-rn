import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import FoodItem from './FoodItem';

export default function FoodList() {
  return (
    <View style={styles.root}>
        <Text style={[textStyles.h4,styles.header]} >Popular Items </Text>

        

        <FoodItem/>
     
    </View>
  )
}


const styles = StyleSheet.create({

    root:{
        marginTop:5,
        marginBottom:100

    },

    header:{



    }


});