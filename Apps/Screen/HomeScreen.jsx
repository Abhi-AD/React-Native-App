import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import {client} from '../Utils/kindConfig'
import { AuthContext } from '../../App';

export default function HomeScreen() {
  const {auth,setAuth} =useContext(AuthContext)
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='LogOut' onPress={handleLogout} />
    </View>
  )
}