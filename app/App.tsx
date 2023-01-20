import { View, Text } from 'react-native'
import React  ,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/onBoarding';


const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {

   
    SplashScreen.hide();
} );
  return (
   <>
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen  name="OnBoarding" component={OnBoarding}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  )
}

export default App;