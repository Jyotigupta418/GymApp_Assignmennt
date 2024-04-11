import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './Routes';
import Home from '../screens/TabScreens/Home';
import Graph from '../screens/TabScreens/Graph';
import Dumbbell from '../screens/TabScreens/Dumbbell';
import Profile from '../screens/TabScreens/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === Routes.HOME) {
                        iconName = 'home';
                    } else if (route.name === Routes.GRAPH) {
                        iconName = 'chart-bar';
                        size = 30
                    } else if (route.name === Routes.DUMBBELL) {
                        iconName = 'dumbbell';
                    } else if (route.name === Routes.PROFILE) {
                        iconName = 'user';
                    }
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'orange',
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true
            })}
            sceneContainerStyle={{backgroundColor: 'white'}}
            initialRouteName={Routes.HOME}
        >
            <Tab.Screen name={Routes.HOME} component={Home} />
            <Tab.Screen name={Routes.GRAPH} component={Graph} />
            <Tab.Screen name={Routes.DUMBBELL} component={Dumbbell} />
            <Tab.Screen name={Routes.PROFILE} component={Profile} />
        </Tab.Navigator>
    )
}
