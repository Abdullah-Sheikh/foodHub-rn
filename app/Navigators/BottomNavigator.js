import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from '../screens/Main';
import Location from '../screens/Location';
import Cart from '../screens/Cart';
import Favorites from '../screens/Favorites';
import Notification from '../screens/Notification';
import FavoritesScreen from '../screens/FavoritesScreen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
   
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'location' : 'location-outline';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          
          


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
        
      })}>
        
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Notification" component={Notification} />

      </Tab.Navigator>
   
  );
}