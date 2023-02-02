import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/UI/Header'
import CartItem from '../components/Cart/CartItem'
import PromoCode from '../components/UI/PromoCode'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import ChargesAttribute from '../components/UI/ChargesAttribute'
import PrimaryBtn from '../components/UI/PrimaryBtn'

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
      style={styles.list}
      data={[
        {key: '1',},
        {key:'2'},
      ]}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      />


      <PromoCode/>


      <View style={{marginBottom:heightPercentageToDP("8%")}}>


      <ChargesAttribute title="SubTotal" price="27.30"/>
      <ChargesAttribute title="Tax and Fees" price="5.30"/>
      <ChargesAttribute title="Delivery" price="1.00"/>
      <ChargesAttribute title="Total" price="33.60" items="2"/>

      </View>


      <PrimaryBtn label="Checkout"/>




    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  root:{
    backgroundColor: '#ffffff',
    flex:1,
  },
  list:{
    height:heightPercentageToDP("27.5%"),
    flexGrow:0
  }
})