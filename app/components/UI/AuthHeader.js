import { View,  StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import React from 'react'
import { heightPercentageToDP  as hp, widthPercentageToDP} from 'react-native-responsive-screen';

const AuthHeader = () => {
  return (
    <>
    <View style={styles.screenDesignContainer}>
    <Image   
    source={require('../../assets/images/shape1.png')}
   />
      <Image   
    source={require('../../assets/images/shape2.png')}
    style={styles.shape2}/>
     <Image   
    source={require('../../assets/images/shape3.png')}
    style={styles.shape3}
   />
    
</View>

<Icon name="left" size={30} color="#900" />

</>
  )
}

export default AuthHeader;



const styles = StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    screenDesignContainer:{

        flexDirection:'row',

    },
    shape2:{
        zIndex:1,
        marginLeft:-50,
    },
    shape3:{
       marginLeft:widthPercentageToDP('40%'),


    },



});


