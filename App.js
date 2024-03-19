import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screen/LoginScreen';
import { useEffect } from 'react';
import { client } from './Apps/Utils/kindConfig';




export default function App() {

  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      console.log('User is already logged in');
      // Need to implement, e.g: call an api, etc...
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };


  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
