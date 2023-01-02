import { View, Text } from 'react-native'
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'

var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height

export default function NavigationButton(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={props.button != null ? props.button: styles.debugButton} onPress = {()=>navigation.navigate(props.nav!=null ? props.nav : 'About')}>
        <Text style={props.buttonText}>{props.content}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  debugButton:{
    width:vw/3,
    height:vh/10,
    top:vh/1.3,
    justifyContent:'center',
    backgroundColor:'black',
    borderRadius:16,

},

})