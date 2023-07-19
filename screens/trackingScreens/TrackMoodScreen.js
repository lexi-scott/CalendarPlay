import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackMoodScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text> {route.params}Track Mood Screen</Text>
            <Button>Hello</Button>
        </View>
    );
};

export default TrackMoodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  "#8fcbbc"
    },
});