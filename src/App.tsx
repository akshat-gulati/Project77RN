import { SafeAreaView, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Layout from './screens/Layout'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: "lightblue"}}}>
      <Stack.Screen name="Home" component={Home} 
      options={{title: "Home Screen", headerStyle: {backgroundColor:"pink"}}}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Layout" component={Layout}/>
    </Stack.Navigator>
  )
}
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: true, tabBarActiveTintColor:"red", tabBarInactiveTintColor:"blue", tabBarLabelStyle:{fontSize: 20}}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor:"pink"}}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./Assets/TabBar/house.fill.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Layout" component={Layout} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})