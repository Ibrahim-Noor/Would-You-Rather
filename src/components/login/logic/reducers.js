import { Map } from 'immutable';
import { ADD_QUESTION_TO_USER_ANSWERS, ADD_QUESTION_TO_USER_QUESTIONS, LOGIN_USER, LOGOUT_USER } from './actionTypes';

const initialState = new Map({
    isLoggedIn: false,
    userData: {}
});

export const loginReducer = (state = initialState, action) => {
    let userData = {}
    switch (action.type) {
        case LOGIN_USER:
            return initialState.merge({
                isLoggedIn: true,
                userData: action.payload
            })
        case LOGOUT_USER:
            return initialState
        case ADD_QUESTION_TO_USER_ANSWERS:
            userData = state.get('userData');
            return state.merge({
                userData: {
                    ...userData,
                    answers: {
                        ...userData.answers,
                        [action.payload.qid]: action.payload.answer
                    }
                }
            })
        case ADD_QUESTION_TO_USER_QUESTIONS:
            userData = state.get('userData');
            return state.merge({
                userData: {
                    ...userData,
                    questions: [
                        ...userData.questions,
                        action.payload
                    ]
                }
            })
        default:
            return state
    }
}