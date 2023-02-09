import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import BackBtn from './BackBtn'
import textStyles from '../../utils/textStyles'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function Header({image , label }) {

  const navigation = useNavigation();

  function profileScreen () {

    navigation.navigate('Profile')

  }
  return (
    <View style={styles.root}>
        <BackBtn/>
        <Text style={[ textStyles.h4,styles.text]}>{label}</Text>
        { image ?  <TouchableOpacity onPress={profileScreen}><Image
        style={styles.image}
        source={require('../../assets/images/profileImg.png')}/>
        </TouchableOpacity>
        : null
       }
     
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        
        paddingHorizontal:20,
        paddingVertical:10,
    },
    text:{
    
      width:widthPercentageToDP("65%"),
      textAlign:'center'

    },
    image:{
        borderRadius:14,
        width:42,
        height:42,
    }
})