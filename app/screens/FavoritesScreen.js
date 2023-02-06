import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/colors';
import Header from '../components/UI/Header';
import ComponentSelectionBtn from '../components/UI/ComponentSelectionBtn';
import FoodItemList from '../components/Favorites/FoodItemList';

export default function FavoritesScreen() {
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
    <SafeAreaView style={styles.root} >
      <Header image={true}  label="Favorites"/>
      <ComponentSelectionBtn  label1="FoodItems" label2="Resturents"  handler={handler}/>


  { 
  active ? 
  <FoodItemList/>
   : null}
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    root:{
        backgroundColor:Colors.white,
        flex:1,

    }

});