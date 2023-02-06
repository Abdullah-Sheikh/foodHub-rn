import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import FoodItem from './FoodItem'

export default function FoodItemList() {

const renderItem = () => {
    return(
        <FoodItem/>
    )
}
  return (
    <View>
        <FlatList
        style={styles.root}
        data={[
            {key:'1'},
            {key:'2'},
            {key:'3'},
            {key:'4'},
            {key:'5'},
        ]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        />
   
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        marginBottom:120,
    }
})