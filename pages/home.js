import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/logo'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Welcome Home</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})