import { View, Text } from 'react-native'
import React  ,{useEffect} from 'react'


import AppNavigator from './Navigators/AppNavigator';
import { ContextProvider } from './Global/data-context';
import { FoodContextProvider } from './Global/food-context';


const App = () => {

 

  return (
   <>
   <FoodContextProvider>
   <ContextProvider>
  <AppNavigator/>
  </ContextProvider>
  </FoodContextProvider>
 
   </>
  )
}

export default App;