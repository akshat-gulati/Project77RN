import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View>
      <Text>Search</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})