import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../utils/colors';
import PrimaryBtn from './PrimaryBtn';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import textStyles from '../../utils/textStyles';

export default function PromoCode() {

    const [isTextInputFocused, setTextInputFocused] = useState(false);


  return (
    <View style={[styles.container  , {  borderColor: isTextInputFocused == true ? Colors.primary50 :Colors.gray20} ]} >
        <TextInput  
        style={styles.text}
        placeholder='Promo Code'
        onFocus={() => setTextInputFocused(true)}
        onSubmitEditing={() => setTextInputFocused(false)}
        onEndEditing={() => setTextInputFocused(false)}
        />

<Pressable   style={ ({pressed}) => [styles.outerContainer ,pressed && styles.pressed]} >
        <View>
            <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>Apply</Text>

        </View>
    </Pressable>
       

     
    </View>
  )
}


const  styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        borderWidth:1,
        height:60,
        marginVertical:20,
        paddingLeft:15,
        
        borderRadius:32,
       
        backgroundColor:"#ffffff",
        display:'flex'
        
       
        
    },
    text:{
        textAlign:'left',
        flex:2,
        fontSize:14,
        lineHeight:14,

    },
    outerContainer:{
        alignSelf:'flex-end',
        flex:1,
        backgroundColor:Colors.primary,
        paddingHorizontal:12, 
       
        marginVertical:5,
        height:50,
       
        marginHorizontal:10,
    
        alignContent:'center',
        borderRadius:28,
        paddingVertical:12.5,
        elevation:4,
        shadowColor: Colors.gray80,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },

    pressed:{
        opacity: 0.7,
    }



});