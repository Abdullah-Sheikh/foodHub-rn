import { View, Text } from 'react-native'
import React from 'react'

export default function Home({navigation}) {

  function OpenDrawer (){

    navigation.navigate('Drawer');
  }
  return (
    <View>
      <Text onPress={OpenDrawer}>Home</Text>
    </View>
  )
}