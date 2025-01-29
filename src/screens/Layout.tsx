import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log(`Width: ${width}, Height: ${height}`);

const Layout = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
        <View style={styles.box1Style} />
        <View style={styles.box2Style} />

            </View>
        </View>

    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        padding: "3%",
        height: `${(350 / height) * 100}%`,
        width: `${(200 / width) * 100}%`,
        backgroundColor: "grey",
        justifyContent: "space-between"
    },
    box1Style: {
        height: "20%",
        width: "30%",
        backgroundColor: "red",

    },
    box2Style: {
        alignSelf: "flex-end",
        height: "20%",
        width: "30%",
        backgroundColor: "red",

    }
})