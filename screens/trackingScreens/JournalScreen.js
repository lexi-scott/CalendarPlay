import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const JournalScreen = ({route}) => {
    return(
        <View style={styles.container}>
            <Text> {route.params}JOURNAL Screen</Text>
        </View>
    );
};

export default JournalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  "#8fcbbc"
    },
});