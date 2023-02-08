import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import React  , {useState} from 'react'
import AuthHeader from '../components/UI/AuthHeader'
import textStyles from '../utils/textStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AuthForm from '../components/Auth/Signup/AuthForm';
import SocialLogin from '../components/UI/SocialLogin';
import Colors from '../utils/colors';
import database from '@react-native-firebase/database';

export default function SignUpScreen({navigation}) {


    const [credientialsInvalid , setCredientialsIsInvalid] = useState({

        email: false,
        password: false,
        fullName : false
      });



      const signUp =  async (email , password ,fullName) =>{

        try {
         
          const {user} = await auth().createUserWithEmailAndPassword(email, password)
          await user.sendEmailVerification()
          database()
          .ref(`/users/${user.uid}`)
          .set({
                fullname: fullName ,
                email: email,
                phone:' '
              })
  .then(() => console.log('Data set.'));
          
          Alert.alert("SignUp Successfully!" ,`Verification link sent to your email address `)
          navigation.navigate("Login");
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
      let {fullName , email , password} = credientials;
      
      fullName = fullName.trim();
      email = email.trim ();
      password = password.trim();
    
      const fullNameIsValid = fullName.length >1 ; 
      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 6;
    
      if(!emailIsValid  || ! passwordIsValid)
      {
        Alert.alert('Invalid input' , 'Please check your entered credientials. ');
        setCredientialsIsInvalid({
    
          fullName : !fullNameIsValid,  
          email: !emailIsValid,
          password:! passwordIsValid
        });
        return;
      }

     
    
      signUp(email,password, fullName);

      
      
    
    }
  return (
    <View style={styles.root}>
     <AuthHeader/>

     <ScrollView automaticallyAdjustKeyboardInsets={true}>

     <Text style={[styles.heading , textStyles.h1]}>Sign Up</Text>

     <AuthForm
      onSubmit={submitHandler}
      credientialsInvalid={credientialsInvalid}/>

     <Text style={[ textStyles.h6 , styles.signInText]}>Already have an account?  <Text  onPress={() => navigation.navigate("Login")} style={{fontWeight:'500' , color: Colors.primary}}>Sign In</Text></Text>


    <SocialLogin/>


     </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingBottom:20,
    },
    heading:{
      
      marginHorizontal:20,
      marginBottom:10,
      marginTop: heightPercentageToDP('5%'),

    },
    signInText:{
        marginVertical:10,
        color:"#000",
        textAlign:'center',
       
    },



});