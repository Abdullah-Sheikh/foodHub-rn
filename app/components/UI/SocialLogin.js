import { View, Text, Image , StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import Colors from '../../utils/colors';

export default function SocialLogin() {
  return (
    <View>

       

      <View style={styles.signInWith}>
                    <View  style={styles.divider}/>
                    <Text style={styles.dividerText}>sign in with</Text>
                    <View  style={styles.divider}/>

                </View>

                <View style={styles.socialLogin}>

                    <View style={styles.socialLoginContainer}>
                        <Image  
                        source={require('../../assets/images/fb_icon.png')}
                        style={styles.socialIcon}
                        />
                        <Text style={styles.socialText}>FACEBOOK</Text>

                    </View>

                    <View style={styles.socialLoginContainer}>
                        <Image  
                        source={require('../../assets/images/g_icon.png')}
                        style={styles.socialIcon}
                        />
                        <Text style={styles.socialText}>GOOGLE</Text>

                    </View>
    </View>

    </View>
  )
}



const styles = StyleSheet.create({

    signInWith:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginHorizontal:30,
        marginBottom:15,
        marginTop:15,

    },

    divider:{

        marginTop:7,
        height:0.5,
        backgroundColor: Colors.gray50,
        width:100,
    },
    dividerText:{
        color:Colors.gray80,
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
        height:55,
        elevation:4,
        shadowColor: Colors.gray,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
        

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


});