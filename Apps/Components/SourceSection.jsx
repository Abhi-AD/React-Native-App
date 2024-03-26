import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

export default function SourceSection({ userEnrollment, course }) {
     const [isMember, setIsMember] = useState();
     const navigation = useNavigation();
     const onSourceClick = (url) => {
          if (isMember) {
               Linking.openURL(url)
          }
          else{
               navigation.navigate("membership")
          }
     }
     return (
          <View style={styles.main}>
               <TouchableOpacity style={styles.container} onPress={() => onSourceClick(course.sourceCode)}>
                    <Image source={require('../../assets/images/open-source.png')} style={styles.image} />
                    <Text style={styles.text}>Source Code</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.container} onPress={() => onSourceClick(course.demoUrl)}>
                    <Image source={require('../../assets/images/demo.jpeg')} style={styles.image} />
                    <Text style={styles.text}>Demo</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.container} onPress={() => onSourceClick(course.youtubeUrl)}>
                    <Image source={require('../../assets/images/youtube.jpg')} style={styles.image} />
                    <Text style={styles.text}>Youtube</Text>
               </TouchableOpacity>
          </View>
     )
}
const styles = StyleSheet.create({
     main: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          gap: 20,
          marginBottom: 20,
     },
     container: {
          backgroundColor: Colors.WHITE,
          padding: 20,
          alignItems: 'center',
          borderRadius: 10,
          width: 100,
          borderWidth: 1.2
     },
     image: {
          width: 40,
          height: 40
     },
     text: {
          fontSize: 14,
          fontFamily: 'outfit-regular'
     }
})
