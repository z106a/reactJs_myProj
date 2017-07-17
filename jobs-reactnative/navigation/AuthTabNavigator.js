import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';

import MainTabNavigator from './MainTabNavigator';

export default TabNavigator(
    {
        welcome: {
            screen: WelcomeScreen,
        },
        auth: {
            screen: AuthScreen,
        },
        main: {
            screen: MainTabNavigator
        }
    },
    {
        lazy: true,
        navigationOptions: ({ navigation }) => ({
            // Set the tab bar icon
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'welcome':
                        iconName = 'home';
                        break;
                    case 'auth':
                        iconName = 'book';
                        break;
                    case 'main':
                        iconName = 'houzz'
                        break
                }
                return (
                    <FontAwesome
                        name={iconName}
                        size={32}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        // Put tab bar on bottom of screen on both platforms
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        // Disable animation so that iOS/Android have same behaviors
        animationEnabled: false,
        // Don't show the labels
        tabBarOptions: {
            showLabel: false,
        },
    }
);
