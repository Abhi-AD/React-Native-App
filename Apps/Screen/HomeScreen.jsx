import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { client } from '../Utils/kindConfig'
import { AuthContext } from '../../App';
import Header from '../Components/Header';
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext)
  const [categories, setCategories] = useState();
  useEffect(() => {
    getCateogory();
  }, [])


  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };
  //get category list
  const getCateogory = () => {
    GlobalApi.getCateogory().then(resp => {
      setCategories(resp.categories);
    })
  }
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Header />
      <CategoryList categories={categories} />
    </View>
  )
}