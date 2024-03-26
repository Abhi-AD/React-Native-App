import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';


export default function ProgressCourseItem({course,completedChapter}) {
     const navigation = useNavigation()

     useEffect(()=>{
     },[])

     // total chapter && completed chapter
     const calculatedPerComplted=()=>{
          // (total chapter) /(completed chapter)
          const percentage = (completedChapter/course?.chapter?.length)
          return percentage;

     }



     return (
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('course-detail', {
               course: course
          })}>
               <Image source={{ uri: course.photo.url }}
                    style={styles.image}
               />
               <View style={styles}>
                    <Text style={styles.title}>{course.name}</Text>
                    <Text style={styles.author}>{course.author}</Text>
                    <View style={styles.chapterdetais}>
                         {course?.chapter?.length ? <View style={styles.detais}>
                              <Text style={{fontFamily: 'outfit-regular' }}>{calculatedPerComplted()*100}%</Text>
                         </View> : <View style={styles.detais}>
                              <Ionicons name="logo-youtube" size={20} color='red' />
                              <Text style={{ color: Colors.BLACK, fontFamily: 'outfit-regular' }}>Watch On Youtube</Text>
                         </View>
                         }
                         <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{completedChapter}/{course?.chapter?.length}</Text>
                    </View>
                    <ProgressBar percentage={calculatedPerComplted()}/>
               </View>
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: Colors.WHITE,
          marginRight: 15,
          padding: 10,
          borderRadius: 10,
          gap: 4,
          marginBottom:10,
          marginTop:5
     },
     image: {
          borderRadius: 10,
          height: 170
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
