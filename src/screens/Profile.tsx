import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
  const { id, name } = route.params
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>ID: {id}</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate("Search")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})