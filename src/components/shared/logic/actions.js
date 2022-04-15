import { _getQuestions, _getUsers } from '../../../_DATA';
import { GET_ALL_QUESTIONS, GET_ALL_USERS, SET_ALL_QUESTIONS, SET_ALL_USERS } from './actionTypes';

export const getAllUsers = () => dispatch => {
    dispatch({type: GET_ALL_USERS});
    return _getUsers().then(response => {
        dispatch({type: SET_ALL_USERS, payload: response});
    })
};

export const getAllQuestions = () => dispatch => {
    dispatch({type: GET_ALL_QUESTIONS});
    return _getQuestions().then(response => {
        dispatch({type: SET_ALL_QUESTIONS, payload: response});
    })
};
