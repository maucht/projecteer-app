import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height

const LogoWithText = ()=>{
  return (
    <SafeAreaView>
        <Image style = {styles.logo} source = {require('../assets/logo-high-edit.png')}></Image>
        <View style = {styles.headerTextView}>
                <Text style = {styles.headerText}>Projecteer</Text>
                <Text style = {styles.headerSlogan}>Unity in Productivity</Text>
        </View>
    </SafeAreaView>
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

    },
    headerTextView:{
        position:'absolute',
        top:vh/5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    headerText:{
        fontSize:40,
        fontFamily:"Playfair",

        color:'white',
    },
    headerSlogan:{
        fontFamily:"Playfair-italic",
        color:'white',
        fontSize:16,
    },
})
export default LogoWithText