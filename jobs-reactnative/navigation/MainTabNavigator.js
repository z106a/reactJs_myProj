import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import {Icon} from 'react-native-elements';

import Colors from '../constants/Colors';

import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewStackNavigator from './ReviewStackNavigator';

export default TabNavigator(
    {
        map: {
            screen: MapScreen,
        },
        deck: {
            screen: DeckScreen,
        },
        review: {
            screen: ReviewStackNavigator
        }

    },
    {
        navigationOptions: ({ navigation }) => ({
            // Set the tab bar icon
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'map':
                        iconName = 'my-location';
                        break;
                    case 'deck':
                        iconName = 'description';
                        break;
                    case 'review':
                        iconName = 'favorite';
                        break;
                }
                return (
                    <Icon name={iconName}
                          size={32}
                          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                            title={iconName}
                    />
                    // {/*<FontAwesome*/}
                    //     {/*name={iconName}*/}
                    //     {/*size={32}*/}
                    //     {/*color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}*/}
                    // {/*/>*/}
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
            labelStyle: {fontSize: 12},
            showLabel: true,
        },
    }
);
