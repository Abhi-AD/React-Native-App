import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import CourseIntro from '../Components/CourseIntro';
import SourceSection from '../Components/SourceSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import LessionSection from '../Components/LessionSection';

export default function CourseDetailScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [course, setCourse] = useState();
  useEffect(() => {
    setCourse(params.course)
  }, [params])
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', color: Colors.GRAY }}>Course Detail</Text>
      </View>
      {/* Course Intro */}
      <CourseIntro course={course} />
      {/* Source section */}
      <SourceSection />
      {/* Enroll section */}
      <EnrollmentSection />
      {/* Lession section */}
      <LessionSection course={course} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  main: {
    padding: 20,
    marginTop: 25
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50
  }
})
