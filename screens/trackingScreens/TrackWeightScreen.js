import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackWeightScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text> {route.params}Track Weight Screen</Text>
        </View>
    );
};

export default TrackWeightScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  "#8fcbbc"
    },
});