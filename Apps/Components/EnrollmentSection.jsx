import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Utils/Colors'

export default function EnrollmentSection({ course, userEnrollment, onEnrollmentPress, onContinuePress }) {
     // const [isEnrolled, setIsEnrolled] = useState(false);

     useEffect(() => {

     }, [])

     const watchOnYoutube=()=>{
          Linking.openURL(course.youtubeUrl)
     }


     return course&&(
          <View style={styles.container}>
               {!course.chapter[0] && <TouchableOpacity onPress={() => watchOnYoutube()}>< Text style={styles.header}>Watch On Youtube</Text></TouchableOpacity>}
               {course.chapter[0] && userEnrollment != [] ?
                    <TouchableOpacity onPress={() => onContinuePress()}>< Text style={styles.header}>Continue</Text></TouchableOpacity>
                    : <TouchableOpacity onPress={() => onEnrollmentPress()}><Text style={styles.header}>Enroll to Course</Text></TouchableOpacity>
               }</View >
     )
}

const styles = StyleSheet.create({
     container: {
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10
     },
     header: {
          textAlign: 'center',
          fontFamily: 'outfit-medium',
          fontSize: 15,
          color: Colors.WHITE
     }
})
