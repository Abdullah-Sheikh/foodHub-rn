import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React  , {useState} from 'react'
import AuthHeader from '../components/UI/AuthHeader'
import textStyles from '../utils/textStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AuthForm from '../components/Auth/Signup/AuthForm';
import SocialLogin from '../components/UI/SocialLogin';
import Colors from '../utils/colors';

export default function SignUpScreen({navigation}) {


    const [credientialsInvalid , setCredientialsIsInvalid] = useState({

        email: false,
        password: false,
        fullName : false
      });
    
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