import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile", {id: 1, name: "Akshat Gulati"})} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})