import axios from 'axios';
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_ERROR, FETCH_MESSAGE } from './types';

// const ROOT_URL = 'http://localhost:3090';
axios.defaults.baseURL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function(dispatch){
        axios.post(`/signin`, {email, password})
            .then(response => {
                dispatch({type: AUTH_SUCCESS });
                localStorage.setItem('token', response.data.token);
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}
export function signupUser({email, password}) {
    return function (dispatch) {
        axios.post(`/signup`, {email, password})
            .then(response => {
                dispatch({type: AUTH_SUCCESS});
                localStorage.setItem('token', response.data.token);
            })
            .catch((error) => {
                // Axios then enhances this error with the config, code and reponse like this.

                // console.log('error', error);
                // console.log('errorType', typeof error);
                // console.log('error', Object.assign({}, error).response.data.error);
                // console.log('getOwnPropertyNames', Object.getOwnPropertyNames(error));
                // console.log('stackProperty', Object.getOwnPropertyDescriptor(error, 'stack'));
                // console.log('messageProperty', Object.getOwnPropertyDescriptor(error, 'message'));
                // console.log('stackEnumerable', error.propertyIsEnumerable('stack'));
                // console.log('messageEnumerable', error.propertyIsEnumerable('message'));

                dispatch(authError(Object.assign({}, error).response.data.error));
            });
    }
}

export function signoutUser() {
    return function(dispatch) {
        dispatch({ type: AUTH_FAIL });
        localStorage.removeItem('token');
    }
}

export function fetchMessage() { // get protected page.
    return function (dispatch) {
        axios.get('/', {
            headers: { authorization: localStorage.getItem('token')}
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                });
            });
    }
}


function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}