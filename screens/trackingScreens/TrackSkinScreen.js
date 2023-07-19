import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackSkinScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text> {route.params}Track Skin Screen</Text>
        </View>
    );
};

export default TrackSkinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  "#8fcbbc"
    },
});