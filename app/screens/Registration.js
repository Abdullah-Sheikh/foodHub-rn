import { View, Text, StyleSheet, Alert, Button } from 'react-native'
import React from 'react'
import AuthHeader from '../components/UI/AuthHeader';
import textStyles from '../utils/textStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../utils/colors';
import Input from '../components/UI/Input';
import PrimaryBtn from '../components/UI/PrimaryBtn';

export default function Registration({navigation}) {

  
    function sendPassword() {
        Alert.alert("New Password Send!")
        navigation.navigate('VerifyCode')
    }
  return (
    <View style={styles.root}>

     
     <AuthHeader/>

     <Text style={[styles.heading , textStyles.h1]}>Registration</Text>
     <Text style={[styles.subHeading , textStyles.h7 , {color: Colors.gray}]}>{`Enter your phone number to verify \n your account`}</Text>

     <Input placeholder="(+1)-011-121-3122"/>


     <View style={{ marginTop: 20,} }/>

    

  <PrimaryBtn label="SEND" onPress={sendPassword}/>
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

