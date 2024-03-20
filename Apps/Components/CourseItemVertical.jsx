import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function CourseItemHorizontal({ course }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: course.photo.url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.title}>{course.name}</Text>
          <Text style={styles.author}>{course.author}</Text>
        </View>
        <View style={styles.chapterDetails}>
          {course?.chapter?.length ? (
            <View style={styles.detailItem}>
              <Ionicons name="book" size={20} color="blue" />
              <Text style={styles.detailText}>{course?.chapter?.length} Chapters</Text>
            </View>
          ) : (
            <View style={styles.detailItem}>
              <Ionicons name="logo-youtube" size={20} color="red" />
              <Text style={styles.detailText}>Watch On Youtube</Text>
            </View>
          )}
          <Text style={styles.price}>{course.free ? 'Free' : 'Paid'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'outfit-bold',
  },
  author: {
    fontSize: 14,
    fontFamily: 'outfit-regular',
    color: Colors.GRAY,
  },
  chapterDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  detailText: {
    color: Colors.GRAY,
    fontFamily: 'outfit-regular',
    marginLeft: 5,
  },
  price: {
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
  },
});
