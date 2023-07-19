import React, { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgressBase from 'react-native-circular-progress-indicator';
import DropDownPicker from 'react-native-dropdown-picker';


const CycleScreen = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Cycle', value: 'cycle' },
        { label: 'Science', value: 'science' },
        { label: 'Skin', value: 'skin' },
        { label: 'Mood', value: 'mood' },
        { label: 'Weight', value: 'weight' }
    ]);

    const props = {
        activeStrokeWidth: 25,
        inActiveStrokeWidth: 25,
        inActiveStrokeOpacity: 0.2
    };

    return (
        <View style={styles.container} >
            <DropDownPicker
            style = {{
                flex: 2,
                marginBottom: 120
            }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select View"
            />

            <CircularProgressBase
                initialValue={1}
                value={50}
                radius={130}
                progressValueColor={'#444e76'}
                strokeLinecap='cirle'
                strokeColorConfig={[
                    { color: 'red', value: 25 },
                    { color: 'purple', value: 50 },
                    { color: 'blue', value: 70 },
                    { color: 'green', value: 100 },
                ]}
            />
        </View>
    );
};

export default CycleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#dfe5ee"
    },
});