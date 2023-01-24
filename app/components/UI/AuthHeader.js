import { View,  StyleSheet, Image, Platform, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import React from 'react'
import { heightPercentageToDP  as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/colors';

const AuthHeader = () => {

  const navigation = useNavigation();
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

<Pressable onPress={() => navigation.goBack(null)}>
<View style={styles.BackBtn}>
<Icon name="left" size={16} color="#000" />


</View>

</Pressable>



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
    BackBtn:{
      height:38,
      width:38,
      backgroundColor:"#ffffff",
      marginLeft:20,
      marginTop: Platform.OS === 'ios' ? -20 : -35 ,
      alignItems:'center',
      alignContent:'center',
      padding:11,
      borderRadius:9,
    }



});


