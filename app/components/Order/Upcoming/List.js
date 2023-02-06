import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Item from './Item'

export default function List() {

  const renderItem = ({item}) => {
    return(
      <Item/>
    )
  }


  return (
    <View>
      <FlatList
      data={[
        {key:'1',}
      ]}
      renderItem={renderItem}
      keyExtractor= {(item) => item.key}
      />
    
    </View>
  )
}