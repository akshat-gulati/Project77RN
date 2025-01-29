import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Search from './screens/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})