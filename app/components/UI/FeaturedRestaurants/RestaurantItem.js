import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../../../utils/colors';
import textStyles from '../../../utils/textStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RestaurantProperty from './RestaurantProperty';
import Category from './Category';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default function RestaurantItem({name , image , deliveryTime ,category ,rating}) {
  return (
    <View style={styles.root} >
        <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderTopLeftRadius:15,
            borderTopRightRadius:15,}}>

        <View style={styles.imageConatiner}>
            <View style={styles.ratingContainer}>
            <Text style={[textStyles.h, styles.ratingText]}>{rating} <Ionicons name="md-star" size={12} color="#FFC529"/>
            <Text style={{color:"#9796A1" ,fontSize:9 , textAlign:'center' ,textAlignVertical:'center'}}> (25+)</Text>
            </Text>

            </View>

            <View style={[styles.wishListContainer  , {textAlign:'right', marginLeft:150}]}>
            <Ionicons name="heart" size={15} color="#ffffff"/>

            </View>
        </View>

          
        </ImageBackground>


        <View style={styles.innerContainer}>

        <Text style={textStyles.h4}>{name} <Ionicons name="md-checkmark-circle" size={16} color="#029094"/>  </Text>

        <View style={styles.propertiesContainer}>
        <RestaurantProperty image={require('../../../assets/icons/delivery_icon.png')} text="Free delivery"/>
        <RestaurantProperty image={require('../../../assets/icons/time_icon.png')} text={`${deliveryTime} mins`}/>
        
        </View>

        <View style={styles.categoryContainer}>
        {category.map(title => {
        return <Category key={title} text={title}/>
      })}
            
        </View>

        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({

    root:{
        height:230,
        width:270,
        borderRadius:15,
        elevation:4,
        shadowColor: Colors.gray50,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  backgroundColor:'#ffffff',
  marginRight:10,
  marginVertical:10,

    },
    image:{
        width:270,
        height:130,
        
        
        

    },
    imageConatiner:{
        marginTop:10,
        marginHorizontal:10,
        flexDirection:'row',
        
    },
    ratingContainer:{
        backgroundColor:'#ffffff',
        paddingVertical:4,
        paddingHorizontal:8,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'

    },

    wishListContainer:{
        backgroundColor:Colors.primary,
        paddingVertical:6,
        paddingHorizontal:6,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'

    },
    ratingText:{
        textAlign:'center',
        marginBottom:2,

    },

    innerContainer:{
        paddingHorizontal:12,
        paddingVertical:8,
    },
    propertiesContainer:{
        flexDirection:'row',
        marginVertical:2,
    },
    categoryContainer:{
        flexDirection:'row',
        marginVertical:2,
    }

});