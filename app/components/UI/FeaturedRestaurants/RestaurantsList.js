import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import Colors from '../../../utils/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RestaurantItem from './RestaurantItem';

export default function RestaurantsList() {
  return (
    <View style={styles.root}>


        <View style={styles.headingConatainer}>
        <Text style={[textStyles.h4 , styles.heading]}>Featured Restaurants</Text>
        <Text style={[textStyles.h5 , styles.viewText]}>View All <Ionicons name="arrow-forward" size={15} color={Colors.primary} /></Text>
        </View>

        <RestaurantItem/>

       
     
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginTop:20,
        marginBottom:100,
    },
    headingConatainer:{
        flexDirection:'row',
    },
    heading:{

        width:widthPercentageToDP("70%")
    },
    viewText:{
        color:Colors.primary,
        textAlign:'right',
        
    }
});