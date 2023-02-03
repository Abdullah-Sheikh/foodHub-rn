import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../utils/colors';
import textStyles from '../../../utils/textStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from 'react-native-reanimated';
import PrimaryBtn from '../../UI/PrimaryBtn';

export default function Item() {
  return (
    <View style={styles.container}>
        <View style={styles.restaurantInfo}>
            <View style={{flex:0.75,}}>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={(require('../../../assets/icons/RestaurantIcon/StarBucks.png'))}/>

            </View>
            </View>

            <View style={{flex:1 , flexDirection:'column'}}>
               
                <Text style={[textStyles.h6, styles.orderQuantity]}>3 items</Text>
                <Text style={textStyles.h4}>Starbucks <Ionicons name="md-checkmark-circle" color="#029094" size={12}/></Text>

            </View>
                <Text style={[textStyles.h5, styles.orderNo]}>#FE724C</Text>

        </View>

        <View style={styles.estimatedTimeContainer}>

            <Text style={[textStyles.h6 , styles.estimatedTimeHeading]}>Estimated Arrival</Text>

            <Text style={[textStyles.h6 , styles.currentStatusHeading]}>Now</Text>

        </View>

        <View style={styles.estimatedTimeContainer}>

        <Text style={ styles.estimatedTime}>25 <Text style={textStyles.h6}>min</Text></Text>

        <Text style={[textStyles.h5 , styles.currentStatus]}>Food on the way</Text>

        </View>

        <View style={{flexDirection:"row" ,display:'flex' }}>

        <Pressable    style={ ({pressed}) => [styles.cancelOrder ,pressed && styles.pressed]} >
        <View>
            <Text style={[textStyles.h5 , { textAlign:'center' , marginHorizontal:4 }]}>Cancel</Text>

        </View>
    </Pressable>

        <Pressable    style={ ({pressed}) => [styles.trackOrder ,pressed && styles.pressed]} >
        <View>
            <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>Track Order</Text>

        </View>
    </Pressable>

   


          
        </View>


      
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height:260,
        backgroundColor:Colors.white,
       
        borderRadius:12,
        marginHorizontal:20,
        marginVertical:10,
        padding:15,
        elevation:4,
        shadowColor: Colors.gray80,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,

    },
    restaurantInfo:{
        flexDirection:'row',
        display:'flex',
        marginBottom:10,

    },
    imageContainer:{
       
        width:65,
        justifyContent:'center',
       alignItems:'center',
        height:65,
        borderRadius:12,
        backgroundColor:Colors.white,
        elevation:10,
        shadowColor: Colors.gray80,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
    },
    image:{
        width:45,
        height:45,
    },
    name:{


    },
    orderQuantity:{
        color:Colors.gray80,
        marginVertical:5,

    },
    orderNo:{
        flex:1,
        textAlign:'right',
        color:Colors.primary,

    },
    estimatedTimeContainer:{
        flexDirection:'row' ,
        display:'flex' ,
        marginVertical:10
    },
    estimatedTimeHeading:{
        color:Colors.gray80,
        flex:1
    },
    currentStatusHeading:{
        color:Colors.gray80,
        flex:1,
        textAlign:'right'
    },
    estimatedTime:{
        flex:1,
        fontSize:40,
        lineHeight:40,
        fontWeight:'700',
        fontFamily:'SofiaPro-Regular',
    },
    currentStatus:{
        flex:1,
        textAlign:'right'
    },
    trackOrder:{

        flex:1,
        backgroundColor:Colors.primary,
        paddingHorizontal:12, 

        height:55,
        alignItems:'center',
        alignContent:'center',
        borderRadius:28,
        paddingVertical:16,
        elevation:4,
        marginLeft:7.5,
        shadowColor: Colors.primary50,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 10,
    },
    cancelOrder:{

        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:12, 
        marginRight:7.5,

        height:55,
        alignItems:'center',
        alignContent:'center',
        borderRadius:28,
        paddingVertical:16,
        elevation:4,
        shadowColor: Colors.gray50,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
    },

    pressed:{
        opacity: 0.7,
    }
    

    
});