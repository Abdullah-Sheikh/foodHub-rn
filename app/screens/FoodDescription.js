import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Platform, Image } from 'react-native'
import React from 'react'
import BackBtn from '../components/UI/BackBtn'
import WishListBtn from '../components/UI/WishListBtn'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/FontAwesome'

import textStyles from '../utils/textStyles'
import Colors from '../utils/colors'
import SetQuantity from '../components/UI/SetQuantity'
import AddOnList from '../components/UI/AddOn/AddOnList'

export default function FoodDescription() {
  return (
    <SafeAreaView style={styles.root}>
        <View style={{marginTop:20, marginHorizontal:20,}}>

        
        <ImageBackground 
        style={styles.foodImage}
        imageStyle={{borderRadius:10}}
        source={require('../assets/images/foodPic1.png')}>

           <BackBtn/>

           <WishListBtn  active={true} style={{marginLeft: widthPercentageToDP("66%")}}/>

        </ImageBackground>


        <Text style={textStyles.h2}>Ground Beef Tacos</Text>

        <Text style={[textStyles.h6 , styles.ratingText]}><Ionicons name="star" size={16} color="#FFC529"/> 4.5  
        <Text style={{color:"#9796A1"}}>  (30+) </Text>
        <TouchableOpacity><Text style={{color:Colors.primary, fontWeight:'300' ,textDecorationLine:'underline'}}> See Review</Text></TouchableOpacity>
        </Text>

         <View  style={styles.priceContainer}>
        <Text style={[textStyles.h1 , {color:Colors.primary }] }><Icon5 name="dollar" size={18} color={Colors.primary}/>9.50</Text>
        <SetQuantity />
        </View>

        <Text style={[ textStyles.h5,styles.descriptionText  ]}>Brown the beef better. Lean ground beef  I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>
        

        <AddOnList/>


        <View style={styles.viewBtn}>
  <TouchableOpacity style={styles.btn} onPress={() => {}}>
    <View style={styles.cartContainer}>
    <Image
    source={require('../assets/icons/cart_icon.png')}
    style={styles.cartIcon}/>
    </View>
    <Text style={[textStyles.h6,styles.txtBtn]}>ADD TO CART</Text>
  </TouchableOpacity>
 </View>



        </View>



    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

    root:{
      
        backgroundColor:"#ffffff",
        flex:1,

        


    },
    foodImage:{
        height:210,
        padding:12,
        flexDirection:'row',
        alignContent:'center',
        marginBottom:10,

    },

    ratingText:{
        marginVertical:10,
        textAlignVertical:'center'

    },
    priceContainer:{
        flexDirection:'row',
        width:'100%'
    },
    descriptionText:{

        marginVertical:10,
        color:Colors.gray,
        justifyContent:'center',
        fontWeight:'400'
    },
    viewBtn: {
        position: 'absolute',
        bottom: 0,
        height: 0,
        width: widthPercentageToDP('85%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
       
        height:55,
        width:160,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
        flexDirection:'row'
      },
      txtBtn: {
        textAlign: 'center',
        color: 'white',
      },
      cartContainer:{
        width:40,
        height:40,
        marginRight:5,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
      },

      cartIcon:{
        width:16,
        height:16,
       

      }



    


})