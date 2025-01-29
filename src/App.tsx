import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Home />
      </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})