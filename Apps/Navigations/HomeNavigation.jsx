import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen'
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();

export default function HomeNavigation() {
     return (
          <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name='home' component={TabNavigation} />
               <Stack.Screen name='course-detail' component={CourseDetailScreen} />
          </Stack.Navigator>
     )
}