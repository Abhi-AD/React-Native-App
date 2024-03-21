import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectionHeading from './SelectionHeading'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
export default function LessionSection({ course }) {
     const [isEnrolled, setIsEnrolled] = useState(false);
     return (
          <View>
               <SelectionHeading heading={'Lession'} />
               <FlatList
                    data={course?.chapter}
                    renderItem={({ item, index }) => (
                         <TouchableOpacity style={styles.lession}>
                              <View style={styles.title}>
                                   <Text style={styles.unit}>{index + 1}</Text>
                                   <Text style={styles.name}>{item.name}</Text>
                              </View>
                              {isEnrolled||index==0 ? <Ionicons name="play-circle" size={34} color={Colors.PRIMARY} />
                                   : <Ionicons name="lock-closed" size={34} color={Colors.GRAY} />}
                         </TouchableOpacity>
                    )}
               />
               <View style={styles.footer}></View>
          </View>
     )
}
const styles = StyleSheet.create({
     lession: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 10,
     },
     title: {
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
     },
     unit: {
          fontSize: 17,
          fontFamily: 'outfit-bold',
          padding: 10,
          backgroundColor: Colors.PRIMARY_LIGHT,
          borderRadius: 99,
          width: 40,
          height: 40,
          textAlign: 'center',
          color: Colors.PRIMARY
     },
     name: {
          fontFamily: 'outfit-medium',
          fontSize: 17
     },
     footer:{
          height:50
     }
})
