import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function SourceSection() {
     return (
          <View style={styles.main}>
               <View style={styles.container}>
                    <Image source={require('../../assets/images/open-source.png')} style={styles.image} />
                    <Text style={styles.text}>Source Code</Text>
               </View>
               <View style={styles.container}>
                    <Image source={require('../../assets/images/demo.jpeg')} style={styles.image} />
                    <Text style={styles.text}>Demo</Text>
               </View>
               <View style={styles.container}>
                    <Image source={require('../../assets/images/youtube.jpg')} style={styles.image} />
                    <Text style={styles.text}>Youtube</Text>
               </View>
          </View>
     )
}
const styles = StyleSheet.create({
     main: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          gap:20,
          marginBottom:20,
     },
     container: {
          backgroundColor: Colors.WHITE,
          padding: 20,
          alignItems: 'center',
          borderRadius: 10,
          width:100,
          borderWidth:1.2
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
