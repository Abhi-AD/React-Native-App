import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SelectionHeading from '../Components/SelectionHeading';
import Courseitem from './CourseItem';

export default function CourseList({ courseList }) {
     return (
          <View>
               <FlatList
                    data={courseList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                         <Courseitem course={item} />
                    )}
               />
          </View>
     )
}