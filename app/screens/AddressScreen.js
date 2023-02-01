import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/UI/Header';

export default function AddressScreen() {
  return (
    <View style={styles.root}>
        <SafeAreaView>
            <Header/>
      

        </SafeAreaView>
     
    </View>
  )
}

const styles = StyleSheet.create({

    root:{
        backgroundColor:'#ffffff',
        flex:1,

    },


});