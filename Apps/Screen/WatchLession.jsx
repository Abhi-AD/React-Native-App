import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react/cjs/react.production.min';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import LessionSection from '../Components/LessionSection';
import GlobalApi from '../Utils/GlobalApi';
import { ReloadMethodsContext } from '../../App';


export default function WatchLession() {
     const { params } = useRoute();
     const { userEnrollment, serUserEnrollment } = useState(params?.userEnrollment);
     const [course, setCourse] = useState(params?.course);
     const [selectedChapter, setSelectedChapter] = useState();
     const {reload, setReload} = useContext(ReloadMethodsContext);
     const navigation = useNavigation()


     useEffect(() => {
          params && setSelectedChapter(params?.course?.chapter[0]);
          params&&serUserEnrollment(params?.userEnrollment)
     }, [params])

     const onChapterComplted=() => {
          GlobalApi.markChapterCompleted(userEnrollment[0].id,selectedChapter.id).then(resp=>{
               console.log("-----",resp)
               setReload("Update Enrollment")
               ToastAndroid.show('Chapter Mark Completed!',ToastAndroid.SHORT);
          })
     }

     return selectedChapter && (
          <ScrollView style={{ padding: 20 }}>
               <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                         <Ionicons name="arrow-back-circle" size={40} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 27, fontFamily: 'outfit-bold' }}>Lessons</Text>
               </View>
               {selectedChapter && <Video
                    style={styles.video}
                    soundPlay={true}
                    source={{
                         uri: selectedChapter.video?.url,
                    }}
                    useNativeControls={true}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
               />}
               <View style={styles.select_chapter}>
                    <Text style={styles.select_chapter_name}>{selectedChapter?.name}</Text>
                    <TouchableOpacity style={styles.select_chapter_complete} onPress={() => onChapterComplted()}>
                         <Text style={styles.select_chapter_completed}>Mark Completed</Text>
                    </TouchableOpacity>
               </View>
               <LessionSection course={course} userEnrollment={userEnrollment} onChapterSelect={(chapter) => setSelectedChapter(chapter)} selectedChapter={selectedChapter} />
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     header: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 80
     },
     video: {
          width: '100%',
          height: 200
     },
     select_chapter: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20
     },
     select_chapter_name: {
          fontFamily: 'outfit-bold',
          fontSize: 20,
          flex: 1
     },
     select_chapter_complete: {
          backgroundColor: Colors.PRIMARY,
          padding: 4,
          borderRadius: 5,
          paddingHorizontal: 8
     },
     select_chapter_completed: {
          color: Colors.WHITE,
          textAlign: 'center',
          fontFamily: 'outfit-regular'
     }
})