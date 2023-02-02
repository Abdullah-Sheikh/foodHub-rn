import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/UI/Header'
import CartItem from '../components/Cart/CartItem'

export default function Cart() {
  return (
    <SafeAreaView style={styles.root}>
      <Header label="cart"/>

      <CartItem/>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  root:{
    backgroundColor: '#ffffff',
    flex:1,
  }
})