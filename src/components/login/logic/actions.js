import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = userData => ({
    type: LOGIN_USER,
    payload: userData
});

export const logoutUser = () => ({ type: LOGOUT_USER });