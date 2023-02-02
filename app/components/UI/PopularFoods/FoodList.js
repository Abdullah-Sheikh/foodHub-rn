import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import FoodItem from './FoodItem';

export default function FoodList() {

  const renderItem = ({item}) =>{

    return(
      <FoodItem/>

    )
  }
  return (
    <View style={styles.root}>
        <Text style={[textStyles.h4,styles.header]} >Popular Items </Text>

        <FlatList
        data={[
          {key:'1'},
          {key:'2'},
          {key:'3'},
        ]}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.key}
        />



      
     
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