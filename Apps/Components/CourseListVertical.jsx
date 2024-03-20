import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SelectionHeading from '../Components/SelectionHeading';
import CourseItemVertical from './CourseItemVertical';

export default function CourseListVertical({ courseList }) {
     return (
          <View>
               <FlatList
                    data={courseList}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                         <CourseItemVertical course={item} />
                    )}
               />
          </View>
     )
}