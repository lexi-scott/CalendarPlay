import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import TrackScreen from '../screens/TrackScreen';
import JournalScreen from '../screens/trackingScreens/JournalScreen';
import TrackSkinScreen from '../screens/trackingScreens/TrackSkinScreen'
import TrackMoodScreen from '../screens/trackingScreens/TrackMoodScreen'
import TrackWeightScreen from '../screens/trackingScreens/TrackWeightScreen'
import TrackCycleScreen from '../screens/trackingScreens/TrackCycleScreen'

const Stack = createNativeStackNavigator();

const TrackScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="TrackNested"
                component={TrackScreen}
                options={{ title: ''}}
            />
            <Stack.Screen 
                name="Journal"
                component={JournalScreen}
            />
            <Stack.Screen 
                name="Track Skin"
                component={TrackSkinScreen}
            />
             <Stack.Screen 
                name="Track Mood"
                component={TrackMoodScreen}
            />
             <Stack.Screen 
                name="Track Weight"
                component={TrackWeightScreen}
            />
             <Stack.Screen 
                name="Track Cycle"
                component={TrackCycleScreen}
            />
        </Stack.Navigator>
    )
}

export default TrackScreenNavigator