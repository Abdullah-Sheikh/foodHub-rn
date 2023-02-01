import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import Colors from '../utils/colors';
import textStyles from '../utils/textStyles';

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
        <ImageBackground 
        style={styles.headerContainer}
        source={require('../assets/images/profileHeader.png')}>

            <View style={styles.profileImgContainer}>
            <ImageBackground 
            imageStyle={{ borderRadius:50,}}
            style={styles.profileImg}
            source={require('../assets/images/profileImg.png')}/>
            </View>
        </ImageBackground>


        <Text style={[ textStyles.h4,styles.heading]}>Eljad Eendaz</Text>
        <Text style={[textStyles.h6, styles.subHeading]}>Edit Profile</Text>
    
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
        alignContent:'center',
       
        alignItems:'center',
        flexDirection:'column',


    },
    profileImgContainer:{
       

        width:100,
        height:100,
        borderRadius:50,
        marginTop:135,
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


});
