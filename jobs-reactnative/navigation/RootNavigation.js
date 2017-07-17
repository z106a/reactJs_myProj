import React from 'react';
import { StackNavigator } from 'react-navigation';

import AuthTabNavigator from './AuthTabNavigator';

const RootStackNavigator = StackNavigator(
    {
        Main: {
            screen: AuthTabNavigator,
        },
    },
    {
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }),
    }
);

export default class RootNavigator extends React.Component {
    render() {
        return <RootStackNavigator />;
    }


}
