"use strict";
import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT_BKEND = 'http://rallycoding.herokuapp.com/api/tokens';

export default async() => {
    let previosToken = await AsyncStorage.getItem('pushtoken');
    console.log(previosToken);
    if (previosToken) {
        return;
    } else {
        let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        }

        let token = await Notifications.getExponentPushTokenAsync();
        await axios.post(PUSH_ENDPOINT_BKEND, {token: {token} });
        AsyncStorage.setItem('pushtoken', token);
    }

};