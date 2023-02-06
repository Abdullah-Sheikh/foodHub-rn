import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import textStyles from '../../../utils/textStyles'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Item() {
  return (
    <View style={styles.container}>

        <View style={styles.orderDetailsContainer}>

            <View style={{flex:1}}>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={(require('../../../assets/icons/RestaurantIcon/StarBucks.png'))}/>

            </View>

            </View>
            <View style={{flex:2 , flexDirection:'column'}}>
            <Text style={[textStyles.h6, styles.orderQuantity]}>20 Jun, 10:30  <Icon name="circle" color={Colors.gray80} size={8}/>  3 items</Text>
                <Text style={textStyles.h4}>Starbucks <Ionicons name="md-checkmark-circle" color="#029094" size={12}/></Text>
                <Text style={[textStyles.h, styles.orderDelivered]}><Icon name="circle" color="#4EE476" size={12}/> Order Delivered</Text>


            </View>
            <View style={{flex:0.75}}>
            <Text style={[textStyles.h5, styles.orderPrice]}>$17.10</Text>

            </View>

        </View>

        <View style={{flexDirection:"row" ,display:'flex' }}>

<Pressable   style={ ({pressed}) => [styles.rate ,pressed && styles.pressed]} >
<View>
    <Text style={[textStyles.h5 , { textAlign:'center' , marginHorizontal:4 }]}>Rate</Text>

</View>
</Pressable>

<Pressable    style={ ({pressed}) => [styles.reOrder ,pressed && styles.pressed]} >
<View>
    <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>Re-Order</Text>

</View>
</Pressable>




  
</View>
      
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        marginHorizontal:20,
        marginVertical:10,
        padding:15,
        height:180,
        borderRadius:18,
        backgroundColor:Colors.white,
        marginHorizontal:20,
        elevation:4,
        shadowColor: Colors.gray80,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 8,

    },

    orderDetailsContainer:{
        display:'flex',
        flexDirection:'row',
        marginLeft:5,
        marginBottom:15,

    },
    imageContainer:{
       
        width:70,
        justifyContent:'center',
       alignItems:'center',
        height:70,
        marginTop
        :10,
        borderRadius:12,
        backgroundColor:Colors.white,
        elevation:10,
        shadowColor: Colors.gray80,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 1,
    },
    image:{
        width:47.5,
        height:47.5,
    },
    orderQuantity:{
        color:Colors.gray80,
        marginVertical:5,

    },
    orderDelivered:{
        color:'#4EE476'

    },
    orderPrice:{
        color:Colors.primary,
        textAlign:'right',
    },

    reOrder:{

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
    rate:{

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
    
    

})