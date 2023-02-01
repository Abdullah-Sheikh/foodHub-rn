import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import textStyles from '../../../utils/textStyles'
import AddOnItem from './AddOnItem'
import { FlatList } from 'react-native-gesture-handler'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export default function AddOnList() {

  const [selected , setSelected] = useState('1');

  const data = [
    {key:'1' ,name:'Pepper  Julienned' , price:'2.30' , image:require('../../../assets/images/pepper_img.png') },
    {key: '2', name:'Baby Spinach' , price:'4.70' , image:require('../../../assets/images/babySpinach_img.png') },
    {key: '3', name:'Masroom' , price:'2.50' , image:require('../../../assets/images/masroom_img.png') },
    
    


  ];


  const renderItem = ({item}) =>{
    const active = item.key === selected ? true : false
    return(
      <AddOnItem 
      onPress={() => {setSelected(item.key)
      }}
      name={item.name}
      price={item.price}
      image={item.image}
      active={active} />
    )
  }
  return (
    <View style={styles.root}>
        <Text style={textStyles.h4}>Choice of Add On</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}



        
        />






       

        



    
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginVertical: 10,
        paddingBottom:10,
        height:heightPercentageToDP('24%')
      
        
    }


})