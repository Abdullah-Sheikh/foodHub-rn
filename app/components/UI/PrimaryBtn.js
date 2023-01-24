import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import textStyles from '../../utils/textStyles';

export default function PrimaryBtn({onPress , label }) {
  return (
    <Pressable   onPress={onPress} style={ ({pressed}) => [styles.outerContainer ,pressed && styles.pressed]} >
        <View>
            <Text style={[textStyles.h5 , {color: "#ffffff" , textAlign:'center' , marginHorizontal:4 }]}>{label}</Text>

        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({


    outerContainer:{
        backgroundColor:Colors.primary,
        paddingHorizontal:12, 
       
        marginVertical:15,
        height:60,
        alignItems:'center',
        marginHorizontal:widthPercentageToDP('20%'),
    
        alignContent:'center',
        borderRadius:28,
        paddingVertical:16,
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