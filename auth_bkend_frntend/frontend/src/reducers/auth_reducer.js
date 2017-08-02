import { AUTH_SUCCESS, AUTH_FAIL, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, errorMessage: '', isAuth: true };
        case AUTH_FAIL:
            return { ...state, isAuth: false };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload };
        case FETCH_MESSAGE:
            return {...state, message: action.payload };
        default:
            return state;
    }
}