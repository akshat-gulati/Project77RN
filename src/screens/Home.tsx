import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => console.log('Go to Profile')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})