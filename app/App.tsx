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
import VerfiyCode from './screens/VerfiyCode';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './Navigators/BottomNavigator';
import Home from './screens/Home';
import Cart from './screens/Cart';
import DrawerNavigation from './Navigators/DrawerNavigation';
import FoodDescription from './screens/FoodDescription';
import ProfileScreen from './screens/ProfileScreen';
import AddressScreen from './screens/AddressScreen';
import MyOrders from './screens/MyOrders';

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
       <Stack.Screen name='Orders' component={MyOrders}/>
       <Stack.Screen name='Drawer' component={DrawerNavigation}/>
       <Stack.Screen  name="OnBoarding" component={OnBoarding}/>
       <Stack.Screen  name="SignUp" component={SignUpScreen}/>
       <Stack.Screen  name="Login" component={LoginScreen}/>
       <Stack.Screen  name="ForgetPassword" component={ForgetPassword}/>
       <Stack.Screen  name="Registration" component={Registration}/>
       <Stack.Screen  name="VerifyCode" component={VerfiyCode}/>
       <Stack.Screen  name="Profile" component={ProfileScreen}/>
       <Stack.Screen  name="Address" component={AddressScreen}/>
       
       <Stack.Screen  name='FoodDescription' component={FoodDescription}/>
      

       
      
      
     
    </Stack.Navigator>

    
   </NavigationContainer>
   </>
  )
}

export default App;