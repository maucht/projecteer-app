import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';



const AuthToHome = () => {
    console.log("ran")
    const navigation = useNavigation()
    return(navigation.navigate("Home"))
}
export default AuthToHome