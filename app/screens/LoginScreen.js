import { View, Text, StyleSheet, Image } from 'react-native'

import React from 'react'
import { heightPercentageToDP  as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import AuthHeader from '../components/UI/AuthHeader';

const LoginScreen = () => {
  return (
    <View>

      <AuthHeader/>
      
    </View>
  )
}

export default LoginScreen;


const styles = StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:'#ffffff',
    },
   



});

