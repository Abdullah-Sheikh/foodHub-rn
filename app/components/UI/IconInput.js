import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/colors';
import textStyles from '../../utils/textStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP } from 'react-native-responsive-screen';

const IconInput = ( {
    label,
  keyboardType,
 
  onUpdateValue,
  value,
  placeholder
}) => {

    const [isTextInputFocused, setTextInputFocused] = useState(false);

  return (
    <View style={[styles.inputContainer ,{  borderColor: isTextInputFocused == true ? Colors.primary50 :Colors.gray20} ]}>

        <Ionicons style={styles.icon} name="md-search" size={20} color="#767F9D"/>
     
        <TextInput style={[styles.textInput , textStyles.h5  ]}
        placeholder={placeholder}
        autoCapitalize='none'
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        onFocus={() => setTextInputFocused(true)}
        onSubmitEditing={() => setTextInputFocused(false)}
        onEndEditing={() => setTextInputFocused(false)}
        
        
    
        />


     
    </View>
  )
}

export default IconInput;

const styles = StyleSheet.create({

    inputContainer:{

        flexDirection:'row',
        alignContent:'flex-start',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        borderWidth:1,
        height:60,
        width:widthPercentageToDP('70%')
      
       

    },
    icon:{
        marginTop:Platform.OS === 'ios' ? 4 : 19,
        marginRight:10,


    },
   
    textInput:{
        marginRight: 15 ,
     
    }




});