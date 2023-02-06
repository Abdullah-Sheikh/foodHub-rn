import { View, Text, StyleSheet, ImageBackground, Image, Platform } from 'react-native'
import React  , {useState} from 'react'
import Colors from '../utils/colors';
import textStyles from '../utils/textStyles';
import EditForm from '../components/EditProfile/EditForm';
import { ScrollView } from 'react-native-gesture-handler';
import BackBtn from '../components/UI/BackBtn';

export default function ProfileScreen() {


    const [credientialsInvalid , setCredientialsIsInvalid] = useState({

        fullNmae: false,
        email: false,
        phone: false,
      });
    
    function submitHandler (credientials){
      let {fullName, email , phone} = credientials;
      
      fullName = fullName.trim ();
      email = email.trim ();
      phone = phone.trim();

      const fullNameIsValid = fullNameIsValid.length >5;
      const emailIsValid = email.includes('@');
      const phoneIsValid = phone.length > 10;
    
      if(!emailIsValid  || ! phoneIsValid || ! fullNameIsValid) 
      {
        Alert.alert('Invalid input' , 'Please check your entered credientials. ');
        setCredientialsIsInvalid({
    
        });
        return;
      }
    
     
    
    }
    
  return (
    <View style={styles.root}>
        <ImageBackground 
        style={styles.headerContainer}
        source={require('../assets/images/profileHeader.png')}>

           <BackBtn style={styles.backBtn}/>
            <View style={styles.profileImgContainer}>
            <ImageBackground 
            imageStyle={{ borderRadius:50,  }}
            style={styles.profileImg}
            source={require('../assets/images/profileImg.png')}/>
            </View>
        </ImageBackground>


        <Text style={[ textStyles.h4,styles.heading]}>Eljad Eendaz</Text>
        <Text style={[textStyles.h6, styles.subHeading]}>Edit Profile</Text>

        <ScrollView automaticallyAdjustKeyboardInsets={true}>

        <EditForm credientialsInvalid={credientialsInvalid} onSubmit={submitHandler}/>

        </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({

    root:{
        backgroundColor:'#ffffff',
        flex:1,
        

    },

    headerContainer:{
        height:285,
        
        flexDirection:'column',


    },
    profileImgContainer:{
       

        width:100,
        height:100,
        borderRadius:50,
        marginTop: Platform.OS ==="ios" ? 60 : 90 ,
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    profileImg:{
        width:85,
        height:85,
       
        elevation:10,
        shadowColor: "#FDE992",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 8,
       
    },
    heading:{
        marginTop:-45,
        textAlign:'center',
        fontWeight:'700',
    },
    subHeading:{
        textAlign:'center',
        color:Colors.gray80,
        marginTop:4,
        
    },
    backBtn:{
        marginTop:Platform.OS ==="ios" ? 45 : 10,
        marginHorizontal:20,


    }


});
