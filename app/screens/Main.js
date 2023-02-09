import { View, Text, StyleSheet , Platform, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/colors';
import textStyles from '../utils/textStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp, widthPercentageToDP , } from 'react-native-responsive-screen';
import IconInput from '../components/UI/IconInput';
import CategoryList from '../components/UI/FoodCategory/CategoryList';
import RestaurantsList from '../components/UI/FeaturedRestaurants/RestaurantsList';
import { ScrollView } from 'react-native-gesture-handler';
import FoodList from '../components/UI/PopularFoods/FoodList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({navigation}) {

  const [category , setCategory] = useState('burger');
  function OpenDrawer (){

    navigation.openDrawer();
  }


  function categoryHandler(category){
    setCategory(category)

  }

  

  

  return (
    <View style={styles.root} >
      <SafeAreaView>

      <View style={styles.headerContainer}>
        <Pressable onPress={OpenDrawer}>
        <View style={styles.optionBtn}>
          <Image  source={require('../assets/images/drawerOptions.png')}/>

        </View>

        </Pressable>


        <View style={styles.addressContainer}>
          <Text style={[textStyles.h4 , { color: Colors.gray , textAlign:'center' }]}>Deliver to <Ionicons name="chevron-down-outline" size={18} color={Colors.gray}/> </Text>
          <Text style={[textStyles.h4 , { color: Colors.primary , textAlign:'center' }]}>4102  Pretty View Lane  </Text>
         
        </View>

       <View  style={styles.profileImgContainer}>
       <Image  
       style={styles.profileImg}
       source={require('../assets/images/profileImg.png')}/>
       </View>


        <View>

        </View>
      </View>

      <ScrollView style={{}}>

      <Text style={[textStyles.h1 , {marginVertical:10, fontWeight:'700' , color:"#323643"}]}>{ `What would you like\nto order` }</Text>

       <View style={{ flexDirection:'row' , justifyContent:'space-between'}}>
      <IconInput placeholder="Find for food or restaurant..."/>
      <View style={styles.filterBtn}>
      <Image  source={require('../assets/images/filterIcon.png')}/>
      </View>
      </View >

      <CategoryList category={categoryHandler}/>

      <Text>{category}</Text>


      <RestaurantsList category={category}/>

      <FoodList/>


      </ScrollView>

      
      </SafeAreaView>


      
    </View>
  )
}


const styles= StyleSheet.create({

  root:{
    paddingTop: Platform.OS === 'ios' ? 0 : 12,
    paddingHorizontal:20,
   
    backgroundColor:"#ffffff",
    flex:1,
  },
  optionBtn:{
    width: widthPercentageToDP('10%'),
    marginRight: widthPercentageToDP('3.5%'),
    height:40,
    width:40,
    backgroundColor:"#ffffff",
   
   
    alignItems:'center',
    alignContent:'center',
    padding:11,
    borderRadius:9,
    justifyContent:'center',
    elevation:15,
    
    shadowColor: Colors.gray80,
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.5,
shadowRadius: 6,
  },

  headerContainer:{
    flexDirection:'row',
    alignContent:'center',
    
    marginTop:15,
    marginBottom:5,
   
  


  },

  addressContainer:{
    
    flexDirection:'column',
    width: widthPercentageToDP('60%')
  },

  
  profileImgContainer:{
    height:49,
    width:49,
    width: widthPercentageToDP('10%'),
    marginLeft: widthPercentageToDP('3.5%'),
   elevation:12,
   backgroundColor:"#fff",
   shadowColor: "yellow",
   shadowOffset: { width: 0, height: 0.5 },
   shadowOpacity: 0.7,
   shadowRadius: 4,

  },
  profileImg:{
    height:49,
    width:49,
    borderRadius:16,
  },
  filterBtn:{
    
    height:60,
    width:55,
    backgroundColor:"#ffffff",
    marginRight:5,
   
   
    alignItems:'center',
    alignContent:'center',
    padding:11,
    borderRadius:9,
    justifyContent:'center',
    elevation:12,
    
    shadowColor: Colors.gray80,
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.5,
shadowRadius: 4,
  }

  
  
})