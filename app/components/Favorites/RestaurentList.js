import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RestaurantItem from './RestaurentItem';
import { FlatList } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';
import { DataContext } from '../../Global/data-context';
import Colors from '../../utils/colors';

export default function RestaurantsList() {


    

    const restaurants = useContext(DataContext);

    const renderItem = ({item}) =>{

       

        

       
        return(
           
               
        <RestaurantItem 
        name={item.name} 
        image={item.image} 
        deliveryTime={item.deiveryTime}
        category={item.category} 
        rating={item.rating}
         />
       
          
    
        )
    }
  return (
    <View style={styles.root}>


      
       

        <FlatList
        data={restaurants}
        keyExtractor={item => item.key}
        renderItem={renderItem}
     
        />

       

       
     
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        
        marginBottom:150,
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