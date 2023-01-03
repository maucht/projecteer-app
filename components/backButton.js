import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesome } from '@expo/vector-icons'
var vw = Dimensions.get('window').width
var vh = Dimensions.get('window').height

const BackButton = (props) => {
  return (
    <View>
      <FontAwesome name = {'arrow-left'} position="absolute" color='white' size={vw/20}/>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({

})