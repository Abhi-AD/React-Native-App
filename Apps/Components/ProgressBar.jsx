import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function ProgressBar({ percentage }) {
     const screenWidth = Dimensions.get('screen').width * 0.8;
     const progressWidth = screenWidth * percentage;
     return (
          <View style={styles.container}>
               <View style={[styles.container1,
               { width: progressWidth }
               ]}>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor:Colors.PRIMARY_LIGHT
     },
     container1: {
          height: 7,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 99,
     }
})
