import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import SelectionHeading from './SelectionHeading'

export default function CourseIntro({ course }) {
     return course && (
          <View>
               <Video
                    style={styles.video}
                    soundPlay={true}
                    source={{
                         uri: course?.chapter[0]?.video?.url,
                    }}
                    useNativeControls={true}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
               />
               <View style={styles.main}>
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
                         <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>{course.free ? 'Free' : 'Paid'}</Text>
                    </View>
                    <SelectionHeading heading={'Description'} />
                    <Text numberOfLines={4} style={{ marginTop: -10, fontFamily: 'outfit-regular' }}>{course?.description}</Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     video: {
          width: '100%',
          height: 200
     },
     main: {
          display: 'flex',
          marginTop: 10,
          gap: 10,
          backgroundColor: Colors.WHITE,
          padding: 15,
          borderRadius: 10
     },
     title: {
          fontFamily: 'outfit-bold',
          fontSize: 20,
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
