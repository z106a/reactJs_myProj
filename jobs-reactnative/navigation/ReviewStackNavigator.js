import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import SettingsScreen from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';

export default StackNavigator({
    review: {
        screen: ReviewScreen
    },
    settings: {
        screen: SettingsScreen
    }
})