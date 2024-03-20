import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
export default function CourseItem({ course }) {
     return (
          <View style={styles.container}>
               <Image source={{ uri: course.photo.url }}
                    style={styles.image}
               />
               <View style={styles}>
                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.author}>{course.author}</Text>
                    <View style={styles.chapterdetais}>
                         {course?.chapter?.length ? <View style={styles.detais}>
                              <Ionicons name="book" size={20} color="blue" />
                              <Text style={{ color: Colors.GRAY, fontFamily: 'outfit-regular' }}>{course?.chapter?.length}Chapter</Text>
                         </View> : <View style={styles.detais}>
                              <Ionicons name="logo-youtube" size={20} color='red' />
                              <Text style={{ color: Colors.GRAY, fontFamily: 'outfit-regular' }}>Watch On Youtube</Text>
                         </View>
                         }
                         <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{course.free?'Free':'Paid'}</Text>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: Colors.WHITE,
          width: 260,
          marginRight: 15,
          padding: 10,
          borderRadius: 10,
          gap: 4
     },
     image: {
          width: 240,
          borderRadius: 10,
          height: 110
     },
     title: {
          fontSize: 16,
          fontFamily: 'outfit-bold'
     },
     author: {
          fontSize: 14,
          fontFamily: 'outfit-regular',
          color: Colors.GRAY
     },
     course: {
          display: 'flex',
          gap: 3
     },
     chapterdetais: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 4,
          alignItems: 'center'
     },
     detais: {
          display: 'flex',
          flexDirection: 'row',
          gap: 6,
          alignItems: 'center'

     }
})
