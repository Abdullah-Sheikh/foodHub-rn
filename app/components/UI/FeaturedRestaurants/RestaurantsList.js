import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import textStyles from '../../../utils/textStyles';
import Colors from '../../../utils/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RestaurantItem from './RestaurantItem';
import { FlatList } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { DataContext } from '../../../Global/data-context';

export default function RestaurantsList({category}) {


    

    const contextCtx = useContext(DataContext);

    const renderItem = ({item}) =>{

        const string = category.toUpperCase();

        

        const categoryCheck =  item.category.includes(string);
        return(
            <>
            { categoryCheck ? 
               
        <RestaurantItem 

        id={item.key}
        name={item.name} 
        image={item.image} 
        deliveryTime={item.deiveryTime}
        category={item.category} 
        rating={item.rating}
        wishlist = {item.wishlist}
         />
       
          
         : <></> }


         </>
        )
    }
  return (
    <View style={styles.root}>


        <View style={styles.headingConatainer}>
        <Text style={[textStyles.h4 , styles.heading]}>Featured Restaurants</Text>
        <Text style={[textStyles.h5 , styles.viewText]}>View All <Ionicons name="arrow-forward" size={15} color={Colors.primary} /></Text>
        </View>
       

        <FlatList
        data={contextCtx.restaurantsState}
        horizontal
        keyExtractor={item => item.key}
        renderItem={renderItem}
     
        />

       

       
     
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginTop:20,
        marginBottom:10,
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