import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/colors';


export default function BackBtn({style}) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack(null)}>
    <View  style={[styles.container , style]} >
        <Icon name="left" size={16} color="#000" />
    </View>
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    container:{
        width:38,
        height:38,
        borderRadius:12,
        backgroundColor:'#ffffff',
        alignItems:'center',
        padding:11,
        alignContent:'center',
        elevation:4,
        shadowColor: Colors.gray80,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 8,

    }


});