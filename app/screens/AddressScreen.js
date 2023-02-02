import { View, Text, StyleSheet, SafeAreaView , Alert} from 'react-native'
import React from 'react'
import Header from '../components/UI/Header';
import Input from '../components/UI/Input';
import PrimaryBtn from '../components/UI/PrimaryBtn';
import { ScrollView } from 'react-native-gesture-handler';

export default function AddressScreen() {
  return (
    <View style={styles.root}>
        <SafeAreaView>
            
            <Header label="add new Address"/>
            <ScrollView>

            <Input 
                label="Full Name" 
                placeholder="your full name"
                keyboardType="default"
               />

            <Input 
                label="Mobile Number" 
                placeholder="your mobile number"
                keyboardType="default"
               />

            <Input 
                label="State" 
                placeholder="your current state"
                keyboardType="default"
               /> 

            <Input 
                label="City" 
                placeholder="your current city"
                keyboardType="default"
               />  

            <Input 
                label="Street (Include house number)" 
                placeholder="Street"
                keyboardType="default"
               />   


               <PrimaryBtn
               onPress={() => { Alert.alert("Coming soon")}}
               label="SAVE"
               />      

            
</ScrollView>

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