import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/colors';
import textStyles from '../../utils/textStyles';

const Input = ( {
    label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder
}) => {

    const [isTextInputFocused, setTextInputFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
        <Text style={[ textStyles.h5 ,styles.label , ]}>{label}</Text>
        <TextInput style={[styles.textInput , textStyles.h5 ,{  borderColor: isTextInputFocused == true ? Colors.primary50 :Colors.gray20} ]}
        placeholder={placeholder}
        autoCapitalize='none'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        onFocus={() => setTextInputFocused(true)}
        onSubmitEditing={() => setTextInputFocused(false)}
        onEndEditing={() => setTextInputFocused(false)}
        
        
    
        />


     
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({

    inputContainer:{

        marginHorizontal:20,
        marginVertical:10,
        alignItems:'flex-start',

    },
    label:{
        color:Colors.gray80,
        marginBottom:10,
    },
    textInput:{
        borderRadius:10,
       
        borderWidth:1,
        height:60,
        width:'100%',
        paddingLeft:20,
    }




});