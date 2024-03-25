import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'



export default function MembershipModel() {
     const navigation = useNavigation();

     return (
          <View>
               <View>
                    <Image source={require('./../../assets/images/beautiful-girl.jpg')}
                         style={{ width: '100%', height: 350, objectFit: "cover" }}
                    />
                    <View style={styles.header}>
                         <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', color: Colors.GRAY }}>Course Detail</Text>
                         <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Ionicons name="close-sharp" size={24} color="black" />
                         </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                         <Text style={styles.button_text}>Get Membership Now</Text>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 50,
          justifyContent: 'space-between',
          margin: 20
     },
     button: {
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          marginTop: 20
     },
     button_text: {
          textAlign: 'center',
          backgroundColor: Colors.PRIMARY,
          // color: '#fff',
          fontSize: 17,
          fontFamily: 'outfit-regular'
     }
})
