import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../../App'
import GlobalApi from '../Utils/GlobalApi';
import CourseItem from '../Components/CourseItem';
import ProgressCourseItem from '../Components/ProgressCourseItem';

export default function CourseScreen() {

  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [enrolledCoursesList, setEnrolledCoursesList] = useState();
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    userDetail && getallUserCourses()
  }, [userDetail])


  const getallUserCourses = () => {
    setIsLoading(true);
    GlobalApi.getallUserCourses(userDetail.email).then(resp => {
      setEnrolledCoursesList(resp.userEnrollCourses);
      setIsLoading(false);
    })
  }



  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Course</Text>

      {/* list of course enrollment */}
      <FlatList
        data={enrolledCoursesList}
        refreshing={isLoading}
        onRefresh={()=>getallUserCourses()}
        renderItem={({ item, index }) => (
          <View>
            <ProgressCourseItem
              completedChapter={item?.completedChapter?.length}
              course={item.courseList} />
          </View>
        )}

      />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25
  },
  header: {
    fontFamily: 'outfit-bold',
    fontSize: 27
  }
})
