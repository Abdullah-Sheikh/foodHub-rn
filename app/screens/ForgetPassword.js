import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React from 'react'
import AuthHeader from '../components/UI/AuthHeader';
import textStyles from '../utils/textStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import Input from '../components/UI/Input';
import PrimaryBtn from '../components/UI/PrimaryBtn';

export default function ForgetPassword() {

    function sendPassword() {
        Alert.alert("New Password Send!")
    }
  return (
    <View>

     
     <AuthHeader/>

     <Text style={[styles.heading , textStyles.h1]}>Reset Password</Text>
     <Text style={[styles.subHeading , textStyles.h7 , {color: Colors.gray}]}>{`Please enter your email address to \n request a password reset`}</Text>

     <Input placeholder="your email"/>


     <View style={{ marginTop: 20,} }/>

    

  <PrimaryBtn label="SEND NEW PASSWORD" onPress={sendPassword}/>
    </View>
  )
}


const styles = StyleSheet.create({
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

