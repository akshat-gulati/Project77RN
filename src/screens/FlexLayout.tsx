import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log(`Width: ${width}, Height: ${height}`);

const FlexLayout = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.box1Style} />
                <View style={styles.box2Style} />
            </View>
        </View>
    );
};

export default FlexLayout;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 350,
        width: 200,
        backgroundColor: 'grey',
        justifyContent: 'space-between',
    },
    box1Style: {
        flex: 1,
        backgroundColor: 'red',
    },
    box2Style: {
        alignSelf: 'flex-end',
        flex: 1, 
        backgroundColor: 'red',
    },
});


