import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
      <Button title="Go to Layout" onPress={() => navigation.navigate("Layout")} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})