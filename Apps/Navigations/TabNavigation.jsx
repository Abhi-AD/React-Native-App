import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import CourseScreen from '../Screen/CourseScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
     return (
          <Tab.Navigator screenOptions={{
               headerShown: false,
               tabBarActiveTintColor: Colors.PRIMARY,
          }}>
               <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                         tabBarIcon: ({color, size}) => (
                              <Ionicons name="home" size={24} color={color} />
                         ),
                         tabBarLabel: ({color}) => (
                              <Text style={{ color: color }}>Home</Text>
                         )
                    }}
               />
               <Tab.Screen name='Course' component={CourseScreen}
                    options={{
                         tabBarIcon: ({color, size}) => (
                              <Ionicons name="book" size={24} color={color} />
                         ),
                         tabBarLabel: ({color}) => (
                              <Text style={{ color: color }}>Course</Text>
                         )
                    }} />
               <Tab.Screen name='Profile' component={ProfileScreen}
                    options={{
                         tabBarIcon: ({color, size}) => (
                              <Ionicons name="person-circle" size={24} color={color} />
                         ),
                         tabBarLabel: ({color}) => (
                              <Text style={{ color: color }}>Profile</Text>
                         )
                    }} />
          </Tab.Navigator>
     )
}