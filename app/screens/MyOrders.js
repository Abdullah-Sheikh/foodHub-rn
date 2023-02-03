import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../utils/colors';
import Header from '../components/UI/Header';
import ComponentSelectionBtn from '../components/UI/ComponentSelectionBtn';
import List from '../components/Order/Upcoming/List';

export default function MyOrders() {
  return (
    <SafeAreaView style={styles.root}>

     <Header label="My Orders" image={true}/>

     <ComponentSelectionBtn  label1="Upcoming" label2="History"/>

     <List/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root:{
       
        backgroundColor: Colors.white,
        flex:1,

    }

});