import { View, Text, StyleSheet , Platform, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../utils/colors';

export default function Main({navigation}) {
  function OpenDrawer (){

    navigation.navigate('Drawer');
  }

  return (
    <View style={styles.root} >
      <SafeAreaView>

      <View style={styles.headerContainer}>
        <View style={styles.optionBtn}>

        </View>
      </View>
      </SafeAreaView>
      
    </View>
  )
}


const styles= StyleSheet.create({

  root:{
   
    backgroundColor:"#ffffff",
    flex:1,
  },
  optionBtn:{
    height:40,
    width:40,
    backgroundColor:"#ffffff",
    marginLeft:20,
   
    alignItems:'center',
    alignContent:'center',
    padding:11,
    borderRadius:9,
    elevation:3,
    shadowColor: Colors.gray80,
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.5,
shadowRadius: 6,
  },

  headerContainer:{
    flexDirection:'row',
    alignContent:'center',
    marginTop:15,


  }
})