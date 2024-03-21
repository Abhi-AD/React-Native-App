import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screen/LoginScreen';
import { createContext, useEffect, useState } from 'react';
import { client } from './Apps/Utils/kindConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
import HomeNavigation from './Apps/Navigations/HomeNavigation';


export const AuthContext = createContext()
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setAuth(true)
      // Need to implement, e.g: call an api, etc...
    } else {
      setAuth(false)
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };


  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <AuthContext.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
          {auth ? <HomeNavigation /> : <LoginScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
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
