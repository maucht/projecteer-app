import { View, Text } from 'react-native'
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'

export default function NavigationButton(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={props.button} onPress = {()=>navigation.navigate(props.nav)}>
        <Text style={props.buttonText}>{props.content}</Text>
    </TouchableOpacity>
  )
}