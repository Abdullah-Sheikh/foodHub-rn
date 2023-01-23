import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import textStyles from '../../utils/textStyles';

export default function PrimaryBtn({onPress , label}) {
  return (
    <Pressable  style={ ({pressed}) => [styles.outerContainer ,pressed && styles.pressed]} onPress={onPress}>
        <View>
            <Text style={[textStyles.h4 , {color: "#ffffff" , textAlign:'center'}]}>{label}</Text>

        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({


    outerContainer:{
        backgroundColor:Colors.primary,
       
        marginVertical:15,
        height:60,
        alignItems:'center',
        marginHorizontal:widthPercentageToDP('20%'),
        alignContent:'center',
        borderRadius:28,
        paddingVertical:15,
    },

    pressed:{
        opacity: 0.7,
    }


});