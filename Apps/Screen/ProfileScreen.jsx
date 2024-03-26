import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { UserDetailContext } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { client } from '../Utils/kindConfig';

export default function ProfileScreen({ navigation }) {
  const { userDetail } = useContext(UserDetailContext);

  const onMenuClick = async (item) => {
    if (item?.url) {
      Linking.openURL(item.url);
    } else if (item.path) {
      navigation.navigate(item.path);
    } else if (item.name === 'Logout') {
      const loggedOut = await client.logout();
      if (loggedOut) {
        navigation.navigate('login');
      }
    }
  };

  const menu = [
    {
      id: 1,
      name: 'Explore',
      path: 'Home',
      icon: 'search',
    },
    {
      id: 2,
      name: 'Course',
      path: 'Course',
      icon: 'book',
    },
    {
      id: 3,
      name: 'Abhi-AD',
      path: 'school',
      url: 'https://github.com/Abhi-AD',
      icon: 'person',
    },
    {
      id: 4,
      name: 'Youtube',
      url: 'https://www.youtube.com/',
      icon: 'logo-youtube',
    },
    {
      id: 5,
      name: 'Logout',
      icon: 'power',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {userDetail && (
        <View style={styles.user}>
          {/* <Image source={{ uri: userDetail.picture }} style={styles.image} /> */}
          <Image source={require('./../../assets/images/beautiful-girl.jpg')} style={styles.image} />
          <Text style={styles.given_name}>{userDetail.given_name}</Text>
          <Text style={styles.email}>{userDetail.email}</Text>
        </View>
      )}

      {/* menu section */}
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={menu}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onMenuClick(item)} style={styles.menu}>
              <Ionicons name={item.icon} size={34} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'outfit-regular', fontSize: 22 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  header: {
    fontFamily: 'outfit-bold',
    fontSize: 27,
    marginBottom: 20,
  },
  user: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  given_name: {
    fontFamily: 'outfit-bold',
    fontSize: 26,
  },
  email: {
    fontFamily: 'outfit-regular',
    fontSize: 18,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
});
