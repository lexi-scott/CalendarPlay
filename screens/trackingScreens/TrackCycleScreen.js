import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackCycleScreenScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text> {route.params}Track Cycle Screen poop</Text>
            <Text>Use keep awake</Text>
        </View>
    );
};

export default TrackCycleScreenScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  "#8fcbbc"
    },
});