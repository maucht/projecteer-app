import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height

const Logo = ()=>{
  return (
    <Image style = {styles.logo} source = {require('../assets/logo-high-edit.png')}></Image>
  )
}

const styles = StyleSheet.create({
    logo:{
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        position:'absolute',
        alignSelf:'center',
        height:vh/10,
        width:vh/10,
        top:30,
        borderRadius:6,

    }
})
export default Logo