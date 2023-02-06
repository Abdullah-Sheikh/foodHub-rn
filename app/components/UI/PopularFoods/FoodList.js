import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import textStyles from '../../../utils/textStyles';
import FoodItem from './FoodItem';

export default function FoodList() {

  const renderItem = ({item}) =>{

    return(
      <FoodItem
      name={item.name}
      detail={item.detail}
      rating={item.rating}
      image={item.image}
      price={item.price}

      />

    )
  }
  return (
    <View style={styles.root}>
        <Text style={[textStyles.h4,styles.header]} >Popular Items </Text>

        <FlatList
        data={[
          {key:'1', name:'Salmon Salad' , detail:'Baked salmon fish' , rating:'4.8' , image:require('../../../assets/images/SalmonSalad.png'), price:'5.60'},
          {key:'2' ,name:'Choco Donut' , detail:'Belgium chocolate' , rating:'4.9' , image:require('../../../assets/images/belgiumDonut.jpg'), price:'1.20'},
          {key:'3' ,name:'Malt Donut' , detail:'Carmel Donut' , rating:'4.9' , image:require('../../../assets/images/caramelDonut.jpg'), price:'2.10'},
          {key:'4' ,name:'Chicken Hawaiian' , detail:'Chicken, Cheese' , rating:'4.9' , image:require('../../../assets/images/pizzaImg1.png'), price:'11.30'},


        ]}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.key}
        />



      
     
    </View>
  )
}


const styles = StyleSheet.create({

    root:{
        marginTop:5,
        marginBottom:75

    },

    header:{



    }


});