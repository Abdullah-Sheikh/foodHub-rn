import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from './CategoryItem'
import { FlatList } from 'react-native-gesture-handler'

export default function CategoryList() {

  const [ selected , setSelected] = useState();

  const renderItem = ({item}) =>{

    const styleSelected = item.key === selected ? true : false;

    return(

      <CategoryItem
     
      onPress={ () => {setSelected(item.key)
      }}
      item={item}
      image={item.image}
      styleSelected={styleSelected }/>

    );

   

  }
  return (
    <View style={styles.root}>

<FlatList
        data={[
          {key: '1' , name: 'Burger', image:  require("../../../assets/images/burgerImage.png")},
          {key: '2' ,name:'Donut' , image: require('../../../assets/images/donutImage.png') },
          {key: '3' ,name:'Pizza' , image: require('../../../assets/images/pizzaImage.png')},
          {key: '4' , name:'Mexican' , image:require('../../../assets/images/mexicanImage.png')},
          {key: '5' , name:'Asian' , image: require('../../../assets/images/asianImage.png')},
          
        ]}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.key}
        extraData={selected}
      />
      
    </View>
  )
}


const styles = StyleSheet.create({
    root:{
        marginTop:15,
    }
})