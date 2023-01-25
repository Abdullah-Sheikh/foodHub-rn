import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AuthHeader from '../components/UI/AuthHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import textStyles from '../utils/textStyles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Colors from '../utils/colors';

export default function VerfiyCode() {
  return (
    <View>
        <AuthHeader/>
        <Text style={[styles.heading , textStyles.h1]}>Registration</Text>
     <Text style={[styles.subHeading , textStyles.h7 , {color: Colors.gray}]}>{`Please type the verification code sent to \nprelookstudio@gmail.com`}</Text>

     <OTPInputView  
      style={styles.otpInput}
      pinCount={4}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}/>


    <Text style={[ textStyles.h6 , styles.resendCode]}>I don’t recevie a code!  <Text  onPress={() => navigation.navigate("Login")} style={{fontWeight:'500' , color: Colors.primary}}>Please resend</Text></Text>

   
   
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        backgroundColor: "#ffffff",
        flex:1,
       
      },
        heading:{
          
            marginHorizontal:20,
            marginBottom:10,
            marginTop: heightPercentageToDP('10%'),
      
          },
          otpInput:{
             height: 100,
             alignContent:'center',
             marginHorizontal:20,
             

          },
    
          subHeading:{
          
            marginHorizontal:20,
            marginBottom:20,
            marginTop: 5,
      
          },

          underlineStyleBase: {
            width: 60,
            height: 60,
            borderWidth: 1,
            borderRadius:12,
            fontFamily:'SofiaPro-medium',
            textAlign:'center',
            fontSize:22,
            lineHeight:22,
            fontWeight:'500',
            color:Colors.primary,
            borderColor:Colors.gray50,
          },
        
          underlineStyleHighLighted: {
            borderColor: Colors.primary,
          },

          resendCode:{
            marginVertical:10,
            color:"#000",
            textAlign: 'center',
            
        },

});