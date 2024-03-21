import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'

export default function EnrollmentSection() {
     const [isEnrolled, setIsEnrolled] = useState(false);
     return (
          <View style={styles.container}>
               {isEnrolled ?
                    < Text style={styles.header}>Continue</Text>
                    : <Text style={styles.header}>Enroll to Course</Text>
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
