import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import SelectionHeading from './SelectionHeading';

export default function CategoryList({ categories }) {
     const [activeIndex, setActiveIndex] = useState();
     return (
          <View style={{ marginTop: 20 }}>
               <SelectionHeading heading={'Category'} />
               <FlatList
                    data={categories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                         <TouchableOpacity style={[styles.container, activeIndex === index && { borderWidth: 1, borderColor: Colors.PRIMARY }]} onPress={() => { setActiveIndex(index) }}>
                              <Image source={{ uri: item?.icon?.url }}
                                   style={{ width: 64, height: 40 }}
                              />
                              <Text style={{ textAlign: 'center', marginTop: 7 }}>{item?.name}</Text>
                         </TouchableOpacity>
                    )}
               />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: Colors.WHITE,
          padding: 15,
          marginRight: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          width: 90,
     }
})
