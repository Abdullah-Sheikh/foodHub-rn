import { View, Text } from 'react-native'
import React  ,{useEffect, useState} from 'react'
import auth from '@react-native-firebase/auth';

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from '../screens/onBoarding';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Registration from '../screens/Registration';
import VerfiyCode from '../screens/VerfiyCode';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../Navigators/BottomNavigator';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import DrawerNavigation from '../Navigators/DrawerNavigation';
import FoodDescription from '../screens/FoodDescription';
import ProfileScreen from '../screens/ProfileScreen';
import AddressScreen from '../screens/AddressScreen';
import MyOrders from '../screens/MyOrders';
import FavoritesScreen from '../screens/FavoritesScreen';

export default function AppNavigator() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const Stack = createNativeStackNavigator();

    useEffect(() => {

   
        SplashScreen.hide();
    } );

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    

  return (
   <>
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

      {  user ? 

       <>
       <Stack.Screen name='Drawer' component={DrawerNavigation}/>
       <Stack.Screen  name="Profile" component={ProfileScreen}/>
       <Stack.Screen  name="Address" component={AddressScreen}/>
       <Stack.Screen name='Orders' component={MyOrders}/>
       <Stack.Screen  name='FoodDescription' component={FoodDescription}/>
       </>
      
       :
       <>
      <Stack.Screen  name="OnBoarding" component={OnBoarding}/>
      <Stack.Screen  name="SignUp" component={SignUpScreen}/>
       <Stack.Screen  name="Login" component={LoginScreen}/>
       <Stack.Screen  name="ForgetPassword" component={ForgetPassword}/>
       <Stack.Screen  name="Registration" component={Registration}/>
       <Stack.Screen  name="VerifyCode" component={VerfiyCode}/>
       </>

      }



      
      

       
      
      
     
    </Stack.Navigator>

    
   </NavigationContainer>
   </>
  )
}