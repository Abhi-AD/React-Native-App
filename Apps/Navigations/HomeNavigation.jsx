import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import CourseDetailScreen from '../Screen/CourseDetailScreen'
import TabNavigation from './TabNavigation';
import MembershipModel from '../Screen/MembershipModel';
import WatchLession from '../Screen/WatchLession';
const Stack = createStackNavigator();

export default function HomeNavigation() {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name='home' component={TabNavigation} />
               <Stack.Screen name='course-detail' component={CourseDetailScreen} />
               <Stack.Screen name='membership' component={MembershipModel}
                    options={{
                         presentation: "modal"
                    }}
               />
               <Stack.Screen name='watch-lession' component={WatchLession} />
          </Stack.Navigator>
     )
}