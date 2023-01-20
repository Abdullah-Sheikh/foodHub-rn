import { View, Text, StyleSheet, Platform, ImageBackground, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../utils/colors';

const OnBoarding = () => {
  return (
    <View style={styles.root}>
        <ImageBackground  
        source={require('../assets/images/bg_img.png')}
        style={styles.bgImage}>
            <ImageBackground 
             source={require('../assets/images/gradient_bg.png')}
             style={styles.bgGradient}
            >
                <View style={styles.skipBtn}>
                <Text style={styles.skipText} >Skip</Text>
                </View>

                <Text style={styles.title}>
                    Welcome to
                </Text>
                <Text style={styles.titlePrimary }>FoodHub</Text>

                <Text style={styles.subTitle}>Your favourite foods delivered fast at your door.</Text>


                <View style={styles.signInWith}>
                    <View  style={styles.divider}/>
                    <Text style={styles.dividerText}>sign in with</Text>
                    <View  style={styles.divider}/>

                </View>

                <View style={styles.socialLogin}>

                    <View style={styles.socialLoginContainer}>
                        <Image  
                        source={require('../assets/images/fb_icon.png')}
                        style={styles.socialIcon}
                        />
                        <Text style={styles.socialText}>FACEBOOK</Text>

                    </View>

                    <View style={styles.socialLoginContainer}>
                        <Image  
                        source={require('../assets/images/g_icon.png')}
                        style={styles.socialIcon}
                        />
                        <Text style={styles.socialText}>GOOGLE</Text>

                    </View>


                </View>
                
                <View style={styles.signInOption}>
                    <Text style={styles.signInOptionText}>Start with email or phone</Text>

                </View>

                <Text style={styles.signInText}>Already have an account?  <Text style={{fontWeight:'500' ,textDecorationLine:'underline'}}>Sign In</Text></Text>

            </ImageBackground>
       
        </ImageBackground>
      
    </View>
  )
}

export default OnBoarding;


const styles = StyleSheet.create({

    root:{
        flex:1,
       
    },

    skipText:{
        textAlign:'right',
        color:'#000000',
        textAlign:'center',
        fontSize:14,

        lineHeight:14,
        color:Colors.primary,
        fontWeight:'400'

    },
    bgImage:{
      
        flex:1,
        width:'100%',
       
    },
    bgGradient:{
        paddingTop: Platform.OS === 'ios' ? hp('6%') : 10,
        flex:1,
        width:'100%',
       
    },
    skipBtn:{
        marginLeft: wp("80%"),
        alignSelf:'baseline',
        alignItems:'flex-end',
        backgroundColor:'#ffffff',
        paddingVertical:8,
        paddingHorizontal:13,
        borderRadius:25

    },

    title:{

        marginHorizontal:25,
        marginTop:80,
        fontSize:45,
        
        lineHeight:55,
        color:'#000000',
        fontFamily:'SofiaPro-Bold',
    },
    titlePrimary:{

        marginHorizontal:25,
        fontSize:45,
        lineHeight:55,
        color:Colors.primary,
        fontFamily:'SofiaPro-Bold',
    },
    subTitle:{

        marginTop:5,
        marginLeft:25,
        marginRight:wp('20%'),
        fontSize:18,
        fontWeight:'400',
        lineHeight:27,
        color:'#30384F'
    },
    signInOption:{
       
        paddingVertical:15,
        marginHorizontal:25,
        backgroundColor:'rgba(255, 255, 255, 0.21)',
        borderRadius:30,
        borderColor:'#FFFFFF',
        borderWidth:1,

    },
    signInOptionText:{
        color:"#ffffff",
        textAlign:'center',
        fontWeight:'500',
        fontSize:17,
        lineHeight:17,
    },

    signInText:{
        marginTop:15,
        color:"#ffffff",
        textAlign:'center',
        fontWeight:'400',
        fontSize:16,
        lineHeight:16,
    },

    signInWith:{
        justifyContent:'space-evenly',
        marginTop:hp('30%'),
        flexDirection:'row',
        marginHorizontal:30,
        marginBottom:15,

    },

    divider:{

        marginTop:7,
        height:0.5,
        backgroundColor:'#FFFFFF',
        width:100,
    },
    dividerText:{
        color:'#ffffff',
        fontSize:14,
        lineHeight:14,
        fontWeight:'500',

    },
    socialLogin:{
        flexDirection:'row',
        marginHorizontal:25,
        justifyContent:'space-evenly',

    },
    socialLoginContainer:{
        padding:4,
        borderRadius:27,
        marginVertical:20,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:140,
        height:50,
        

    },

    socialIcon:{

        height:28,
        width:28,

    },
    socialText:{
        color:'#000000',
        fontSize:13,
        lineHeight:13,
        fontWeight:'400',
    }

   

   



})