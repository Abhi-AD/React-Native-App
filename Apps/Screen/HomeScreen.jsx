import { View, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { client } from '../Utils/kindConfig';
import { AuthContext } from '../../App';
import Header from '../Components/Header';
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';
import CourseList from '../Components/CourseList';
import SelectionHeading from '../Components/SelectionHeading';
import CourseListVertical from '../Components/CourseListVertical';

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext);
  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCateogory();
    getCourseList();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };

  // Get category list
  const getCateogory = () => {
    GlobalApi.getCateogory().then(resp => {
      setCategories(resp?.categories);
    });
  };

  // Get course list
  const getCourseList = () => {
    GlobalApi.getCourseList().then(resp => {
      setCourseList(resp?.courseLists);
    });
  };

  const getFilterCourseList = (tag) => {
    const result = courseList.filter((item) => item.tag.includes(tag));
    return result;
  };

  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <ScrollView>
        <Header />
        <SelectionHeading heading={'Category'} />
        <CategoryList categories={categories} />

        {/* All courses */}
        <SelectionHeading heading={'Latest Course'} />
        <CourseList courseList={courseList} />

        {/* Filtered courses */}
        <SelectionHeading heading={'Python Course'} />
        <CourseListVertical courseList={getFilterCourseList('Python')} />
      </ScrollView>
    </View>
  );
}
