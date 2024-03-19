import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function LoginScreen() {
     return (
          <View>
               <Image source={require('./../../assets/images/beautiful-girl.jpg')}
                    style={{ width: '100%', height: 400, objectFit: "cover" }}
               />
               <View style={{ padding: 30 }}>
                    <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Welcome To <Text style={{ color: Colors.PRIMARY }}>App</Text></Text>
                    <Text style={{ fontSize: 20, marginTop: 7, color: Colors.GRAY }}>Learn Programing to  become a Developer</Text>
                    {/* Sign in Button */}
                    <TouchableOpacity onPress={() => console.log("Click Sign in.....!")} style={styles.button}>
                         <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 18 }}>Sign In</Text>
                    </TouchableOpacity>

                    {/* Create a NEw Account */}
                    <TouchableOpacity onPress={() => console.log("Click Create a Account...!")}>
                         <Text style={{ marginTop: 10, color: Colors.PRIMARY, textAlign: 'center' }}>Create a New Account</Text>
                    </TouchableOpacity>

               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     button: {
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 90,
          marginTop: 60,
     }
})