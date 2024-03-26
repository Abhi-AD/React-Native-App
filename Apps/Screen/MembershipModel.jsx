import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GlobalApi from '../Utils/GlobalApi';
import { MembershipContext, UserDetailContext } from '../../App';

export default function MembershipModel() {
     const [selectedMembership, setSelectedMembership] = useState();
     const navigation = useNavigation();
     const { userDetail, setUserDetail } = useContext(UserDetailContext);
     const {isMember,setIsMember}=useContext(MembershipContext)

     const saveNewMemberShip = () => {
          GlobalApi.createNewMembership(userDetail.email).then(resp => {
               if (resp) {
                    setIsMember(true)
                    Alert.alert("Great!!!", "Thank you for joinnig membership", [
                         {
                              text: "Ok",
                              onPress: () => navigation.goBack(),
                              style: "cancel"
                         }
                    ]);
               }
          })
     }
     return (
          <View style={styles.container}>
               <Image
                    source={require('./../../assets/images/beautiful-girl.jpg')}
                    // blurRadius={10}
                    // blurType="dark"
                    style={{ width: '100%', height: 350 }}
               />


               <View style={styles.header}>
                    <Text style={styles.header_title}>Course Detail</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                         <Ionicons name="close-sharp" size={24} color={Colors.WHITE} />
                    </TouchableOpacity>
               </View>

               <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.option}>
                         <Text style={styles.optionText}>1 Month</Text>
                         <Text style={styles.optionText}>$4.99</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                         <Text style={styles.optionText}>1 Year</Text>
                         <Text style={styles.optionText}>$39.99</Text>
                    </TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.button} onPress={() => setSelectedMembership&&saveNewMemberShip()}>
                    <Text style={styles.button_text}>Get Membership Now</Text>
               </TouchableOpacity>
               <View>
                    <Text style={styles.container_button}>You can purchase the membership to access all courses along with source code and extras.</Text>
                    <Text style={styles.container_button}>If you want to cancel membership then email us on:</Text>
                    <Text style={styles.container_button}>dangiabhi332@gmail.com</Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     header: {
          position: 'absolute',
          padding: 20,
          marginTop: 25,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
     },
     header_title: {
          fontSize: 25,
          fontFamily: 'outfit-bold',
          color:Colors.WHITE
     },

     optionsContainer: {
          flexDirection: 'row',
          marginHorizontal: 20,
          marginBottom: 10,
     },
     optionPressed: {
          backgroundColor: Colors.PRIMARY,
          borderColor: Colors.PRIMARY,
     },
     option: {
          flex: 1,
          alignItems: 'center',
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: Colors.GRAY,
          borderRadius: 10, // Adjust the border radius as needed
     },
     borderRight: {
          borderRightWidth: 1,
          borderRightColor: Colors.GRAY,
     },
     optionText: {
          fontSize: 16,
          fontFamily: 'outfit-bold',
          color: Colors.GRAY,
     },
     marginLeft: {
          marginLeft: 10,
     },





     button: {
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          marginHorizontal: 20
     },
     button_text: {
          textAlign: 'center',
          color: '#fff',
          fontSize: 17,
          fontFamily: 'outfit-regular',
     },
     container_button: {
          color: Colors.GRAY,
          padding: 5,
          textAlign: 'center',
     },
});
