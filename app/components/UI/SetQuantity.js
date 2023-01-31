import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import textStyles from '../../utils/textStyles'
import Colors from '../../utils/colors'

export default function SetQuantity() {
  return (
   
      <Text style={[ textStyles.h4,styles.text]} > <Icon   name="minuscircleo" size={26} color={Colors.primary}/>  01  <Icon name="pluscircle" size={26} color={Colors.primary}/></Text>
   
  )
}


const styles = StyleSheet.create({
    text:{

        flex:1,
        textAlign:'right',
        textAlignVertical:'center'

    },

    icon:{

    },

})