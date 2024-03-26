import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../Utils/Colors'

export default function EnrollmentSection({ userEnrollment, onEnrollmentPress,onContinuePress }) {
     // const [isEnrolled, setIsEnrolled] = useState(false);

     useEffect(() => {

     }, [])


     return (
          <View style={styles.container}>
               {userEnrollment?.length > 0 ?
                    <TouchableOpacity onPress={() => onContinuePress()}>< Text style={styles.header}>Continue</Text></TouchableOpacity>
                    :<TouchableOpacity onPress={() => onEnrollmentPress()}><Text style={styles.header}>Enroll to Course</Text></TouchableOpacity>
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
