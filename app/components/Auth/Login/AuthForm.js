import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Input from '../../UI/Input';
import PrimaryBtn from '../../UI/PrimaryBtn';
import Colors from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';


export default function AuthForm( {credientialsInvalid , onSubmit}) {

    const navigation = useNavigation();



const [enteredEmail , setEnteredEmail] = useState ('');
const [enteredPassword , setEnteredPassword] = useState('');


const {
    email : emailIsInvalid,
    passowrd : passwordIsInvalid,

} = credientialsInvalid;

function updateInputValueHandler ( inputType , enteredValue){

    switch (inputType){
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
        email :enteredEmail,
        password: enteredPassword,

    })
}


  return (
    <View>

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


          <Text style={styles.forgetPass} onPress={() => navigation.navigate("ForgetPassword")}>Forget password?</Text>


          <PrimaryBtn onPress={submitHandler} label="Login"/>
      
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