import { View, Text } from 'react-native'
import React  ,{useEffect} from 'react'

import AppNavigator from './Navigators/AppNavigator';
import { ContextProvider } from './Global/data-context';


const App = () => {

 

  return (
   <>
   <ContextProvider>
  <AppNavigator/>
  </ContextProvider>
   </>
  )
}

export default App;