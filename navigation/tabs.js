import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CycleScreen from '../screens/CycleScreen';
import HubScreen from "../screens/HubScreen";
import UserScreen from '../screens/UserScreen';
import CalendarScreen from '../screens/CalendarScreen';
import TrackScreen from '../screens/TrackScreen';

import TrackCycleScreen from '../screens/trackingScreens/TrackCycleScreen'

import TrackScreenNavigator from "./CustomNavigation";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#4e4961'
        }}

        >
            {children}
        </View>
    </TouchableOpacity>
);




const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [
                {
                    display: "flex",
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#d0b99a',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                    },
                    null
                ]
            }}
            >
                
            <Tab.Screen
                name="Cycle"
                component={TrackCycleScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}

                        >
                            <Image
                                source={require('../assets/icons/menstruation.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#dfe5ee' : '#100d0d'
                                }}
                            />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}

                        >
                            <Image
                                source={require('../assets/icons/calendar.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#dfe5ee' : '#100d0d'
                                }}
                            />
                        </View>
                    )
                }}
            />

<Tab.Screen
                name="Track"
                component={TrackScreenNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/journal.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: 'white'
                                }}
                            />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}>
                            
                        </CustomTabBarButton>
                    )
                }}>
                </Tab.Screen>

            <Tab.Screen
                name="Hub"
                component={HubScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}

                        >
                            <Image
                                source={require('../assets/icons/hub.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#dfe5ee' : '#100d0d'
                                }}
                            />
                        </View>
                    )
                }} />

            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 2 }}

                        >
                            <Image
                                source={require('../assets/icons/user.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#dfe5ee' : '#100d0d'
                                }}
                            />
                        </View>
                    )
                }} />

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});


export default Tabs