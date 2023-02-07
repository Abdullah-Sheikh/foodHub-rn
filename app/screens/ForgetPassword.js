import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../components/UI/AuthHeader';
import auth from '@react-native-firebase/auth';

import textStyles from '../utils/textStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import Input from '../components/UI/Input';
import PrimaryBtn from '../components/UI/PrimaryBtn';

export default function ForgetPassword({navigation}) {

    

    const [enteredEmail , setEnteredEmail] = useState ('');




function updateInputValueHandler ( entered ){

      setEnteredEmail(entered);
    }

    


function submitHandler () {

   auth().sendPasswordResetEmail(enteredEmail)
  .then(function (user) {
    Alert.alert('Reset Password Sent!','Please check your email...')
    navigation.navigate('Login')
  }).catch(function (e) {
    console.log(e)
  })
    
}


  return (
    <View style={styles.root}>

     
     <AuthHeader/>

     <Text style={[styles.heading , textStyles.h1]}>Reset Password</Text>
     <Text style={[styles.subHeading , textStyles.h7 , {color: Colors.gray}]}>{`Please enter your email address to \n request a password reset`}</Text>

     <Input 
     placeholder="your email"
     value={enteredEmail}
     onUpdateValue={updateInputValueHandler}/>


     <View style={{ marginTop: 20,} }/>

    

  <PrimaryBtn label="SEND Password Link" onPress={submitHandler}/>
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        backgroundColor: "#ffffff",
        flex:1
      },
    heading:{
      
        marginHorizontal:20,
        marginBottom:10,
        marginTop: heightPercentageToDP('10%'),
  
      },

      subHeading:{
      
        marginHorizontal:20,
        marginBottom:20,
        marginTop: 5,
  
      },
});

