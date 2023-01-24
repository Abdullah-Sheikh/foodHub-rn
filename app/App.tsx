import { View, Text } from 'react-native'
import React  ,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/onBoarding';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgetPassword from './screens/ForgetPassword';
import Registration from './screens/Registration';


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
       <Stack.Screen  name="SignUp" component={SignUpScreen}/>
       <Stack.Screen  name="Login" component={LoginScreen}/>
       <Stack.Screen  name="ForgetPassword" component={ForgetPassword}/>
       <Stack.Screen  name="Registration" component={Registration}/>
      
      
      
     
    </Stack.Navigator>
   </NavigationContainer>
   </>
  )
}

export default App;