import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import textStyles from '../../utils/textStyles';
import Colors from '../../utils/colors';
import Icon5 from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import SetQuantity from '../UI/SetQuantity';


export default function CartItem() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imageContainer}
        source={require('../../assets/images/SalmonSalad.png')}/>
        <View style={styles.propertiesContainer}>
            <Text style={[textStyles.h4 , styles.header] }>Red n hot pizza</Text>
            <Text style={[textStyles.h6 , styles.subHeader] }>Spicy chicken, beef</Text>
            <Text style={[textStyles.h5, styles.priceText] }><Icon5 name="dollar" size={14} color={Colors.primary}/>9.50</Text>

        </View>
        <View style={styles.counterContainer}>
            <TouchableOpacity style={{marginBottom:30,}}>
            <Entypo name="cross" size={17} color={Colors.primary}/>
            </TouchableOpacity>
            <SetQuantity/>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        display:'flex',
        marginTop:5,
        height:100,
        marginHorizontal:20,
    },
    imageContainer:{
        alignSelf:'center',
        flex:1,
        height:82,
        width:82,
        borderRadius:22,
    },
    propertiesContainer:{
        flex:1.75,
        marginLeft:15,
        marginVertical:10,

    },
    counterContainer:{
        flex:1.25,
        alignItems:'flex-end',
        marginVertical:10,

    },
    header:{
       

    },
    subHeader:{
        color:Colors.gray
    },
    priceText: {color:Colors.primary,
        marginVertical:4,
    },



});