import { View, Text } from 'react-native'
import React from 'react'
import Item from './Item'
import { FlatList } from 'react-native-gesture-handler'

export default function List() {
    const renderItem = () =>{
        return(
              <Item/>
        )
    }
  return (
    <View>

        <FlatList
        renderItem={renderItem}
        data={[
            {key:'1',},
            {key:'2'}
        ]}
        keyExtractor={ (item) => item.key}
        />
     
    </View>
  )
}