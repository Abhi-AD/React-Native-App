import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../Utils/Colors'
import { client } from './../Utils/kindConfig'
import { AuthContext } from '../../App'

export default function LoginScreen() {
     const { auth, setAuth } = useContext(AuthContext);
     const handleSignUp = async () => {
          const token = await client.register();
          if (token) {
               console.log("User logged in");
               setAuth(true);
               // User was authenticated
          }
     };

     const handleSignIn = async () => {
          const token = await client.login();
          if (token) {
               console.log("User logged in");
               setAuth(true);
               // User was authenticated
          }
     };
     return (
          <View>
               <Image source={require('./../../assets/images/beautiful-girl.jpg')}
                    style={{ width: '100%', height: 350, objectFit: "cover" }}
               />
               <View style={{ padding: 30 }}>
                    <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Welcome To <Text style={{ color: Colors.PRIMARY }}>App</Text></Text>
                    <Text style={{ fontSize: 20, marginTop: 7, color: Colors.GRAY }}>Learn Programing to  become a Developer</Text>
                    {/* Sign in Button */}
                    <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                         <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 18 }}>Sign In</Text>
                    </TouchableOpacity>

                    {/* Create a NEw Account */}
                    <TouchableOpacity onPress={handleSignUp}>
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
