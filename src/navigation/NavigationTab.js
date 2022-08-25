import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Products from '../screens/Products';
import Details from '../screens/Details';

const Tab = createBottomTabNavigator();


export default function NavigationTab() {
  return (
   <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Settings" component={SettingsScreen} />
       <Tab.Screen name="Products" component={Products} />
       <Tab.Screen name="Details" component={Details} />
   </Tab.Navigator>
  )
}