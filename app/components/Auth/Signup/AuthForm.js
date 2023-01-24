import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../UI/Input';
import PrimaryBtn from '../../UI/PrimaryBtn';
import Colors from '../../../utils/colors';

export default function AuthForm( {credientialsInvalid , onSubmit}) {


const [enteredFullName , setEnteredFullName] = useState('');    
const [enteredEmail , setEnteredEmail] = useState ('');
const [enteredPassword , setEnteredPassword] = useState('');



const {
    fullName: fullNameIsInvalid,
    email : emailIsInvalid,
    passowrd : passwordIsInvalid,

} = credientialsInvalid;

function updateInputValueHandler ( inputType , enteredValue){

    switch (inputType){
        case 'fullName':
            setEnteredFullName(enteredValue)

            break;
        case 'email': 
           setEnteredEmail(enteredValue);
           break;
        case 'password':
            setEnteredPassword(enteredValue);
            break;
            

    }

    
}

function submitHandler () {
    onSubmit( {
        fullName : enteredFullName,
        email :enteredEmail,
        password: enteredPassword,

    })
}


  return (
    <View>

<Input 
      label="Full name" 
      placeholder="Your full name"
      onUpdateValue={updateInputValueHandler.bind(this, 'fullName')}
          value={enteredFullName}
          keyboardType="email-address"
          isInvalid={fullNameIsInvalid}/>

<Input 
      label="E-mail" 
      placeholder="Your email or phone"
      onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}/>

<Input 
      label="Password"
      placeholder="Password"
      onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}/>



          <PrimaryBtn onPress={submitHandler} label="SIGN UP"/>
      
    </View>

  )
}


const styles = StyleSheet.create({

    forgetPass:{
        textAlign:'center',
        color:Colors.primary,
        marginVertical:15,

    },



});