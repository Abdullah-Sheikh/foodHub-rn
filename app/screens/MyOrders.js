import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/colors';
import Header from '../components/UI/Header';
import ComponentSelectionBtn from '../components/UI/ComponentSelectionBtn';
import List from '../components/Order/Upcoming/List';
import HistoryList from '../components/Order/History/List'
import textStyles from '../utils/textStyles';
import { ScrollView } from 'react-native-virtualized-view';
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

     <ScrollView>

    { active ? 
    <>
     <List/>
     <Text style={[textStyles.h4, styles.latestOrder]}>Lasted Orders</Text>
     </>
     : 
     null
     }
     <HistoryList/>

     </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root:{
       
        backgroundColor: Colors.white,
        flex:1,

    },

    latestOrder:{
      marginLeft:20,
      marginVertical:10,

    }

});