import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import CourseIntro from '../Components/CourseIntro';
import SourceSection from '../Components/SourceSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import LessionSection from '../Components/LessionSection';
import { UserDetailContext } from '../../App';
import GlobalApi from '../Utils/GlobalApi';

export default function CourseDetailScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [course, setCourse] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [userEnrollment, setUserEnrollment] = useState();


  useEffect(() => {
    setCourse(params.course)
    params && userDetail && checkIsUserEnrollmentToCourse();
  }, [params && userDetail])

  const checkIsUserEnrollmentToCourse = () => {
    GlobalApi.checkUserCourseEnrollment(params.course?.slug, userDetail.email).then(resp => {
      console.log("----", resp);
      setUserEnrollment(resp.userEnrollCourses);
    })

  }
  const onEnrollmentPress = () => {
    if (course?.free) {
      GlobalApi.saveUserCourseEnrollment(course.slug, userDetail.email).then(resp => {
        console.log(resp);
        if (resp) {
          Alert.alert("Great!!!", "You just enrollment to new Course......!", [
            {
              text: "Ok",
              onPress: () => console.log("Ok Press"),
              style: "cancel"
            }
          ])
          checkIsUserEnrollmentToCourse();
        }
      })
    }
    else {
      console.log("Need MemberShip....!")
    }

  }





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
      <SourceSection userEnrollment={userEnrollment} course={course} />
      {/* Enroll section */}
      <EnrollmentSection userEnrollment={userEnrollment} onEnrollmentPress={() => onEnrollmentPress()} />
      {/* Lession section */}
      <LessionSection course={course} userEnrollment={userEnrollment} />
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
