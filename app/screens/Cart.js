import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/UI/Header'
import CartItem from '../components/Cart/CartItem'

export default function Cart() {

  const renderItem = ({item}) =>{
    return(
      <CartItem/>
    )

  }
  return (
    <SafeAreaView style={styles.root}>
      <Header label="cart"/>

      <FlatList
      data={[
        {key: '1',},
        {key:'2'}
      ]}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      />



    
     

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  root:{
    backgroundColor: '#ffffff',
    flex:1,
  }
})