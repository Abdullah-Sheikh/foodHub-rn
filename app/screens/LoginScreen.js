import { View, Text, StyleSheet, Image, Alert, ScrollView } from 'react-native'
import textStyles from '../utils/textStyles'
import auth from '@react-native-firebase/auth';

import React, { useState } from 'react'
import { heightPercentageToDP  as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import AuthHeader from '../components/UI/AuthHeader';
import Colors from '../utils/colors';
import AuthForm from '../components/Auth/Login/AuthForm';
import SocialLogin from '../components/UI/SocialLogin';

const LoginScreen = ({navigation}) => {

  const [credientialsInvalid , setCredientialsIsInvalid] = useState({

    email: false,
    password: false,
  });


  const login =  async (email , password) =>{

    try {
     
      const {user} = await auth().signInWithEmailAndPassword(email, password)
      if(!user.emailVerified){
        Alert.alert("Email not Verified!" ,'Verify your email before Login')
        return false;
      }
      Alert.alert("Login Successfully!" ,'Welcome to FoodHub')
      navigation.navigate("Drawer");
      return true

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert("Error" ,"That email address is already in use!")
       
      }
  
      else if (error.code === 'auth/invalid-email') {
        Alert.alert("Error" ,"That email address is invalid!")
       
      }
      else{
        Alert.alert("Error" ,`${error}`)
      }
  
    
      return false
    }



  }

function submitHandler (credientials){
  let {email , password} = credientials;
  
  email = email.trim ();
  password = password.trim();

  const emailIsValid = email.includes('@');
  const passwordIsValid = password.length > 6;

  if(!emailIsValid  || ! passwordIsValid)
  {
    Alert.alert('Invalid input' , 'Please check your entered credientials. ');
    setCredientialsIsInvalid({

      email: !emailIsValid,
      password:! passwordIsValid
    });
    return;
  }

  login(email, password)

}

  return (
    
    <View style={styles.root}>

      <AuthHeader/>

      <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <Text style={[styles.heading , textStyles.h1]}>Login</Text>


      <AuthForm
      onSubmit={submitHandler}
      credientialsInvalid={credientialsInvalid}/>


      <Text style={[ textStyles.h6 , styles.signInText]}>Don’t have an account? <Text onPress={() => navigation.navigate("SignUp")} style={{fontWeight:'500' , color: Colors.primary}}> Sign Up</Text></Text>


      <SocialLogin/>



      </ScrollView>
     

      
    </View>
  )
}

export default LoginScreen;


const styles = StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingBottom:20,
    },
    heading:{
      
      marginHorizontal:20,
      marginBottom:10,
      marginTop: hp('10%'),

    },
    signInText:{
      marginVertical:10,
      color:"#000",
      textAlign:'center',
     
  },
   



});

