import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import textStyles from '../../../utils/textStyles';
import FoodItem from './FoodItem';
import { FoodContext } from '../../../Global/food-context';

export default function FoodList({category}) {

  const contextCtx = useContext(FoodContext);



  const renderItem = ({item}) =>{

    const string1 = category.toUpperCase();
    const string2 = item.category.toUpperCase();


    return(
      <>
      { (string1 === string2) ?
      <FoodItem
      name={item.name}
      detail={item.detail}
      rating={item.rating}
      image={item.image}
      price={item.price}
     

      />
      : null }

</>

    )
  }
  return (
    <View style={styles.root}>
        <Text style={[textStyles.h4,styles.header]} >Popular Items </Text>

        <FlatList
        data={contextCtx.foodState
          }
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