import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
      <Button title="Go to Home" onPress={() => navigation.replace("Home")} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})