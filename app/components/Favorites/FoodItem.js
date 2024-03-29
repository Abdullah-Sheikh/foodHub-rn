import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


import Icon5 from 'react-native-vector-icons/FontAwesome'

import { useNavigation } from '@react-navigation/native'
import textStyles from '../../utils/textStyles'
import Colors from '../../utils/colors'
import WishListBtn from '../UI/WishListBtn'


export default function FoodItem() {


  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => { navigation.navigate('FoodDescription')} }style={styles.container}>
      <ImageBackground
      source={require('../../assets/images/SalmonSalad.png')}
      style={styles.imageContainer}
      imageStyle={{borderRadius:15}}>
        <View  style={{flexDirection:'row' ,display:'flex'}}>

        <View style={styles.priceContainer}>
        <Text style={[textStyles.h3, styles.priceText]}><Icon5 name="dollar" size={8} color={Colors.primary}/>5.50</Text>
       
        </View >
        <View style={{flex:1}}></View>
        <WishListBtn style={styles.wishListBtn}/>
        </View>

        <View style={styles.ratingContainer}>
            <Text style={[textStyles.h, styles.ratingText]}>4.5 <Ionicons name="md-star" size={12} color="#FFC529"/>
            <Text style={{color:"#9796A1" ,fontSize:9 , textAlign:'center' ,textAlignVertical:'center'}}> (25+)</Text>
            </Text>

        </View>    

      </ImageBackground>

      <Text style={[textStyles.h4, styles.heading]}>Salmon Salad</Text>
      <Text style={[textStyles.h6, styles.subHeading]}>Baked salmon fish</Text>
     
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  container:{

    marginBottom:20,
    marginHorizontal:20,
    marginTop:10,
    marginRight:10,
    height:230,
    borderRadius:15,
    backgroundColor:'#ffffff',
    elevation:10,
    shadowColor:  Colors.gray20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  imageContainer:{

    height:150,
    paddingTop:8,
    paddingHorizontal:8,
    flexDirection:'column'
  },
  priceContainer:{
    backgroundColor:'#ffffff',
    borderRadius:20,
    
    alignItems:'center',
    justifyContent:'center'
    

  },
  priceText:{
    marginHorizontal:12,
    marginBottom:2,
    textAlign:'center',
   
    

  },
  wishListBtn:{
    alignSelf:'flex-end',
    alignContent:'flex-end',
    marginLeft:52
    
    


  },
  ratingContainer:{
    backgroundColor:'#ffffff',
    paddingVertical:4,
    width:70,
    maxWidth:75,
    borderRadius:30,
    alignSelf:'baseline',
    marginTop:95,
    elevation:4,
    shadowColor: Colors.primary,
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 4,
},

ratingText:{
    textAlign:'center',
    marginBottom:2,
},

heading:{
  marginHorizontal:8,
  marginTop:18,
  marginBottom:4,
  fontWeight:'600',
},
subHeading:{
  marginHorizontal:8,
  color:Colors.gray80,
  fontWeight:'100',

}
    
})