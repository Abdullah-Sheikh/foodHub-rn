import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/colors';
import Header from '../components/UI/Header';
import ComponentSelectionBtn from '../components/UI/ComponentSelectionBtn';
import List from '../components/Order/Upcoming/List';
import HistoryList from '../components/Order/History/List'

export default function MyOrders() {

    const [active , setActive] = useState(true);

    function handler ()
    {
         if (active){
            setActive(false);
         }
         else{
            setActive(true);
         }
    }
  return (
    <SafeAreaView style={styles.root}>

     <Header label="My Orders" image={true}/>

     <ComponentSelectionBtn  label1="Upcoming" label2="History"  handler={handler}/>

    { active ? 
     <List/>
     : 
     <HistoryList/>
     }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root:{
       
        backgroundColor: Colors.white,
        flex:1,

    }

});