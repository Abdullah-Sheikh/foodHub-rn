import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import Colors from '../../../utils/colors';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RestaurantItem from './RestaurantItem';
import { FlatList } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';

export default function RestaurantsList() {

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


        <View style={styles.headingConatainer}>
        <Text style={[textStyles.h4 , styles.heading]}>Featured Restaurants</Text>
        <Text style={[textStyles.h5 , styles.viewText]}>View All <Ionicons name="arrow-forward" size={15} color={Colors.primary} /></Text>
        </View>

        <FlatList
        data={[
            {key: '1' ,name:`McDonald's`,image: require('../../../assets/images/Mcdonald.jpg'  ) , deiveryTime:"10-15" ,category:['FASTFOOD' , 'CHICKEN' , 'BURGER'] , rating:'4.6'}  ,
            {key: '2' ,name:`Dunkin Donut's`,image: require('../../../assets/images/dunkinDonuts.jpg'  ) , deiveryTime:"15-20" ,category:['DONUT' , 'BAKESHOP' ] , rating:'4.8'}  ,
            {key: '3' ,name:`Pizza Hut`,image: require('../../../assets/images/PizzaHut.png'  ) , deiveryTime:"15-20" ,category:['PIZZA' , 'CHICKEN' , 'FASTFOOD' ] , rating:'4.7'}  ,
            {key: '4' ,name:`Bundu Khan`,image: require('../../../assets/images/bunduKhan.jpg'  ) , deiveryTime:"30-45" ,category:['ASIAN' , 'CHICKEN' ] , rating:'4.3'}  ,
            {key: '5' ,name:`Tao Pan`,image: require('../../../assets/images/taoPan.jpg'  ) , deiveryTime:"25-35" ,category:['MEXICAN' , 'CHICKEN' ] , rating:'4.9'}  ,



            
            
          ]}
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