import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import CourseIntro from '../Components/CourseIntro';
import SourceSection from '../Components/SourceSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import LessionSection from '../Components/LessionSection';
import { MembershipContext, ReloadMethodsContext, UserDetailContext } from '../../App';
import GlobalApi from '../Utils/GlobalApi';

export default function CourseDetailScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [course, setCourse] = useState();
  const { isMember, setIsMember } = useContext(MembershipContext);
  const {reload, setReload} = useContext(ReloadMethodsContext);

  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [userEnrollment, setUserEnrollment] = useState();



  useEffect(() => {
    setCourse(params.course)
    params && userDetail && checkIsUserEnrollmentToCourse();
  }, [params && userDetail])


  // reload method 
  useEffect(() => {
    reload && checkIsUserEnrollmentToCourse();
  }, [reload])

  const checkIsUserEnrollmentToCourse = (course) => {
    GlobalApi.checkUserCourseEnrollment(course?.slug, userDetail.email).then(resp => {
      // console.log("---->", resp);
      setUserEnrollment(resp.userEnrollCourses);
    })

  }
  const onEnrollmentPress = () => {
    if (course?.free) {
      saveUserEnrollment();
    }
    else {
      if (!isMember) {
        navigation.navigate('membership')
        return;
      }
      saveUserEnrollment();
      // check is Member
    }
  }

  const saveUserEnrollment = () => {
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
        checkIsUserEnrollmentToCourse(course);
      }
    })
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
      <EnrollmentSection course={course} userEnrollment={userEnrollment} onEnrollmentPress={() => onEnrollmentPress()} onContinuePress={() => navigation.navigate('watch-lession', { course: course, userEnrollment: userEnrollment })} />
      {/* Lession section */}
      {course?.chapter[0]&&<LessionSection course={course} userEnrollment={userEnrollment} />}
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
