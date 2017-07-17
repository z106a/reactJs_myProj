"use strict";
import { AsyncStorage }  from 'react-native';
import { FACEBOOK_LOGING_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import { Facebook } from 'expo';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({ type: FACEBOOK_LOGING_SUCCESS, payload: token });
    } else {
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('675772359298919', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FACEBOOK_LOGING_SUCCESS, payload: token});
};